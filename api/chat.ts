import type { VercelRequest, VercelResponse } from "@vercel/node";

const ALLOWED_ORIGINS = [
  "https://www.avivashishta.com",
  "https://avivashishta.com",
];

// Simple in-memory rate limiter: 10 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60 * 1000;

function checkRateLimit(ip: string): {
  limited: boolean;
  remaining: number;
  resetSeconds: number;
} {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return {
      limited: false,
      remaining: RATE_LIMIT - 1,
      resetSeconds: RATE_WINDOW_MS / 1000,
    };
  }
  entry.count++;
  return {
    limited: entry.count > RATE_LIMIT,
    remaining: Math.max(0, RATE_LIMIT - entry.count),
    resetSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
  };
}

/** RFC 9457 problem detail, so agents branch on `code` not on prose. */
function problem(
  res: VercelResponse,
  status: number,
  code: string,
  title: string,
  detail: string,
  extra: Record<string, unknown> = {}
) {
  res.setHeader("Content-Type", "application/problem+json; charset=utf-8");
  return res.status(status).json({
    type: `https://www.avivashishta.com/developers#${code}`,
    title,
    status,
    code,
    detail,
    ...extra,
  });
}

const SYSTEM_PROMPT = `You are an AI assistant on Avi Vashishta's portfolio website. You represent Avi and answer questions about him in a helpful, friendly, slightly witty tone.

About Avi:
- Full name: Avi Vashishta
- Education: BTech in Computer Science from IIIT Delhi (Indraprastha Institute of Information Technology, Delhi). Graduated 2024.
- Current role: Software Engineer at Dock.us since March 2025. Building features using the latest AI technologies on a Next.js, Node.js, GraphQL based tech stack with AWS SQS.
- Founding Engineer at Turgon AI (October 2024 - June 2025): Led a cross-functional team to architect and deliver three AI-driven products. Reviewed and merged 500+ pull requests. Built a multi-tenant Next.js CMS controlling private club mobile apps globally with dynamic pages, real-time updates, and RBAC. Developed secure contactless check-ins using encrypted QR codes. Built a Fin-AI product with 99%+ accurate financial insights using Vercel AI SDK, LangChain, and Eleven Labs. Architected an AI-driven Expo mobile app using BFF architecture, digital wallet and ticketing system, and CI/CD pipelines with GitHub Actions. Integrated PostHog analytics, Redux Toolkit, Upstash Redis, and multi-tenant deployments via Vercel with Prisma ORM and Supabase Realtime.
- SDE at AccioJob (YC 2021 batch) from October 2022 to October 2024: Managed 300+ features/issues (highest in the team) across four product repositories. Built AI products (AI-based tutoring, unique question generation, proctoring services). Taught Frontend Web Development to 90,000+ students online.
- Founded STV Technologies (freelancing firm) - completed 30+ freelance projects with international and national clients. Revenue: INR 10,00,000. Projects spanned full-stack web dev, app dev, Shopify, WordPress, Unity games.
- Fullstack Intern at Attrilu: Worked with Facebook (Meta) APIs, built web app for creators and brand marketing using Next.js and Django.
- Mobile App Intern at Fitzura: Developed fitness clothing app using React Native with Python Django backend.
- Skills: React, Next.js, React Native, TypeScript, JavaScript, Node.js, NestJS, Express, Python, Django, Flask, Three.js, GSAP, Framer Motion, Firebase, MongoDB, Unity/C#, Figma
- Published 2 books on Amazon: "Realis Reality" (written at age 16) and "18 Things I Have Learned at 18"
- Started "Lockdown Wars" podcast - 100,000+ streams in 2 months
- YouTube channel with coding tutorials: built Spotify Clone, Airbnb Clone, Twitter Clone, Instagram Clone, Mario, Pacman, Snake, Flappy Bird, and more
- Personal projects: AI For Messaging App (React Native + Flask + OpenAI), BOLDBot (Next.js + NestJS customer service automation), BOLD Store (React Native marketplace), Infinite Rider (Unity game), Anonimo.fun (anonymous social platform)
- Interests: Algo Trading, UI Design, Product Design, Entrepreneurship
- Contact: avivashishta29@gmail.com | LinkedIn: linkedin.com/in/avivashishta | GitHub: github.com/AVIVASHISHTA29

Rules:
- Answer only questions about Avi, his work, skills, and experience
- If asked about unrelated topics, politely redirect to portfolio-related conversation
- Keep responses concise (2-4 sentences unless more detail is requested)
- Be playful and use terminal/developer humor when appropriate
- Never make up information not provided above`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("X-API-Version", "v1");
  res.setHeader("Vary", "Accept, Accept-Encoding");

  // Rate limit by IP. Signalled on every response so agents self-throttle
  // rather than discovering the limit by hitting a 429.
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  const { limited, remaining, resetSeconds } = checkRateLimit(ip);
  res.setHeader("RateLimit-Limit", String(RATE_LIMIT));
  res.setHeader("RateLimit-Remaining", String(remaining));
  res.setHeader("RateLimit-Reset", String(resetSeconds));
  res.setHeader("RateLimit-Policy", `${RATE_LIMIT};w=${RATE_WINDOW_MS / 1000}`);

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return problem(
      res,
      405,
      "method_not_allowed",
      "Method not allowed",
      `This endpoint accepts POST, not ${req.method}.`
    );
  }

  // Origin check — only allow requests from the portfolio site
  const origin = req.headers.origin || req.headers.referer;
  const isAllowed =
    process.env.NODE_ENV === "development" ||
    (origin && ALLOWED_ORIGINS.some((o) => origin.startsWith(o)));
  if (!isAllowed) {
    return problem(
      res,
      403,
      "origin_not_allowed",
      "Forbidden",
      "This endpoint is origin-locked. Send an Origin or Referer header of https://www.avivashishta.com. See /auth.md.",
      { documentation: "https://www.avivashishta.com/auth.md" }
    );
  }

  if (limited) {
    res.setHeader("Retry-After", String(resetSeconds));
    return problem(
      res,
      429,
      "rate_limited",
      "Too many requests",
      `Rate limit exceeded. Retry after ${resetSeconds} seconds.`,
      { retryAfterSeconds: resetSeconds }
    );
  }

  const { messages } = req.body ?? {};
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return problem(
      res,
      400,
      "invalid_request",
      "Invalid request body",
      "`messages` must be a non-empty array of { role, content } objects.",
      { parameter: "messages" }
    );
  }

  const lastMsg = messages[messages.length - 1]?.content;
  if (typeof lastMsg === "string" && lastMsg.length > 500) {
    return problem(
      res,
      400,
      "message_too_long",
      "Message too long",
      "The final user message must be 500 characters or fewer.",
      { parameter: "messages", maxLength: 500 }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return problem(
      res,
      500,
      "service_unconfigured",
      "AI service not configured",
      "The upstream model API key is missing. This is a server-side misconfiguration; retrying will not help."
    );
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!response.ok) {
      return problem(
        res,
        502,
        "upstream_error",
        "AI service returned an error",
        "The upstream model provider returned an error. This is usually transient — retry with backoff."
      );
    }

    // Stream SSE back to the client
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const reader = response.body?.getReader();
    if (!reader) {
      return problem(
        res,
        502,
        "upstream_error",
        "Empty upstream response",
        "The upstream model provider returned no response body. Retry with backoff."
      );
    }

    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      if (value) {
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              res.write("data: [DONE]\n\n");
            } else {
              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  res.write(`data: ${JSON.stringify({ content })}\n\n`);
                }
              } catch {
                // skip malformed chunks
              }
            }
          }
        }
      }
    }

    res.end();
  } catch {
    return problem(
      res,
      500,
      "internal_error",
      "AI service unavailable",
      "An unexpected error occurred while generating a response. Retry with backoff."
    );
  }
}
