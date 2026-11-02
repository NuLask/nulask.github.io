# Luis Santiago Portfolio

Personal portfolio website showcasing projects, technical skills, certifications, academic achievements, and professional experience.

Built as a lightweight static website using HTML, CSS, and JavaScript, making it easy to maintain, deploy, and customize without additional frameworks or build tools.

## Features

- Responsive design for desktop, tablet, and mobile devices
- Project showcase with descriptions and technologies used
- Certifications and professional development credentials
- Academic highlights and engineering experience
- Lightweight static architecture with no backend dependencies
- GitHub Pages compatible deployment

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub Pages

## Local Development

No installation or build process is required.

### Option 1: Open Directly

Open `index.html` in your browser.

### Option 2: Run a Local Server

```bash
python -m http.server 8000
```

Then visit:

http://localhost:8000

## Project Structure

```text
/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── images
│   ├── certificates
│   └── badges
├── README.md
└── .nojekyll
```

## Deployment

This site is designed for deployment through GitHub Pages.

### Personal Site

1. Create a public repository named:

   ```
   username.github.io
   ```

2. Upload all project files to the repository root.

3. Navigate to:

   ```
   Settings → Pages
   ```

4. Configure:

   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`

5. Save the configuration and wait for deployment.

Your site will be available at:

```
https://username.github.io
```

### Project Repository

If deploying from a repository such as:

```
portfolio
```

your site will be available at:

```
https://username.github.io/portfolio/
```

## Certifications

The portfolio includes professional development and training credentials, including:

- Claude 101
- AI Fluency: Framework and Foundations
- MathWorks MATLAB Onramp

Certificate assets are stored locally within the repository to ensure reliability and avoid external dependencies.

## Maintenance Notes

Before publishing updates:

- Verify project information remains current.
- Review GPA, dates, certifications, and achievements.
- Confirm permission for any third-party images or media.
- Test responsiveness across multiple screen sizes.
- Ensure all assets load correctly after deployment.

## License

This project is intended as a personal portfolio website. Content, certificates, and project materials remain the property of their respective owners where applicable.
