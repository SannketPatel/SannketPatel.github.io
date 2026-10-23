# Sanket Patel portfolio

A static, single-page portfolio for `sannket.com`, hosted from this repository with GitHub Pages.

## Structure

- `index.html` contains all visible page content and metadata.
- `css/style.css` contains the complete design system and responsive layout.
- `assets/js/site.js` handles only the mobile navigation and order-flow reveal.
- `assets/img/sanket-portrait.webp` is a compressed version of the existing portrait.
- `assets/img/monogram.svg` is the lightweight favicon.

No install or build step is required. Open `index.html` in a browser, or run `python -m http.server 8000` and visit `http://localhost:8000` for local testing. Deploy by pushing the files to the GitHub Pages branch already configured for this repository.

## Content and design notes

The page uses the owner's updated 14+ years experience statement, the supplied career brief, and information from the previous site. The original resume link has been restored, although Google Drive currently redirects unauthenticated visitors to sign-in. The linked work section includes the Shopify listings for AltifyAI_App, Repixo, and Rule Ship. The two supplied Last Purchase Reminder URLs were identical, so that listing appears once. A verified Upwork profile URL was not available, so the Top Rated claim is held back for now. No client, employer, or store names appear in the page or metadata.

The site uses no framework, icon library, remote font, analytics, or embedded video. Its CSS uses local system fonts and the JavaScript is optional for the main content.
