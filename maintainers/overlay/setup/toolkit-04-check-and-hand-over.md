# Step 9: check and hand over

Goal: prove every tool you set up works, both ways, then leave them with one clear picture of what they've got and what's waiting for later.

## 9.1 Check each tool you set up

`setup/09-check-and-hand-over.md` is Agentic Task List's checklist: run its section 9.1 for the task list. For every other tool with status `set-up` in `apps/toolkit/data/toolkit.json`, check its data file reads back cleanly and has their real information in it, and that its settings have their name and business:

| Tool | Data file | Good looks like |
|---|---|---|
| Agentic Pipeline | `apps/pipeline/data/pipeline.json` | Real deals, each with a stage, a value where known and a next step |
| Agentic Proposals | `apps/proposals/data/proposals.json` | Their packages and prices, brand set up, at least one proposal |
| Agentic Content Machine | `apps/content/data/content.json` | Themes, platforms, research filled in, a plan for the next weeks |
| Agentic Money View | `apps/money/data/money.json` | Accounts connected, the bank in, invoices and regular bills, the tax pot set |
| Agentic Ads | `apps/ads/data/ads.json` | Budget and limits, what a result is worth, figures for each campaign |
| Agentic Skill and Folder Map | `apps/skill-map/data/skillmap.json`, `filemap.json` | Skills scanned and grouped, the folders they chose mapped |

Fix anything that fails, then check again.

**Connections** (`apps/home/data/connections.json`, checked for real, not from memory)
- [ ] Every inbox is `connected` with a checked date from this setup, `no-connector` (said plainly), or `waiting` with `waitingOn` and the one thing still to do in `note`.
- [ ] Calendar is checked the same way, separately: `connected` with a checked date from this setup, `no-connector` (said plainly) or `waiting`. (When they come from different providers, each has its own row.)
- [ ] Their call recorder, every app on the step 4 list and every platform from Agentic Content Machine's platforms step is `connected`, `export-only`, `no-connector`, `waiting`, `needs-attention` or `not-used`. Other apps they named may stay `not-connected` with the note "Chose not to connect yet".
- [ ] Every connected app is in `context/tools.md` with what you may and may not do.
- [ ] `context/goal.md` has their goal, in their words, with the numbers.
- [ ] The one check-in task exists (`list_scheduled_tasks` shows exactly one for this folder) and its first run finished without stopping, or they said no to it. `.claude/settings.local.json`, if it's there, holds only the read tools step 8 added with their yes, and no Meta Ads or Google Ads tool.

**The Toolkit page** (`apps/toolkit/data/toolkit.json`)
- [ ] Every tool has a status. Anything they chose to leave for later says `not-yet`.
- [ ] Up to 3 ideas, from `.claude/skills/whats-next`, each with a ready prompt.
- [ ] `builds` lists the skills you built in step 7 and anything else you made for them.

**With them** (ask them to do these 4 things)
- [ ] They open **http://localhost:4747** (or their bookmark). Home greets them by name with boxes from their tools.
- [ ] On the task list's **Review**, they approve one suggestion. Read the task file again and check it changed. Tell them: "That's working both ways. I can see you approved [task]."
- [ ] They open **Toolkit**, then **Connections**, and see their apps marked Connected (and anything parked as Waiting, with Finish connecting).
- [ ] They open **Toolkit**, then **Build and customise**, and press **Not now** on an idea they don't want. Read the file again and check it changed.

## 9.2 Note what's missing, gently

`setup/09-check-and-hand-over.md` section 9.2 says how. Mention it once, for the whole toolkit, never once per tool.

## 9.3 Hand over

1. In `setup/progress.md`, change "Setup status" to `complete on <date>` and tick step 9. In `CLAUDE.md`, change `Setup: not done yet` to `Setup: complete on <date>`.
2. Start with their goal, in one line: what they want to achieve (from `context/goal.md`) and that the whole toolkit is set up to help with it. Then tell them what you did, as one short list with real numbers across every tool. For example: "Connected Gmail, Google Calendar, Fathom, Pipedrive and Xero. Sorted 143 emails and drafted 9 replies. Wrote up 4 calls. Put 23 deals on your pipeline. Wrote a proposal for Greenway. Your money view shows £8,400 owed to you. Built you 4 skills." Add, in one line each: how many emails from the last 30 days you read, how many need a reply, which apps are connected, and which are export-only.
3. **Anything still waiting.** List every `waiting` connection with the one thing to do next: "Microsoft 365 is waiting on your IT team to approve it. When they have, press Finish connecting on the Connections page, or tell me, and I'll read its last 30 days then."
4. **Files you said you'd share.** List any still `to find` in `setup/progress.md`, by name.
5. **Joining up the rest.** If anything is `no-connector` or `export-only`, say once: "Want these joined up with something you already use? Book a call with Joey or George," with the booking link from `apps/shared/catalogue.json`. The Connections page has the same button.
6. Their skills, in one line: they're in the **skills-to-upload** folder, and adding them to Claude (Customize, then Skills) means they work in every conversation, including on their phone.
7. Then, briefly:
   - Their link, **http://localhost:4747**, and whether it starts with their computer.
   - What's connected, and that you read and draft; each tool's exceptions (sending an approved email, a draft invoice, a paused campaign) only ever happen when they press the button and say yes.
   - Whether you're checking in automatically, and at what times. If Agentic Ads is set up: their ad figures come in when they say "update my ads" or press **Refresh figures**, never on a schedule.
   - **The Toolkit section** in the sidebar: Connections shows every app and connects new ones with one button; Set up has a **Set up now** button for each tool they left for later; Build and customise is where they ask for a new page, a new skill or a change, and where your ideas for what to do next appear. Every button opens Claude with the job already typed in.
   - **Where it lives.** Say plainly: "Right now your toolkit runs only on this computer, at localhost:4747. When it's off, nobody can reach it, including you from your phone." Then offer once: "Would you like it somewhere you can reach from your phone, or share with your team? I can build it in your own accounts, privately." With a yes, follow `.claude/skills/choose-where-it-lives`. With a no, tell them it's the **Choose where my toolkit lives** button on Build and customise, whenever they're ready.
   - The phrases that do most of the work: "sort my day", "check everything", "what's my pipeline?", "write a proposal for...", "how's cash looking?", "plan my content", "how did the ads do?". In Claude Code each skill also works as a command, for example `/sort-my-day`.
8. Offer the 10-minute "how to use Claude day to day" lesson from `setup/learn-as-you-go.md`, in every guide mode. If they say no, tell them it's the **Show me how to use Claude** button on Build and customise, or they can say "show me how to use Claude" any time.
