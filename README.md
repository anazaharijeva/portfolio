# Ana Zaharijeva — Portfolio

Vue 2 portfolio site. Live demo can be hosted on [Vercel](https://vercel.com).

## Local development

```bash
npm install
npm run serve
```

## Production build

```bash
npm run build
```

Output folder: `dist/`

## Deploy to Vercel

1. Push this project to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project** and import your repository.
4. Vercel should detect **Vue.js** automatically. If not, use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your site will get a URL like `https://your-project.vercel.app`.

The included `vercel.json` configures SPA routing for Vue Router (history mode).

## Push to GitHub

Run these commands in **this folder** (`portfolio-master` where `package.json` is):

```bash
git init
git add .
git commit -m "Update portfolio: professional layout, themes, GitHub projects carousel"
git branch -M main
git remote add origin https://github.com/anazaharijeva/portfolio.git
git push -u origin main
```

If the repository already exists and has older commits:

```bash
git pull origin main --rebase
git push origin main
```

To use a **new** repository, create one on GitHub first, then replace the `origin` URL.

> **Note:** Install [Git](https://git-scm.com/download/win) if `git` is not recognized in the terminal.
