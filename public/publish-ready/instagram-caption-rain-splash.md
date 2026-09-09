# INSTAGRAM CAPTION — Rain splash / MediaPipe body segmentation
# Copy, paste, publish as-is. Pick ONE caption. All are under IG's 2,200-char limit.
# CTA: comment "rain" to receive the tutorial link via DM.
# Post: https://www.avivashishta.com/blog/rain-splashing-off-your-body-mediapipe-python

---

## PRIMARY CAPTION (use this one)

Rain that knows where your body is 🌧️

Drops fall past the background untouched — then burst the instant they touch my shoulder. Spray flies off, arcs back down under gravity, and leaves a wet mark that runs down me afterward.

No depth camera. No physics engine. No GPU.

It's one boolean array per frame.

MediaPipe's segmentation model turns each frame into a grid of "is this a person, yes or no." Then every raindrop just asks that grid a question. Collision detection against a human body becomes an array lookup.

The one detail that makes it work: you don't test whether a drop IS on your body — you test the moment it STARTS being on your body. Rising edge, not state. Test the state instead and every drop splashes on every frame it's inside you, which reads as fog, not impact. One operator's difference.

Best bug: turning the rain UP made the effect look WORSE. The splash particle pool was a fixed size, so at high density it sat permanently empty — extra rain competing for slots that were already gone. No crash, no slowdown. It just quietly got less impressive as I turned it up. Those are the worst kind.

Full write-up is on my site — the rising-edge trick, the wetness buffer, all three bugs, and the benchmarks.

💬 Comment "rain" and I'll DM you the tutorial

.
.
.
#python #computervision #mediapipe #opencv #numpy #creativecoding #generativeart #codingtutorial #pythonprogramming #buildinpublic #softwareengineer #100daysofcode #devlife #programming #webcam #particlesystem #techtok #learntocode #codenewbie #machinelearning

---

## ALT 1 — shorter, hook-forward

I made rain splash off my body in real time 🌧️

No depth sensor. No physics engine. No GPU. Just Python and one boolean array per frame.

MediaPipe segmentation turns every frame into a grid of "person / not person." Each raindrop asks that grid one question. That's the entire collision system.

The trick nobody mentions: test the *transition* onto the body, not whether the drop is on it. Rising edge, one operator — otherwise every drop splashes every frame it's inside you and you get fog instead of impact.

Wrote up all of it, including the bug where heavier rain produced FEWER splashes.

💬 Comment "rain" for the tutorial

.
.
.
#python #computervision #mediapipe #opencv #creativecoding #codingtutorial #pythonprogramming #buildinpublic #100daysofcode #programming #numpy #learntocode #codenewbie #devlife #softwareengineer

---

## ALT 2 — bug-first angle

Turning the rain UP made my effect look worse. 🌧️

Not slower. Not broken. Just... less impressive. No error anywhere.

The splash particles came from a fixed pool of 1500. Every raindrop hitting my body wanted 7 of them. Crank the density and demand runs past several thousand — so the pool sat permanently empty, and every extra drop competed for slots that were already gone.

More rain in. Fewer splashes out. Silently.

That's the failure mode I've learned to actually fear. A crash tells you where to look. Quality degrading with no signal just makes you doubt your own taste.

The fix was one line: size the pool relative to what feeds it, not to a constant.

Rest of the build — MediaPipe body segmentation as a collision surface, the rising-edge test that makes drops burst on contact, and the wetness buffer that drips — is written up on my site.

💬 Comment "rain" and I'll send it over

.
.
.
#python #computervision #mediapipe #opencv #debugging #creativecoding #codingtutorial #pythonprogramming #buildinpublic #100daysofcode #programming #softwareengineer #devlife #learntocode #numpy

---

## FIRST-LINE VARIANTS

Only ~125 characters show before "... more", so the first line carries the whole post. Swap in whichever fits the thumbnail:

- Rain that knows where your body is 🌧️
- I made rain splash off my body in real time 🌧️
- Turning the rain UP made my effect look worse.
- This took no depth camera, no physics engine, and no GPU.
- Your body, to this program, is a grid of true and false.
- Collision detection against a human body is one array lookup.

---

## PINNED FIRST COMMENT

Post this yourself immediately after publishing — keeps the link out of the caption and gives the "rain" replies something to sit under.

Full write-up: avivashishta.com/blog/rain-splashing-off-your-body-mediapipe-python

Stack: Python + NumPy + OpenCV + MediaPipe Image Segmenter. ~400 lines, runs on CPU. Comment "rain" if you want it in your DMs 👇

---

## STORY / REEL TEXT OVERLAYS

Short enough to read while the clip plays:

1. rain that knows where your body is
2. no depth camera. no physics engine.
3. your body = a grid of true/false
4. every drop asks that grid one question
5. comment "rain" for the tutorial

---

## NOTES

- **Automate the DM.** A "comment X for Y" CTA only works if the reply is instant. ManyChat's free tier handles one keyword trigger, which is all this needs.
- **Reply to every "rain" comment publicly too**, not just via DM — comment volume is what the keyword CTA is actually buying you.
- **Hashtags are in the caption** here, after the `.` spacer lines. Moving them to the first comment works equally well; pick one and stay consistent.
- **The word must be easy to spell.** "rain" survives autocorrect and typos in a way "MediaPipe" or "segmentation" would not — that's the only reason to prefer it.
