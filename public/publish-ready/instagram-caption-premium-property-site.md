# INSTAGRAM CAPTION — Premium property site / scroll choreography (Replit prompt)
# Copy, paste, publish as-is. Pick ONE caption. All are under IG's 2,200-char limit.
# CTA: comment "scroll" to receive the prompt link via DM.
# Post: https://www.avivashishta.com/blog/prompt-premium-property-site-scroll-choreography-replit

---

## PRIMARY CAPTION (use this one)

Six sections. Six completely different scroll behaviours. One prompt. 🏛️

An arch-shaped hole opens in a plum curtain, widens, and flies off the top of the screen. The hero holds still while the camera dives into it. A four-word sentence pulls itself apart. The location section turns sideways. The amenities grid scales up until the next section is revealed *through* it. Then the whole page clips itself into a card and the footer rises behind it.

No WebGL. No canvas. No framework. Every effect is a transform, an opacity, a clip-path or a mask.

The single most important line in the prompt is a ban: **do not use GSAP's `pin: true`.** Every tutorial tells you to pin a section to hold it still. Combined with smooth scroll it gives you about a pixel of jitter at each boundary, because pinning injects a spacer and toggles position:fixed — it forces layout on the exact frames a scroll engine is interpolating. A tall wrapper with a `position: sticky` child never touches document flow at all.

Second most important: **every entrance needs its exit named as the opposite.** Almost nobody builds this, because it's twice the work for something you only see on the way back up — and without it, scrolling backwards makes things animate forwards, which reads as the page glitching.

Third: scrub geometry, fire type. Text tied to scroll position is never held still long enough to actually read.

Full prompt is on my site — copy button included, plus the 20 failure modes each clause exists to prevent.

💬 Comment "scroll" and I'll DM you the prompt

.
.
.
#gsap #scrolltrigger #webdesign #frontend #creativecoding #webdevelopment #javascript #uidesign #animation #replit #aitools #promptengineering #webflow #interactiondesign #cssanimation #buildinpublic #softwareengineer #devlife #luxuryrealestate #webdesigner

---

## ALT 1 — shorter, hook-forward

The line that fixed my scroll animations was a ban, not a technique. 🏛️

`pin: true` is what every GSAP tutorial reaches for when you want a section to hold still. It also injects a pin-spacer and toggles position:fixed — so it forces layout on the same frames your smooth-scroll engine is interpolating scroll position. Result: about a pixel of jitter at every boundary that you'll spend an afternoon failing to screenshot.

A tall wrapper with a `position: sticky` child does the same job on the compositor and never touches document flow.

That one swap is what made this whole page — arch preloader, hero dive, sideways location track, clip-path curtains, a footer the page clips itself into — run clean.

Whole thing is one Replit prompt. It's on my site with a copy button.

💬 Comment "scroll" for the prompt

.
.
.
#gsap #scrolltrigger #webdesign #frontend #javascript #creativecoding #animation #replit #promptengineering #uidesign #webdevelopment #cssanimation #buildinpublic #devlife #interactiondesign

---

## ALT 2 — the "why does this feel templated" angle

Your scroll site feels templated because your code is too good. 🏛️

Ask any AI agent for a page full of scroll animation and it will factor out one `revealSection()` and call it six times. That is genuinely better engineering. It's also exactly what makes a site feel like a template — because what makes this kind of page feel *authored* is that you can't predict what the next section will do.

So the prompt refuses to generalise. Six sections, six separate specs, six sets of numbers: 340vh for the hero dive, 285vh for the zoom-through, 190vh for the clip-path curtains. A table of "section → behaviour" doesn't survive — the agent reads it as a summary of something reusable. Six standalone specs can't be collapsed.

Same reason the timing language is defined once at the top: three durations, six named eases, and every tween on the site has to use one of each. Variety in behaviour, discipline in timing. That combination is the whole trick.

Full brief on my site, copy button included.

💬 Comment "scroll" and I'll send it over

.
.
.
#webdesign #gsap #scrolltrigger #frontend #creativecoding #javascript #animation #uidesign #promptengineering #replit #aitools #webdevelopment #buildinpublic #devlife #designsystems

---

## FIRST-LINE VARIANTS

Only ~125 characters show before "... more", so the first line carries the whole post. Swap in whichever fits the thumbnail:

- Six sections. Six completely different scroll behaviours.
- The line that fixed my scroll animations was a ban, not a technique.
- Your scroll site feels templated because your code is too good.
- No WebGL. No canvas. No framework. Just masks and transforms.
- Every entrance on this page has a matching exit. Almost nobody builds that.
- Scroll down and it plays. Scroll up and it rewinds.

---

## PINNED FIRST COMMENT

Post this yourself immediately after publishing — keeps the link out of the caption and gives the "scroll" replies something to sit under.

Full prompt: avivashishta.com/blog/prompt-premium-property-site-scroll-choreography-replit

Stack: GSAP (ScrollTrigger + SplitText + CustomEase) + Lenis, vanilla JS on Vite. No framework, no WebGL. The teardown of the reference site it came from is on there too. Comment "scroll" if you want it in your DMs 👇

---

## STORY / REEL TEXT OVERLAYS

Short enough to read while the clip plays:

1. six sections, six scroll behaviours
2. no WebGL. no canvas. no framework.
3. never use pin: true
4. every entrance has a matching exit
5. scrub geometry. fire type.
6. comment "scroll" for the prompt

---

## NOTES

- **Lead with the arch preloader in the edit.** It is the only three seconds of the reel that nobody scrolling past has seen before — the dive, the parallax and the horizontal section all read as familiar for the first beat.
- **Show the scroll-up.** The mirrored exits are the most distinctive thing about the build and they are invisible unless the clip scrolls backwards for a second or two. Put that at the midpoint, not the end.
- **Automate the DM.** A "comment X for Y" CTA only works if the reply is instant. ManyChat's free tier handles one keyword trigger, which is all this needs.
- **"scroll" is the right keyword** — one word, on-topic, and impossible to misspell. "choreography" would lose a third of the comments to autocorrect.
- **Pair it with the teardown post.** Anyone who wants the prompt also wants the breakdown of the reference site; linking both in the DM roughly doubles time-on-site per comment.
