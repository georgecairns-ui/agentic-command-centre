---
name: choose-where-it-lives
description: Helps the person choose where their Agentic Command Centre lives beyond this computer (a page inside Claude, GitHub, Cloudflare, Supabase or somewhere else), then builds it there in their own accounts, privately. Use at hand-over, from the "Choose where my toolkit lives" button, or when they ask "can I use this on my phone?", "can my team see it?", "can we put this online?" or "where should this live?".
---

# Choose where it lives

Today the Agentic Command Centre runs only on this computer, at http://localhost:4747. When the computer is off or asleep, nobody can reach it, and it isn't on their phone. This skill helps them choose somewhere else for it, and then you build it there, in their own accounts.

Get AI Powers doesn't host anything for them. Everything you build here is theirs, in accounts they own and pay for.

## The rules, for every route

These don't bend, whatever is asked.

1. **Private by default.** Never a public link. It sits behind a sign-in that only they and the people they name can pass. If a route can't do that, say so plainly and don't use it.
2. **Nothing private in public.** Nothing from their email, clients, deals or money ever goes anywhere public: not a public page, not a public repository, not a public storage bucket.
3. **Copy first.** Build the new place from a copy. Keep the version on this computer working, unchanged, until the new one is proven with their real data and they say they're happy. Never delete or move anything in this folder.
4. **Their accounts, their clicks.** Account sign-ups, logins, payment details and two-step codes are theirs to do, on each service's own page. Never ask for a password, key or card number in chat or write one in this folder. If a service gives them a key or token, it goes into that service's own settings or their password manager, never into a file here.
5. **Say what will happen, and what it costs, before doing anything.** In one short message: what you'll build, where, what they'll sign up for, the monthly cost (from the route page, and tell them to check it on the service's own pricing page, because prices change), and what changes for them. Then wait for a clear yes.
6. **Prove it, then record it.** Open it from where they'll use it (their phone, a team member's account) and show it works. Then write what you built in `builds` in `apps/toolkit/data/toolkit.json` and in "Notes for next time" in `setup/progress.md`: where it is, which accounts it uses, how to switch it off.

## 1. Tell them where it is today

In one or two lines: "Right now your toolkit runs only on this computer. When it's off, nobody can reach it, including you from your phone. We can put it somewhere else as well, in your own accounts, and keep this one working."

## 2. Ask the open questions

One message, numbered, short answers fine:

> 1. Who needs to reach it? Just you, your team (who?), and from where: your phone, another computer?
> 2. Which of these do you already have an account with: Claude on a Team or Enterprise plan, GitHub, Cloudflare (and a web address you own), Supabase?
> 3. What are you comfortable paying each month for it? Nothing, up to £10, up to £30, or more?
> 4. Does this computer stay on during the day?

## 3. Offer the routes

Using their answers, recommend 1 or 2 routes with a reason each, and show the rest as choices. Keep this order:

| Route | In one line | Reference page |
|---|---|---|
| **A page inside Claude** | A version of your toolkit as a page on claude.ai, private to you (or your team on Team and Enterprise). Lightest to run, but it's a smaller version of the app | `references/claude-page.md` |
| **GitHub** | A private copy of the toolkit's files, and (with Codespaces) a private computer online that runs it when you start it | `references/github.md` |
| **Cloudflare** | The app keeps running on this computer, and Cloudflare puts a private sign-in in front so you can reach it from anywhere | `references/cloudflare.md` |
| **Supabase** | Your toolkit's data in a private online database with its own sign-in, with the pages hosted somewhere private | `references/supabase.md` |
| **Other** | Somewhere else they already use | `references/other.md` |

Many people will want it to live in Claude, which is why that route comes first. Say plainly what each route can't do: on every route except Cloudflare, the "Claude jobs" the app starts by itself (Find ideas, sorting a brain dump) need Claude Code on a computer, so they don't run from the online copy.

## 4. Build it

Read the chosen route's page in full and follow it. Work in their guide mode (`setup/progress.md`): in beginner mode, one step per message, and say where every button is. When a step needs them (a sign-up, a login, a payment, a code), stop and tell them exactly what to do on that service's own page, then carry on when they say it's done.

## 5. Hand it over

Tell them, in a few lines: where it is, who can reach it and how they sign in, what it costs each month, what still works only on this computer, and how to switch it off (from the route page). Offer once to show them on their phone.
