# Route: GitHub

## What it means, in plain words

GitHub keeps a private copy of the toolkit's files online. On its own that's a backup, not a place to use it. With **Codespaces**, GitHub also gives them a private computer online that runs the toolkit when they start it, which they can open from a browser.

## What they need, and what it costs

- A GitHub account. Private repositories are free.
- Codespaces: free accounts get 120 core-hours and 15 GB of storage a month (Pro accounts get more). After that, about $0.18 an hour for the smallest computer and $0.07 per GB a month. Tell them to check GitHub's own pricing page.

## Private?

- A private repository is visible only to them and people they invite.
- A codespace's forwarded port (the app's link) is private by default: only they can open it, after signing in to GitHub. Never change it to public. Sharing it with an organisation needs a GitHub organisation.
- **Never use GitHub Pages for this.** Pages sites are public on the internet even when the repository is private (only GitHub Enterprise Cloud can restrict them), and Pages can't run the helper anyway.

## What it can and can't do

- **Can:** keep a private copy; run the full app, helper included, in a codespace while it's switched on.
- **Can't:** stay on. A codespace stops after 30 minutes without use (they can change this, up to 4 hours), so it isn't always there when they reach for their phone. Claude jobs in a codespace need Claude Code signed in there too.
- **Their data:** the files in `apps/*/data/`, `context/` and `files/` hold their email summaries, clients and money. Put them in the repository only if it is private and they agree, knowing it's online. Otherwise the repository holds the app without their data.

## How you build it

1. Check `gh` is installed and signed in to their account (`gh auth status`). If it isn't, they sign in themselves (`gh auth login`, in a browser, on GitHub's own page).
2. Agree with them whether their data goes in (see above). If not, add `apps/*/data/`, `apps/home/data/`, `context/`, `files/` and `setup/progress.md` to `.gitignore` before anything is added.
3. In a copy of this folder (not this folder), create a private repository: `gh repo create <name> --private --source . --push`. Check it says private: `gh repo view <name> --json visibility`.
4. For Codespaces: `gh codespace create` for that repository, start the app in it, and forward port 4747. Check the port's visibility is private.
5. Open it with them from their phone or another computer and check it works. Then record it (rule 6).

## Switching it off

Stop or delete the codespace (`gh codespace delete`). Delete the repository from its settings page if they no longer want it. Nothing on this computer changes.

## Sources

Checked on 2026-11-26. Not yet built end to end on a real account.
- https://docs.github.com/en/get-started/learning-about-github/githubs-plans
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site
- https://docs.github.com/en/billing/concepts/product-billing/github-codespaces
- https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace
- https://docs.github.com/en/codespaces/setting-your-user-preferences/setting-your-timeout-period-for-github-codespaces
