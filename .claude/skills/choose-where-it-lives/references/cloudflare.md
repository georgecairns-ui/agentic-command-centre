# Route: Cloudflare

## What it means, in plain words

The app keeps running on this computer, exactly as it is, with all their data still here. Cloudflare gives it a private web address and puts a sign-in in front of it, so they (and anyone they name) can open it from their phone or anywhere else. This is the only route where everything works, Claude jobs included, because nothing moves.

## What they need, and what it costs

- A Cloudflare account (free).
- A web address (domain) they own, added to Cloudflare. If they don't have one, buying one is theirs to do and costs a few pounds a year.
- Cloudflare Zero Trust for the sign-in: free for up to 50 people, then $7 per person a month. Tell them to check Cloudflare's own pricing page.
- This computer has to stay on and awake whenever they want to reach it.

## Private?

Yes. Cloudflare Access sits in front: it turns everyone away unless they match a rule they set (their email addresses), and each visitor signs in with a code sent to their email. Never publish the address without Access in front.

**Never use a quick tunnel** (a `trycloudflare.com` address): it's for testing, the address is public and changes every time.

## What it can and can't do

- **Can:** everything the app does today, from anywhere, for the people they name.
- **Can't:** work when this computer is off or asleep.

## How you build it

1. They create the Cloudflare account and add their domain, on Cloudflare's own pages. Wait for them.
2. Install Cloudflare's connector (`cloudflared`) on this computer, with their permission.
3. In the Cloudflare dashboard (Networking, then Tunnels, then Create a tunnel), create a tunnel, install it as a service on this computer, and add a public hostname (for example `toolkit.theirdomain.com`) pointing at `http://localhost:4747`. Guide them through the dashboard clicks; the token it shows goes only into the install command on this computer, never into a file here.
4. **Before anyone opens the address,** add an Access application for that hostname (Zero Trust, then Access, then Applications, then Add an application, Self-hosted), with an Allow rule listing only the email addresses they name.
5. Open the address from their phone, on mobile data: it should ask for an email sign-in first, then show the app. Try it from an address that isn't on the list: it must be refused. Then record it (rule 6).
6. Set the app to start with the computer if it doesn't already (`.claude/skills/open-my-toolkit`).

## Switching it off

Delete the Access application and the tunnel in the Cloudflare dashboard, and stop the `cloudflared` service on this computer. The app on this computer keeps working.

## Sources

Checked on 2026-11-26. Not yet built end to end on a real account. The exact service commands for Mac and Windows are on Cloudflare's "run as a service" page; follow it on the day.
- https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/create-remote-tunnel/
- https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/do-more-with-tunnels/local-management/as-a-service/
- https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/do-more-with-tunnels/trycloudflare/
- https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/
- https://www.cloudflare.com/plans/sase-zero-trust/
