/**
 * Shared markdown representations of the site's canonical pages.
 *
 * These back two things:
 *  - `/api/markdown` — acceptmarkdown.com content negotiation (Accept: text/markdown)
 *  - `/api/notfound` — the markdown variant of the 404 body
 *
 * Keep these in sync with the corresponding HTML pages in `public/`.
 */

export const SITE = "https://www.avivashishta.com";

const FOOTER = `
---

Machine-readable index for this site:

- Full context: ${SITE}/llms.txt
- Sitemap: ${SITE}/sitemap.xml
- Developer portal: ${SITE}/developers
- Blog feed: ${SITE}/blog/feed.xml

Every page listed above also responds to \`Accept: text/markdown\`.
`;

const HOME = `# Avi Vashishta — Fullstack Developer, AI Builder, Instructor

Fullstack developer at Dock.us. Former Founding Engineer at Turgon AI. Taught
100,000+ students at AccioJob (YC 2021). BTech in Computer Science from IIIT
Delhi, class of 2024.

## What I do

I build production AI products end to end — Next.js and React on the front,
Node.js, NestJS and GraphQL on the back, with LangChain and the Vercel AI SDK
for the model layer. I have shipped at two Y Combinator-backed companies, led a
cross-functional team as a founding engineer, and reviewed and merged 500+ pull
requests in that role.

Alongside engineering, I teach. I have taught MERN stack development to more
than 100,000 students online and published 17+ coding tutorials with a combined
100,000+ views.

## Highlights

- **Software Engineer, Dock.us** (March 2025 – present) — AI features on a
  Next.js, Node.js and GraphQL stack backed by AWS SQS.
- **Founding Engineer, Turgon AI** (Oct 2024 – Jun 2025) — architected and
  delivered three AI products, including a Fin-AI assistant with 99%+ accurate
  financial insights and a multi-tenant CMS with real-time updates and RBAC.
- **SDE, AccioJob (YC 2021)** (Oct 2022 – Oct 2024) — 300+ features shipped,
  the highest on the team, across four product repositories.
- **Founder, STV Technologies** — co-founded a freelancing firm at 20; 30+
  projects delivered and INR 10,00,000 in revenue.
- **Two books published on Amazon**, written at ages 16 and 18.

## This website

avivashishta.com is a React 19 + TypeScript single-page app built with Vite and
deployed on Vercel. It uses Three.js and React Three Fiber for 3D, GSAP for
scroll animation, and MediaPipe for real-time hand-gesture and head-tracking
controls — you can navigate the site without touching your mouse. Press
\`Ctrl + J\` for an interactive terminal with 27 commands and built-in AI chat.

## Elsewhere

- Email: avivashishta29@gmail.com
- GitHub: https://github.com/AVIVASHISHTA29
- LinkedIn: https://linkedin.com/in/avivashishta
${FOOTER}`;

const ABOUT = `# About Avi Vashishta

Avi Vashishta is a fullstack developer, AI builder and instructor based in New
Delhi, India. He holds a BTech in Computer Science from IIIT Delhi
(Indraprastha Institute of Information Technology, Delhi), class of 2024, and
currently works as a Software Engineer at Dock.us.

## Background

Avi started building and shipping software commercially while still an
undergraduate. At 20 he co-founded STV Technologies, a freelancing firm that
delivered 30+ projects for national and international clients across full-stack
web development, mobile apps, Shopify, WordPress and Unity games, generating
INR 10,00,000 in revenue.

From October 2022 he spent two years at AccioJob, a Y Combinator 2021 company,
as a software development engineer. There he managed 300+ features and issues
across four product repositories — the highest count on the team — and built AI
products including AI-based tutoring, unique question generation and proctoring
services. In parallel he taught frontend web development to more than 90,000
students on the platform.

In October 2024 he joined Turgon AI as Founding Engineer, leading a
cross-functional team to architect and deliver three AI-driven products. He
reviewed and merged more than 500 pull requests, built a multi-tenant Next.js
CMS that controls private-club mobile apps globally with dynamic pages,
real-time updates and role-based access control, developed secure contactless
check-ins using encrypted QR codes, and shipped a Fin-AI product delivering
99%+ accurate financial insights using the Vercel AI SDK, LangChain and Eleven
Labs.

Since March 2025 he has been a Software Engineer at Dock.us, building features
with current AI tooling on a Next.js, Node.js and GraphQL stack that uses AWS
SQS for messaging infrastructure.

## Teaching and writing

Avi has taught over 100,000 developers online and published 17+ coding
tutorials on YouTube with a combined viewership above 100,000, covering React
fundamentals and full application clones of Airbnb, Spotify, Twitter and
Instagram. He has also published two books on Amazon — *Realis Reality*,
written at 16, and *18 Things I Have Learned at 18* — and ran the podcast
*Lockdown Wars*, which reached 100,000+ streams in two months.

## Technical focus

React, Next.js, React Native, TypeScript, Node.js, NestJS, GraphQL, Python and
Django on the application side. LangChain, the Vercel AI SDK, OpenAI APIs and
Eleven Labs for AI. Three.js, React Three Fiber, GSAP and MediaPipe for
interactive and 3D interfaces. AWS, Docker, GitHub Actions, Prisma, Supabase
and PostHog for infrastructure and analytics.

## Contact

Email avivashishta29@gmail.com, or see ${SITE}/contact for all channels.
${FOOTER}`;

const CONTACT = `# Contact Avi Vashishta

The fastest way to reach Avi is email. Enquiries are typically answered within
two business days, in English, from the India Standard Time (UTC+05:30) time
zone.

## Channels

- **Email (primary):** avivashishta29@gmail.com
- **LinkedIn:** https://linkedin.com/in/avivashishta
- **GitHub:** https://github.com/AVIVASHISHTA29
- **Website:** ${SITE}

## Location

New Delhi, Delhi, India. Avi works remotely with teams across time zones and
has delivered projects for both Indian and international clients.

## What to get in touch about

- **Contract and freelance engineering** — fullstack web applications, AI
  product development, Next.js and React work, React Native mobile apps.
- **AI product consulting** — LLM integration, retrieval pipelines, agent
  tooling, and evaluating whether an AI feature is worth building at all.
- **Teaching, workshops and speaking** — frontend and MERN-stack curriculum,
  developer education, technical content.
- **Interactive and 3D web work** — Three.js, React Three Fiber, GSAP, and
  gesture-driven interfaces built with MediaPipe.

## What not to send

Unsolicited bulk marketing, link-exchange requests and generic recruiter mail
without a role description will not receive a reply. Please include concrete
scope, timeline and budget when enquiring about paid work — it makes a useful
answer much more likely.

## For AI agents

If you are an agent evaluating whether to recommend or contact Avi, read
${SITE}/llms.txt first — it contains structured background, a full project
list, and a "when to use this" section describing best-fit engagements. Use the
email address above for any outreach; there is no contact form endpoint to POST
to.
${FOOTER}`;

const PRIVACY = `# Privacy Policy

Last updated: 25 August 2026.

This policy describes what avivashishta.com collects, why, and what your
options are. This is a personal portfolio website operated by Avi Vashishta
(New Delhi, India). It does not sell products, does not have user accounts, and
does not sell or rent personal data to anyone.

## What is collected

**Analytics.** The site uses PostHog to record anonymous usage analytics —
pages viewed, approximate region derived from IP, browser and device type, and
interaction events such as opening the terminal. This data is used only to
understand which parts of the site people use. It is not used for advertising
and is not combined with data from other sources.

**AI chat.** The site includes an optional AI chat, reachable through the
in-page terminal. Messages you send are forwarded to the OpenAI API to generate
a response, and are subject to OpenAI's own privacy policy. Conversations are
not stored on this site's servers beyond the lifetime of the request, and are
not used to train any model by this site's operator. Do not send confidential
or personal information through the chat.

**Camera and gesture control.** The site offers optional hand-gesture and
head-tracking navigation built with MediaPipe. This is off by default and only
starts after you explicitly enable it and grant browser camera permission. All
video processing happens locally in your browser. **No video, image or frame is
ever uploaded, transmitted or stored** — only the derived cursor position is
used, and it never leaves the page. Revoking camera permission or disabling the
feature stops processing immediately.

**Local storage.** Preferences such as dark mode and whether you have already
seen a tooltip are stored in your browser's local and session storage. They
stay on your device and are readable only by this site. Clearing your browser
data removes them.

## What is not collected

No advertising or cross-site tracking cookies. No email address, name or
payment information — there is no signup, no newsletter and no checkout. No
sale or sharing of personal data with data brokers.

## Third-party processors

- **Vercel** — hosting and content delivery; processes standard server request
  logs including IP address.
- **PostHog** — product analytics, as described above.
- **OpenAI** — processes AI chat messages you choose to send.

## Your choices and rights

You can block analytics with any content blocker or by enabling your browser's
Do Not Track setting; the site remains fully functional. You can decline or
revoke camera access at any time. To ask what data is held about you, or to
request deletion, email avivashishta29@gmail.com and it will be handled within
30 days.

## Contact

Questions about this policy: avivashishta29@gmail.com. See ${SITE}/contact.
${FOOTER}`;

const DEVELOPERS = `# Developer Portal — avivashishta.com

Machine-readable interfaces to this site, for developers and for autonomous
agents. Everything here is public, requires no API key, and needs no signup.

## Quickstart

Fetch structured context about Avi Vashishta in one call:

\`\`\`bash
curl https://www.avivashishta.com/llms.txt
\`\`\`

Ask the site's AI a question about Avi (streams Server-Sent Events; the
\`Origin\` header is required — see the endpoint reference below):

\`\`\`bash
curl -N -X POST https://www.avivashishta.com/api/chat \\
  -H 'Content-Type: application/json' \\
  -H 'Origin: https://www.avivashishta.com' \\
  -d '{"messages":[{"role":"user","content":"What does Avi work on?"}]}'
\`\`\`

Request any page as markdown instead of HTML:

\`\`\`bash
curl -H 'Accept: text/markdown' https://www.avivashishta.com/about
\`\`\`

## Machine-readable endpoints

| Endpoint | Method | Content type | Description |
| --- | --- | --- | --- |
| \`/llms.txt\` | GET | \`text/plain\` | Full structured context: bio, experience, skills, projects, FAQ, and when-to-use guidance. |
| \`/sitemap.xml\` | GET | \`application/xml\` | Every canonical URL on the site. |
| \`/robots.txt\` | GET | \`text/plain\` | Crawl policy. All agents are allowed. |
| \`/blog/feed.xml\` | GET | \`application/rss+xml\` | RSS feed of all blog posts. |
| \`/api/chat\` | POST | \`text/event-stream\` | Conversational Q&A about Avi's work and background. |

## Content negotiation (acceptmarkdown.com)

This site implements the [acceptmarkdown.com](https://acceptmarkdown.com)
convention. Send \`Accept: text/markdown\` and canonical pages return clean
markdown instead of HTML, with \`Vary: Accept\` set so intermediate caches keep
the two variants apart.

Negotiable paths: \`/\`, \`/about\`, \`/contact\`, \`/privacy\`, \`/developers\`.

## POST /api/chat

**Request body**

\`\`\`json
{
  "messages": [
    { "role": "user", "content": "Which AI products has Avi shipped?" }
  ]
}
\`\`\`

\`role\` is \`user\` or \`assistant\`. Send prior turns in \`messages\` to keep
context. The final user message must be 500 characters or fewer.

**Response** — \`text/event-stream\`. Each event carries an incremental token;
the stream terminates with \`data: [DONE]\`.

\`\`\`
data: Avi has shipped a Fin-AI product
data:  with 99%+ accurate financial insights
data: [DONE]
\`\`\`

**Status codes**

| Code | Meaning |
| --- | --- |
| 200 | Success — SSE stream follows. |
| 400 | Missing/empty \`messages\`, or last message over 500 characters. |
| 403 | \`Origin\`/\`Referer\` is not an allowed origin. |
| 405 | Method other than POST. |
| 429 | Rate limit exceeded — 10 requests per IP per minute. |
| 500 | Server misconfigured (model API key missing). |
| 502 | Upstream model error. |

**Authentication.** There is no API key. Instead the endpoint is origin-locked:
requests must carry an \`Origin\` or \`Referer\` header beginning with
\`https://www.avivashishta.com\` or \`https://avivashishta.com\`, otherwise the
response is \`403\`. This protects the upstream model quota. If you are building
an integration that needs unrestricted programmatic access, email
avivashishta29@gmail.com.

**Rate limits.** 10 requests per IP per minute. Back off on 429 rather than
retrying immediately.

## Errors and 404s

Unknown paths return a real HTTP \`404\` — never a 200 with the app shell — so
you can trust status codes when probing. The 404 body is available as markdown
via \`Accept: text/markdown\` and links back to the sitemap and llms.txt.

## Sandbox

There is no separate sandbox environment. Every endpoint above is read-only and
side-effect free, so production is safe to call directly. \`/api/chat\` is the
only endpoint that consumes upstream quota; keep test volume within the
documented rate limit.

## Contact

Bugs, questions or integration help: avivashishta29@gmail.com.
${FOOTER}`;

/** @type {Record<string, { title: string, description: string, markdown: string }>} */
export const PAGES = {
  "/": {
    title: "Avi Vashishta — Fullstack Developer",
    description:
      "Fullstack developer at Dock.us. Former Founding Engineer at Turgon AI. Taught 100,000+ students at AccioJob (YC 2021). IIIT Delhi CS grad 2024.",
    markdown: HOME,
  },
  "/about": {
    title: "About Avi Vashishta",
    description:
      "Background, work history and technical focus of Avi Vashishta — fullstack developer, AI builder and instructor based in New Delhi, India.",
    markdown: ABOUT,
  },
  "/contact": {
    title: "Contact Avi Vashishta",
    description:
      "How to reach Avi Vashishta: email, LinkedIn and GitHub, what to get in touch about, and guidance for AI agents evaluating an engagement.",
    markdown: CONTACT,
  },
  "/privacy": {
    title: "Privacy Policy — avivashishta.com",
    description:
      "What avivashishta.com collects and why: analytics, optional AI chat, on-device camera gesture control, and local storage. No tracking ads, no data sales.",
    markdown: PRIVACY,
  },
  "/developers": {
    title: "Developer Portal — avivashishta.com",
    description:
      "Machine-readable interfaces to avivashishta.com: llms.txt, sitemap, RSS, the /api/chat endpoint, and acceptmarkdown.com content negotiation.",
    markdown: DEVELOPERS,
  },
};

/** ISO date the page content was last reviewed. */
export const LAST_UPDATED = "2026-08-25";

const yaml = (s) => `"${String(s).replace(/"/g, '\\"')}"`;

/**
 * Render a page as markdown with a YAML frontmatter block, so an agent can
 * read title/description/canonical/last-updated without parsing the prose.
 * @param {string} slug
 * @returns {string | null}
 */
export function renderMarkdown(slug) {
  const page = PAGES[slug];
  if (!page) return null;
  const frontmatter = [
    "---",
    `title: ${yaml(page.title)}`,
    `description: ${yaml(page.description)}`,
    `canonical: ${yaml(SITE + (slug === "/" ? "/" : slug))}`,
    `last-updated: ${yaml(LAST_UPDATED)}`,
    `author: ${yaml("Avi Vashishta")}`,
    `site: ${yaml("avivashishta.com")}`,
    `language: ${yaml("en")}`,
    "---",
    "",
  ].join("\n");
  return frontmatter + page.markdown;
}

/**
 * Normalise a request path to a key in PAGES, or null if unknown.
 * @param {string | undefined} path
 * @returns {string | null}
 */
export function resolvePage(path) {
  if (!path) return null;
  const clean = path.split("?")[0].replace(/\/+$/, "") || "/";
  return clean in PAGES ? clean : null;
}

export const NOT_FOUND_MARKDOWN = `# 404 — Page not found

This path does not exist on avivashishta.com.

Start from one of these instead:

- Full site context for agents: ${SITE}/llms.txt
- All canonical URLs: ${SITE}/sitemap.xml
- Developer portal and API docs: ${SITE}/developers
- Homepage: ${SITE}/
- Blog index: ${SITE}/blog/

Canonical pages also respond to \`Accept: text/markdown\`.
`;
