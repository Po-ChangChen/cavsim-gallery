# Resonators at Work

Short videos of THz split-ring (SRR) and complementary split-ring (CSRR) resonators, computed
with **cavsim**, a finite-element solver for periodic THz metamaterials.

**Watch:** https://po-changchen.github.io/cavsim-gallery/

The geometries come from published work, cited on the page. The fields and spectra are our own
calculations, not the authors' data. Each clip's provenance (source data, code commit, mesh) is
recorded in the cavsim project.

Contents: `index.html` (the page) and `videos/` (H.264 MP4, 1080p, no audio).

## Updating the summary

`index.html` is a one-page summary (printed as `summary.pdf`); `details.html` has the animations. Writing rules and the update procedure are in the main project repository at `docs/PRESENTATION_GUIDE.md`. Rebuild the PDF with `node tools/build_pdf.js` (requires Playwright) and check it stays one page.
