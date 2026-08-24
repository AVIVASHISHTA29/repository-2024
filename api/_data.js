/**
 * Structured data behind the /api/v1 JSON endpoints.
 *
 * Same facts as llms.txt and the markdown pages, shaped for machine consumption
 * so an agent does not have to parse prose to answer "where does Avi work" or
 * "what has he built".
 */

export const API_VERSION = "v1";

/** Rate limit applied to every /api endpoint, in requests per window. */
export const RATE_LIMIT = 60;
export const RATE_WINDOW_SECONDS = 60;

export const PROFILE = {
  name: "Avi Vashishta",
  headline: "Fullstack Developer | AI Builder | Instructor | Entrepreneur",
  summary:
    "Fullstack developer at Dock.us, former Founding Engineer at Turgon AI, and instructor to 100,000+ students. BTech in Computer Science from IIIT Delhi, class of 2024. Ships production AI products end to end.",
  url: "https://www.avivashishta.com",
  email: "avivashishta29@gmail.com",
  location: {
    locality: "New Delhi",
    region: "Delhi",
    country: "IN",
    timezone: "Asia/Kolkata",
    utcOffset: "+05:30",
    remote: true,
  },
  education: [
    {
      institution: "IIIT Delhi",
      fullName:
        "Indraprastha Institute of Information Technology, Delhi",
      degree: "BTech",
      field: "Computer Science",
      graduationYear: 2024,
      url: "https://www.iiitd.ac.in",
    },
  ],
  currentRole: {
    title: "Software Engineer",
    company: "Dock.us",
    startDate: "2025-03",
    endDate: null,
  },
  experience: [
    {
      title: "Software Engineer",
      company: "Dock.us",
      startDate: "2025-03",
      endDate: null,
      summary:
        "Building AI features on a Next.js, Node.js and GraphQL stack with AWS SQS for messaging infrastructure.",
      technologies: ["Next.js", "Node.js", "GraphQL", "AWS SQS", "TypeScript"],
    },
    {
      title: "Founding Engineer",
      company: "Turgon AI",
      startDate: "2024-10",
      endDate: "2025-06",
      summary:
        "Led a cross-functional team to architect and deliver three AI-driven products. Reviewed and merged 500+ pull requests. Built a multi-tenant Next.js CMS with real-time updates and RBAC, contactless check-in via encrypted QR codes, and a Fin-AI product with 99%+ accurate financial insights.",
      technologies: [
        "Next.js",
        "TypeScript",
        "LangChain",
        "Vercel AI SDK",
        "Eleven Labs",
        "Prisma",
        "Supabase",
        "Upstash Redis",
        "PostHog",
        "Expo",
      ],
    },
    {
      title: "Software Development Engineer",
      company: "AccioJob",
      companyNote: "Y Combinator 2021",
      startDate: "2022-10",
      endDate: "2024-10",
      summary:
        "Shipped 300+ features and issues, the highest on the team, across four product repositories. Built AI-based tutoring, question generation and proctoring services. Taught frontend web development to 90,000+ students.",
      technologies: ["React", "Node.js", "JavaScript", "TypeScript"],
    },
    {
      title: "Founder",
      company: "STV Technologies",
      startDate: "2021-10",
      endDate: "2022-08",
      summary:
        "Co-founded a freelancing firm at age 20. Delivered 30+ projects for national and international clients across web, mobile, Shopify, WordPress and Unity. Generated INR 10,00,000 in revenue.",
      technologies: ["React", "Node.js", "Shopify", "WordPress", "Unity", "C#"],
    },
    {
      title: "Fullstack Intern",
      company: "Attrilu",
      startDate: "2022-02",
      endDate: "2022-04",
      summary:
        "Built a web application for creators and brand marketing using Next.js and Django, working with Meta (Facebook) APIs.",
      technologies: ["Next.js", "Django", "Python"],
    },
    {
      title: "Mobile App Intern",
      company: "Fitzura",
      startDate: "2022-01",
      endDate: "2022-03",
      summary:
        "Developed a fitness clothing app using React Native with a Python Django backend.",
      technologies: ["React Native", "Django", "Python"],
    },
  ],
  skills: {
    frontend: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "SCSS",
      "Tailwind CSS",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Motion",
      "Redux",
      "Zustand",
    ],
    backend: [
      "Node.js",
      "NestJS",
      "Express",
      "Python",
      "Django",
      "Flask",
      "MongoDB",
      "REST APIs",
      "GraphQL",
      "Firebase",
    ],
    ai: [
      "LangChain",
      "Vercel AI SDK",
      "OpenAI API",
      "Eleven Labs",
      "MediaPipe",
    ],
    infrastructure: [
      "AWS (SQS, EC2)",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Prisma ORM",
      "Supabase",
      "Upstash Redis",
      "PostHog",
    ],
  },
  highlights: [
    "Shipped production AI products at two Y Combinator-backed companies",
    "Taught 100,000+ developers online",
    "Reviewed and merged 500+ pull requests as a founding engineer",
    "300+ features shipped at AccioJob, the highest on the team",
    "Co-founded a firm generating INR 10,00,000 in revenue at age 20",
    "Published two books on Amazon, written at ages 16 and 18",
  ],
  availability: {
    openTo: [
      "contract engineering",
      "freelance engineering",
      "AI product consulting",
      "teaching and workshops",
      "speaking",
    ],
    contactUrl: "https://www.avivashishta.com/contact",
    preferredContact: "email",
    typicalResponseTime: "2 business days",
  },
  links: {
    website: "https://www.avivashishta.com",
    github: "https://github.com/AVIVASHISHTA29",
    linkedin: "https://linkedin.com/in/avivashishta",
    llmsTxt: "https://www.avivashishta.com/llms.txt",
    blog: "https://www.avivashishta.com/blog/",
  },
};

export const PROJECTS = [
  {
    id: "portfolio-v3",
    name: "avivashishta.com — gesture-controlled 3D portfolio",
    description:
      "Developer portfolio with real-time hand gesture and head tracking controls. 3D UI, an interactive terminal with 27 commands, AI chat, dark/light mode and GSAP scroll animations.",
    category: "web",
    technologies: [
      "React 19",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "MediaPipe",
      "Vite",
    ],
    url: "https://www.avivashishta.com",
    repositoryUrl: "https://github.com/AVIVASHISHTA29/repository-2024",
    year: 2025,
  },
  {
    id: "turgon-fin-ai",
    name: "Turgon Fin-AI",
    description:
      "AI-powered financial insights product with 99%+ accuracy and a voice-enabled assistant, serving private club members.",
    category: "ai",
    technologies: ["Vercel AI SDK", "LangChain", "Eleven Labs", "Next.js"],
    url: null,
    repositoryUrl: null,
    year: 2025,
  },
  {
    id: "turgon-club-cms",
    name: "Turgon Club CMS",
    description:
      "Multi-tenant Next.js CMS controlling private club mobile apps globally, with dynamic pages, real-time updates and role-based access control.",
    category: "web",
    technologies: ["Next.js", "Prisma", "Supabase Realtime", "TypeScript"],
    url: null,
    repositoryUrl: null,
    year: 2025,
  },
  {
    id: "ai-messaging-app",
    name: "AI for Messaging",
    description:
      "Turns your thoughts into effective messages using AI. No signup required; supports chat and voice input with quick chips.",
    category: "ai",
    technologies: ["React Native", "Flask", "Python", "OpenAI API"],
    url: null,
    repositoryUrl:
      "https://github.com/orgs/whatsapp-ai-helper/repositories",
    year: 2023,
  },
  {
    id: "boldbot",
    name: "BOLDBot",
    description:
      "Customer-service automation for Instagram businesses, improving response efficiency and consumer interaction.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "NestJS", "Redux", "Firebase"],
    url: null,
    repositoryUrl: "https://github.com/BoldStore/bold-bot-frontend",
    year: 2022,
  },
  {
    id: "bold-store",
    name: "BOLD Store",
    description:
      "One-click marketplace integrated with Facebook APIs that automatically converts a social feed into a store.",
    category: "mobile",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Node.js"],
    url: null,
    repositoryUrl: "https://github.com/BoldStore/MobileApp",
    year: 2022,
  },
  {
    id: "anonimo",
    name: "Anonimo.fun",
    description:
      "Social app for anonymous conversations — share thoughts without fear of judgment.",
    category: "web",
    technologies: ["Next.js", "Firebase", "JavaScript", "MUI"],
    url: null,
    repositoryUrl: null,
    year: 2021,
  },
  {
    id: "infinite-rider",
    name: "Infinite Rider / Infinite Rider 3D",
    description:
      "Flappy-bird-style infinite obstacle-avoidance game, released in both 2D and 3D.",
    category: "game",
    technologies: ["Unity", "C#"],
    url: null,
    repositoryUrl: null,
    year: 2021,
  },
];

/** Standard headers every JSON API response carries. */
export function apiHeaders(res, { remaining, resetSeconds }) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Vary", "Accept, Accept-Encoding");
  res.setHeader("X-API-Version", API_VERSION);
  // RFC 9239-style rate limit signalling so agents can self-throttle.
  res.setHeader("RateLimit-Limit", String(RATE_LIMIT));
  res.setHeader("RateLimit-Remaining", String(Math.max(0, remaining)));
  res.setHeader("RateLimit-Reset", String(resetSeconds));
  res.setHeader(
    "RateLimit-Policy",
    `${RATE_LIMIT};w=${RATE_WINDOW_SECONDS}`
  );
}

/**
 * RFC 9457 problem detail. Every non-2xx response across /api uses this shape,
 * so an agent can branch on `code` without parsing prose.
 */
export function problem(res, status, code, title, detail, extra = {}) {
  res.setHeader("Content-Type", "application/problem+json; charset=utf-8");
  return res.status(status).json({
    type: `https://www.avivashishta.com/developers#${code}`,
    title,
    status,
    code,
    detail,
    instance: extra.instance,
    ...extra,
  });
}

const buckets = new Map();

/** Fixed-window limiter shared by the /api/v1 read endpoints. */
export function rateLimit(ip) {
  const now = Date.now();
  const entry = buckets.get(ip);
  if (!entry || now > entry.resetAt) {
    const resetAt = now + RATE_WINDOW_SECONDS * 1000;
    buckets.set(ip, { count: 1, resetAt });
    return { limited: false, remaining: RATE_LIMIT - 1, resetSeconds: RATE_WINDOW_SECONDS };
  }
  entry.count++;
  const resetSeconds = Math.max(1, Math.ceil((entry.resetAt - now) / 1000));
  return {
    limited: entry.count > RATE_LIMIT,
    remaining: RATE_LIMIT - entry.count,
    resetSeconds,
  };
}

export function clientIp(req) {
  return (
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}
