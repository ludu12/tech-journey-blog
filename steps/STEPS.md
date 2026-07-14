# Setup Guide: GitHub Codespaces + Vercel

This is the workflow for the class: fork this repo, edit it in a GitHub Codespace,
then deploy it live with Vercel.

## 1. Prerequisites

- A GitHub account (must be 13+ to create one — this is a GitHub account rule, not
  a school rule, so flag it if any student is younger).
- No credit card required. GitHub gives every free personal account 120 core-hours
  of Codespaces usage per month with no payment method on file. A card is only
  needed if a student blows past that quota (unlikely in a single session).

## 2. Fork the repo

1. Go to `https://github.com/ludu12/tech-journey-blog`
2. Click **Fork** (top right)
3. This creates `https://github.com/{their-username}/tech-journey-blog` under
   their own account

## 3. Open it in a Codespace

1. On their forked repo, click the green **Code** button
2. Select the **Codespaces** tab
3. Click **Create codespace on main**
4. Wait for the container to build (first boot installs dependencies automatically
   — see `.devcontainer/devcontainer.json`, added specifically so students don't
   have to run `npm install` by hand)

Once it's open, run in the terminal:

```bash
npm run dev
```

Codespaces will detect port 3000 and pop up a preview — click **Open in Browser**
to see the site.

## 4. Make changes

The `present/things-to-change/` folder has a numbered set of exercises
(metadata, images, blog posts, fonts, themes) — good order to work through them in.

## 5. Commit and push from the Codespace

```bash
git add -A
git commit -m "make it mine"
git push
```

This pushes to their fork on GitHub — normal git, nothing Codespaces-specific.

## 6. Deploy on Vercel

1. Go to `https://vercel.com/` and **Sign Up** → **Continue with GitHub**
2. Authorize the OAuth prompt (grant access to their forked repo, or all repos)
3. Click **Add New Project**, import their forked `tech-journey-blog`
4. Leave defaults (Vercel auto-detects Next.js) and click **Deploy**
5. Every future `git push` to `main` auto-redeploys — no extra steps needed

## Gotchas to know about ahead of time

- **Node version**: Next.js 16 requires Node ≥ 20.9. Without a devcontainer
  config this repo would fall back to Codespaces' default image, which isn't
  guaranteed to have a new-enough Node active, and students would hit an
  `EBADENGINE` warning/error on `npm install`. Fixed by pinning Node 24 in
  `.devcontainer/devcontainer.json`, `package.json` (`engines.node`), and
  `.nvmrc` — 24 is also Vercel's current default Node runtime for new
  projects, so Codespaces and the Vercel build both use the same version.
- **Codespaces quota**: 120 free core-hours/month per personal account
  (~60 hours on a 2-core machine, the default size). Fine for a single session
  or even a few weeks of tinkering, but remind students to **stop** (not just
  close the tab) their codespace when done — an idle codespace still burns
  hours until it auto-suspends (default 30 min timeout) or is manually stopped.
- **Codespaces on forks**: usage is billed to whoever owns the fork (the
  student's personal account), not to `ludu12/tech-journey-blog` — so there's
  no shared quota to worry about across the whole class.
- **Vercel Hobby plan**: still free, still generous (100GB bandwidth,
  100 build minutes, 1M function invocations per month) — plenty for a class
  blog. It's licensed for personal/non-commercial use only, which this
  qualifies as. Each student's own free account gets its own limits.
- **Vercel account age**: signing in via GitHub OAuth means Vercel inherits
  GitHub's 13+ minimum.
- **Port visibility**: Codespaces forwards port 3000 as **Private** by default,
  visible only to the signed-in student. That's fine here since the thing
  they actually share is the Vercel deployment URL, not the codespace preview.
- **First build time**: first `npm install` in a fresh codespace can take a
  minute or two (postCreateCommand runs it automatically on container
  creation) — good moment for a bio break during the workshop.
