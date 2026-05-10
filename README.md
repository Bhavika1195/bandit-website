# Bandit Tasks Website

A static website for tracking OverTheWire Bandit wargame tasks.

## Repository layout

- `docs/` - website content served by GitHub Pages
- `docs/bandit13.md` - Bandit 13 task page
- `docs/assets/bandit13/` - assets for Bandit 13
- `.github/workflows/pages.yml` - GitHub Actions workflow to deploy the `docs/` site to GitHub Pages on push

## How it works

1. Push changes to the `main` branch.
2. GitHub Actions builds the site and deploys it to GitHub Pages.
3. The website is served from the `docs/` folder.

## Adding new bandit tasks

- Create a new markdown file in `docs/`, e.g. `docs/bandit14.md`
- Add a link to the task in `docs/index.html`
- Place images or assets in `docs/assets/bandit14/`
