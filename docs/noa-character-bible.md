# Noa — Character Bible v1

_Updated 2026-10-04_

## Brand hierarchy (decided 2026-10-04)

- **Brand / logo:** "נועה" — Noa's handwritten Hebrew signature.
- **Tagline:** "AI ביטוח לאומי" — small, clean sans-serif under the signature.
- Plus a separate **disclaimer** where relevant: private service, not on behalf of המוסד לביטוח לאומי (wording to be approved by Irit/PNI).

## Logo concept (proposed 2026-10-04, pending handwriting samples)

- Real handwritten "נועה" in flowing Hebrew cursive (no AI image generation — it mangles Hebrew letters), navy.
- The tail of the final ה continues into a thin blue-and-white striped ribbon = Noa's scarf.
- **Dynamic:** write-on animation right-to-left in correct stroke order נ→ו→ע→ה (~1.5s), scarf ribbon flies out and flutters once; idle = gentle ribbon wave; short mark = cursive נ + scarf tip (favicon/app icon).
- **Production:** write "נועה" 20–30× on iPad/pen → pick best → vectorize as single centerline strokes (required for write-on) → animate → export SVG/Lottie (web), MOV with alpha (CapCut end cards), PNG (static).
- Test legibility at profile-picture size.

## Identity block (paste verbatim into every prompt, never reword)

```
A professional Israeli woman in her early-to-mid thirties, warm light-olive skin, oval face with high defined cheekbones and a gently tapered jaw, straight slim nose with a softly rounded tip, full lips with a natural rosy-nude tint, almond-shaped warm brown eyes, thick well-groomed dark brown softly arched eyebrows, sleek straight dark espresso-brown hair falling just past the shoulders with a slight side part and softly turned-under ends, tiny gold stud earrings, slim build, calm confident presence, natural skin texture with visible pores, no beauty filter.
```

- **Default look (home base):** fitted navy blazer over a navy V-neck top.
- **Signature item:** blue & white patterned silk scarf (every episode, also on the website and in the logo).

## Scene template

```
[Identity block or Element "Noa"] + wearing [outfit for this country] + blue and white patterned silk scarf + in [specific location] + [sequence of expression beats, not a single state] + direct cinematic vertical 9:16 shot, 35mm lens (no phone framing).
```

## Golden set (reference images)

Frames extracted from the Midjourney/HeyGen clips (2026-09-29):

| # | Frame | Higgsfield media_id |
|---|---|---|
| — | Noa 1.png | `d0322f1f-c3a5-46d5-92f3-76235ebbf271` |
| 01 | front HQ (The Cube, HeyGen 1080p) | `91231790-b1fb-4e58-9f45-eb05e9a8eb68` |
| 02 | front HQ soft smile | `d7456c3b-b187-4194-bc3b-6eec82156b5b` |
| 03 | front neutral | `8b2c6f94-d784-4a43-a5fd-2e9e5cf4372b` |
| 04 | 3/4 smile | `ce62b345-6f54-4b50-a281-8c298a875117` |
| 05 | 3/4 left | `2b1c34f1-aaf0-4231-bb8f-572bde2932b4` |
| 06 | 3/4 right laugh | `43c92b3b-6579-4449-89b5-4895c22b4b2f` |
| 07 | profile left smile | `6e3ec67c-06f7-4e8d-993f-bb7dd9499e62` |
| 08 | 3/4 look-down | `9b150c8b-542f-4095-8219-7a56eaf3a0c3` |

**Source clips:** "The Cube _1080p.mp4" (HeyGen, 1080x1920, front only) and three Midjourney clips (544x720; best motion: "...speaking_calmly_and_co_6ed4479f..._1 1.mp4", 12.9s, turns head both ways).

## Higgsfield

- **Project:** "Noa – Character Bible" (`0bc511e6-0e8b-4dbe-9665-b67382361c50`), workspace `91b2e9c8-6b38-471c-83b2-2bae4320dd43`.
- **First reference pack** (Seedream 4.5, ref = Noa 1.png): character sheet `cff91b0f…`, turnaround `b9282678…`, expression sheet `db7ac527…`, wardrobe sheet `72586216…`
- **Element "Noa":** `f30ca365-a0ff-4bd1-85cf-a782fc4e4df2` (character, 9 images, created 2026-09-29). Works with Seedream 4.5 / 5 lite, Seedance 2.0, Nano Banana, Kling 3.0 (needs start frame), Cinema Studio.
  - Note: generation log showed only the first image (Noa 1) injected. If a shot drifts, add 2–3 golden-set media_ids directly as `image_references`.
- **Element test** (Seedream 4.5, 9:16): London `d2f9f537…`, Greece `23b26630…`, Tokyo `669b7608…`

## Rules

- Only approved images go into references (drift compounds).
- Seedance: max ~2 video references; use for silent motion only; Hebrew speech via ElevenLabs → HeyGen.
- Write motion prompts as a sequence of acting beats (frown → look → nod → eyebrow), never a single emotion — otherwise the face freezes.
- Upload path: sandbox can't reach Higgsfield upload host → use Higgsfield upload widget.
