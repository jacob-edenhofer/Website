# Social preview image

The website uses `public/og.png` for its Open Graph and X cards. The image was generated with the built-in image generation tool on 13 September 2026. The exact prompt is in `social-preview-prompt.txt`. The PNG is 1731 × 909 pixels and is used without cropping or retouching.

The artwork illustrates a conditional argument from the DPhil manuscript, *Uncertain Mandates, Durable Stringency*. Temporary electoral pressure can induce lasting climate policy when credible adoption encourages sufficiently rapid adjustment by producers. The upper curve represents an electoral impulse that subsides. The lower curve represents policy stringency that retains part of its initial increase.

The curves are conceptual illustrations, with separate vertical scales. They do not represent estimated effects or establish an unconditional result. The current précis is in `app/data/research.ts`.

`app/layout.tsx` supplies the image URL, actual dimensions, and alternative text. A version parameter distinguishes this image from the earlier design. When replacing the image, update that parameter, the dimensions, and the alternative text. The exported HTML checks verify both card formats, the image file, and its dimensions.
