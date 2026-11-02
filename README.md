# Luis Santiago — Portfolio Website (updated November 2026)

Static, responsive HTML/CSS/JavaScript portfolio. No packages, build tools, or backend required.

## What changed
- Added **Claude Academy badge images rendered from your original PDFs**, stored locally in `assets/` (not hotlinked).
- Correctly labeled **AI Fluency: Framework and Foundations** (Claude Academy, issued Oct 31, 2026) and **Claude 101** (issued Oct 30, 2026).
- Both badge images link to their official Claude Academy badge pages, with downloadable PDF certificates also included.
- Kept the MathWorks MATLAB Onramp certificate and existing portfolio content.

The PDF certificates display the recipient name **Luis Á. Santiago**. Badges represent **course completion**, not cloud-provider professional certifications.

## Preview
Open `index.html` in a browser. Or run `python -m http.server 8000` from this directory and open `http://localhost:8000`. Check that the two orange badges load.

## Publish using GitHub Pages — personal site
1. Sign in to https://github.com.
2. Create a **Public** repository named exactly `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with your real GitHub username (not display name). Initialize it or upload files directly.
3. **Extract the ZIP first.** Inside `portfolio-site`, select `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README.md` and the **assets** folder, and upload these contents to the repository root. `index.html` must NOT be nested in another `portfolio-site` directory. GitHub's web uploader may omit empty files like `.nojekyll` — that's fine for this site.
4. Commit changes on `main`.
5. In the repository select **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**; press **Save**.
6. Once deployment completes, visit `https://YOUR-USERNAME.github.io/`. You can check the deployment under the repository's Actions tab or Pages settings.

## Existing repository / alternative
For an existing personal-site repository, commit the extracted files to its root, replacing the earlier website files. If you prefer a project repository such as `portfolio`, the address is `https://YOUR-USERNAME.github.io/portfolio/` using the same Pages branch settings. All CSS/JS/image paths are relative to `index.html`.

## Updates and checks
- Keep file names and paths intact: `assets/claude-ai-fluency.png` and `assets/claude-101.png`.
- If images are broken, check filenames, capitalization and that `assets/` was uploaded.
- Recheck GPA, timelines, Honors Program membership, and outside contributors' media rights before publishing.
- Add approved project screenshots / event photos when available.
- No site is live until you publish it to GitHub.


## Claude Academy certificates

This version uses images rendered from the original PDF certificates for on-page display.
The original PDF files are also included in `assets/`:

- `assets/claude-ai-fluency.pdf`
- `assets/claude-101.pdf`

These can be opened directly from the published site or linked in the credentials section.

## Added personal project: Color-Based PDF Content Extraction

Project source supplied separately as `colortextExtraction-main.zip`. The portfolio describes its actual script implementation (PyMuPDF 300-DPI rendering, HSV color masking, Canny edges, morphology, and mask/opaque/transparent PNG outputs). No sample signatures or source PDFs are published in the portfolio. The visual is an illustrative CSS graphic, not a real output sample.
