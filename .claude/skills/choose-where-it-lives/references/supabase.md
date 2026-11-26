# Route: Supabase

## What it means, in plain words

Supabase is a private online database with its own sign-in. Their toolkit's data moves into it, so the pages can read and save it from anywhere. Supabase doesn't host the pages themselves, so this route always pairs with somewhere private for the pages (Cloudflare Pages behind Cloudflare Access is the usual one: see `cloudflare.md` for Access).

This is the biggest build of the 5: the app's pages are changed to read and save from Supabase instead of the helper on this computer. Say so before they choose it.

## What they need, and what it costs

- A Supabase account. The free plan gives 2 projects, a 500 MB database and 1 GB of file storage, but a free project is **paused after a week without use** and has to be woken up. Pro starts at $25 a month and doesn't pause. Tell them to check Supabase's own pricing page.
- Somewhere private for the pages (see above), with its own cost.

## Private?

Only if you make it so, on every table:
- Switch on **Row Level Security** for every table you create, with rules that let only their signed-in users read or change rows. It isn't something to assume is on.
- Sign-in by an email link only, for the email addresses they name, with new sign-ups switched off (`shouldCreateUser: false`).
- The pages use only Supabase's publishable key. The secret (service role) key never goes in a page, a file in this folder or a repository.
- Never a public storage bucket for their files.

## What it can and can't do

- **Can:** keep their data online and private, for them and the people they name, from any device.
- **Can't:** run the helper or Claude jobs. Host the pages by itself.

## How you build it

1. They create the Supabase account and a project on Supabase's own pages, and choose the plan. Wait for them.
2. Agree which tools' data goes online. Leave out anything they don't want there.
3. Create one table per data file you're moving, with Row Level Security switched on and a rule per table, before any data goes in.
4. Copy the data in from `apps/*/data/` (a copy: the files here stay as they are).
5. In a copy of the app (not this folder), change each page's reads and saves to Supabase, add the email-link sign-in, and host the pages privately (see above).
6. Sign in from their phone and check each page reads and saves. Sign in with an address that isn't allowed: it must be refused, and a signed-out request for a table must return nothing. Then record it (rule 6).

## Switching it off

Pause or delete the project from Supabase's dashboard, and take the pages down from wherever they're hosted. Nothing on this computer changes.

## Sources

Checked on 2026-11-26. Not yet built end to end on a real account.
- https://supabase.com/pricing
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/guides/auth/auth-email-passwordless
- https://supabase.com/docs/guides/platform/custom-domains
