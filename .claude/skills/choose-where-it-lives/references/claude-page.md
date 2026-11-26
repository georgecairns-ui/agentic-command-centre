# Route: a page inside Claude

## What it means, in plain words

A version of their toolkit as one page on claude.ai, published from this folder. They open it in Claude on the web or on their phone. It keeps its own data inside Claude, and it can read their connected apps with their own Claude sign-in.

It is a smaller version of the app, not a copy of it: one page that you build for the parts they use most (for example Today, the Inbox and the pipeline board). The full app stays on this computer.

## What they need, and what it costs

- A paid Claude plan: Pro, Max, Team or Enterprise. They already have one. Nothing else to sign up for, and no extra cost beyond their plan. A page that calls Claude uses their plan's usage when they use it.
- To read a page they publish, they're signed in to Claude.

## Private?

- It is private to them when published: only they can see it.
- **Team and Enterprise:** they can share it with named people in their organisation, who sign in as members. Good for a team.
- **Pro and Max:** the only way to share it with anyone else is a public link. Never use one (rule 1). On these plans this route is "just you", for example on your phone.

## What it can and can't do

- **Can:** one page of HTML and JavaScript, up to 16 MB; keep data inside Claude (up to 100 MB and 25,000 records, either each person's own or shared by everyone who can open it); read the person's Claude connectors (Gmail, Calendar, their CRM) with each viewer's own sign-in; ask Claude a question.
- **Can't:** run the helper (`apps/server/`), read files in this folder, or start Claude jobs. It can only fetch from claude.ai itself, Google Fonts and a few code libraries.

## How you build it

1. Agree with them which 2 or 3 parts they want on the page, and who will open it.
2. Copy what those parts need (their own pages' HTML, CSS and JavaScript, and the shared theme) into one self-contained page, in your scratch folder, not in this folder's `apps/`.
3. Swap the helper's file reads and saves for the page's own storage. Take a copy of the data it needs from `apps/*/data/` as the starting point, and leave out anything they don't want online.
4. Publish it with your artifact tool (search your tools for "Artifact" if it isn't in your list). If you can't publish from here, say so plainly and stop: this route needs Claude Code signed in to their Claude account.
5. On Team or Enterprise, share it with the people they named, never with a public link.
6. Open it on their phone with them and check each part works. Then record it (rule 6).

The online page and this folder don't stay in step by themselves. Say so, and offer to refresh the page's data when they ask ("update my Claude page").

## Switching it off

Delete or unshare the page from claude.ai. Nothing on this computer changes.

## Sources

Checked on 2026-11-26. Not yet built end to end on a real account.
- https://code.claude.com/docs/en/artifacts
- https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
