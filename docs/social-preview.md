# Social preview image

The website uses the original `public/og.png` for its Open Graph and X cards. This 1200 × 630 image was restored on 13 September 2026 after the user rejected a replacement. It presents Jacob’s name and affiliation with fine geometric curves. A possible quotation remains under consideration; no quotation has been selected.

An earlier replacement illustrated a conditional argument from the DPhil manuscript, *Uncertain Mandates, Durable Stringency*. Its prompt is retained in `social-preview-prompt.txt` for provenance. That replacement is no longer displayed.

The restored image’s curves are decorative. They do not represent estimated effects or a specified mathematical result.

`app/layout.tsx` supplies the image URL, actual dimensions, and alternative text. A version parameter distinguishes this image from the earlier design. When replacing the image, update that parameter, the dimensions, and the alternative text. The exported HTML checks verify both card formats, the image file, and its dimensions.
