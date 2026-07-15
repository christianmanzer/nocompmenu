# No Competition Menu Site — Setup

## What's in this folder
- index.html — page structure, do not need to edit for menu changes
- style.css — visual design, do not need to edit for menu changes
- script.js — renders the menu automatically, do not need to edit
- menu-data.js — THE ONLY FILE YOU EDIT to change items or prices

## One-time setup

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (e.g. "no-competition-menu"), set it to Public.
3. Upload all files in this folder to that repository (drag and drop works
   on the GitHub website, under "Add file > Upload files").
4. Go to Cloudflare dashboard > Workers & Pages > Create > Pages >
   Connect to Git.
5. Select the repository you just created.
6. Build settings: leave everything blank/default. This is a static site,
   no build command needed. Framework preset: None.
7. Click Save and Deploy. Cloudflare gives you a live URL immediately.
8. To attach your own domain: in that Pages project, go to
   Custom Domains > Add a domain, and pick from the domains already in
   your Cloudflare account.

## Updating the menu going forward

1. Go to your repository on github.com.
2. Click on menu-data.js.
3. Click the pencil (edit) icon.
4. Change the price or text inside the quotes.
5. Scroll down, click "Commit changes."
6. Cloudflare Pages redeploys automatically within about a minute.

That's it. No other files need to be touched for menu updates.
