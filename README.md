# Personal Portfolio — React + Vite

A responsive, interactive portfolio starter designed for an aspiring data analyst / data scientist.

## Included
- Responsive desktop and mobile navigation
- Dark/light theme toggle
- Scroll progress indicator and back-to-top control
- Animated section entrances
- Skills cards and filterable project gallery
- GitHub, LinkedIn, email and résumé links
- Contact form that opens the visitor's email app with a pre-filled message
- SEO description, accessible labels, and reduced-motion support

## Run locally
1. Install Node.js (current LTS).
2. Extract this folder.
3. In the project folder run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.
5. To create a production build run `npm run build`. The output is in `dist/`.

## Personalise before publishing
Open `src/main.jsx` and edit the `PROFILE`, `skills`, and `projects` data:
- Replace `Your Name`, email, GitHub, LinkedIn, location, and profile copy.
- Replace all sample projects with real work, repository URLs, outcomes, and accurate technology lists.
- Add your résumé as `public/resume.pdf` (or change `PROFILE.resume`).
- Remove skills you have not learned yet. Keep skill descriptions honest.
- Update the page title and meta description in `index.html`.

## Contact form note
The form uses a `mailto:` action. It does not store messages or send them through a server. For a production contact form that submits without opening an email app, connect a backend or a form service and add spam protection.

## Deployment
This is a static Vite app and can be deployed to Vercel, Netlify, or GitHub Pages. Build command: `npm run build`; output directory: `dist`.
