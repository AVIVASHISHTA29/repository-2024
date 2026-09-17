# INSTAGRAM CAPTION — pear.no-style scroll-scrubbed cinematic site (Replit prompt)
# Copy, paste, publish as-is. Pick ONE caption. All are under IG's 2,200-char limit.
# CTA: comment "reel" to receive the prompt link via DM.
# Post: https://www.avivashishta.com/blog/prompt-scroll-scrubbed-cinematic-site-webgl-replit

---

## PRIMARY CAPTION (use this one)

This site looks like a film you scrub with your finger. There is no video in it. 🎞️

One page, one section sixty screens tall, one sticky child that never leaves the viewport. As you scroll, an oil-painting world plays forwards and backwards — linen, crimson drapery, marble, scaffolding around a colossal golden object — and dissolves between scenes through halftone dots and radial rings. Film grain on everything. Highlights pulled to cream.

It's ~600 WebP stills, indexed by scroll position, uploaded two at a time into one WebGL shader that cross-dissolves them. Vanilla TypeScript. No GSAP, no Three.js, no Lenis. Under 350 KB of JS.

The most important line in the prompt is a ban: **do not seek a `<video>` by scroll position.** Video decoders play forwards at a fixed rate. Ask one to jump to an arbitrary timestamp and it walks back to the last keyframe and decodes everything in between — on every scroll tick, sometimes backwards. That's the stutter you've seen on every "scroll-driven video" site. A folder of stills is random-access. Frame 87 costs the same as frame 3.

Second: **specify the load order.** Don't load frames 1→N. Load every 32nd frame, then every 16th, then every 8th — a coarse pass across the whole sequence lands in a dozen requests and every request after that makes it smoother. Progressive JPEG, but for time.

Third: **never draw black.** If the frame you want hasn't arrived, draw the nearest one that has. Nobody notices a slightly wrong frame. Everybody notices a flash.

And the asset rule that saves the most time: don't ask an image model for 121 matching frames. It can't. Generate one still per scene, hand it to image-to-video for a slow push-in, and decompose the clip with ffmpeg.

Full prompt is on my site — copy button included, plus the twelve failure modes each clause exists to prevent.

💬 Comment "reel" and I'll DM you the prompt

.
.
.
#webgl #shaders #webdesign #frontend #creativecoding #webdevelopment #typescript #uidesign #animation #replit #aitools #promptengineering #interactiondesign #scrollanimation #buildinpublic #softwareengineer #devlife #glsl #generativeai #webdesigner

---

## ALT 1 — shorter, hook-forward

Every "scroll-driven video" site stutters for the same reason. 🎞️

Video decoders play forwards at a fixed rate. Set `currentTime` from scroll and the decoder has to find the previous keyframe, decode every frame up to where you want, and present — on every scroll tick, sometimes in reverse. Chrome hitches. Safari hitches and shows a few frames of the wrong image. No JavaScript fixes it, because the format isn't random-access.

So the site in this reel has no scrubbed video at all. It's ~600 WebP stills and one WebGL shader with two textures and a mix. Frame 87 costs the same to show as frame 3.

The whole thing is one Replit Agent prompt — the sticky stage, the frame loader, the shader, the ffmpeg pipeline. Link in bio, copy button included.

💬 Comment "reel" for the prompt

#webgl #webdesign #frontend #creativecoding #replit #promptengineering #shaders #animation #buildinpublic #typescript

---

## ALT 2 — process-forward

I asked an agent for a cinematic scroll site with WebGL and grain. 🎞️

What came back: a `<video>` with `currentTime` set from a scroll listener, a Three.js plane with the video as a texture, and a GSAP timeline for the headlines. 1.4 MB of JS. Stuttered on every seek. Black between sections.

Not the agent's fault. That's what "scroll-driven video" means on the internet.

The second version of the prompt bans the video by name and specifies the replacement in the same sentence: numbered WebP stills, a manifest, a mobile tier, a loader that lands a coarse pass first, a `nearest()` accessor so nothing is ever black, two reused textures and one shader that cross-dissolves any pair.

And for the assets — don't ask an image model for 121 matching frames. Generate one still per scene, send it to image-to-video for a slow push-in, split the clip with ffmpeg. Consistency comes free.

Full brief on my site with every clause explained.

💬 Comment "reel" and I'll send it

#webgl #creativecoding #frontend #replit #promptengineering #webdesign #shaders #generativeai #buildinpublic #devlife

---

## STORY / FIRST-COMMENT LINE

The full prompt + why each line is in it → avivashishta.com/blog/prompt-scroll-scrubbed-cinematic-site-webgl-replit
