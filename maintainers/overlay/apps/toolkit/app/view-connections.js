/*
  CONNECTIONS: every app the toolkit can connect to
  -------------------------------------------------
  Grouped (Email and calendar, Calls, and so on). Each card: the name, one line on what connecting it does,
  which tools use it, its status and one button: Connect, Check it, Fix it, Finish connecting or Look again. Not supported
  yet and export-only apps also get Book a call (shared version 14). Rows in connections.json
  for apps with no card here (LinkedIn, an iCloud email row, anything added through Connect something else) show
  last, under Other connections, with Fix it, Look again or Check it. Not-used rows are left out. Every button opens Claude
  with the job typed in, because signing in to an app happens on that app's own screen, inside Claude.
  The filter (All, Connected, Not connected) is kept until the page is closed.
*/
(function () {
  "use strict";

  const ui = window.TaskListOS.ui, esc = ui.esc;
  const L = window.TK.list, M = window.TK.model, C = window.TK.components;
  const FILTERS = [{ id: "all", label: "All" }, { id: "connected", label: "Connected" }, { id: "not-connected", label: "Not connected" }];
  let filter = "all";

  function shows(status) {
    if (filter === "connected") return status === "connected";
    if (filter === "not-connected") return status !== "connected";
    return true;
  }

  // "Waiting on IT", or the status's own label, in the status's chip colour
  function chip(c) { return '<span class="chip ' + esc(M.CONN[c.status].chip) + '">' + esc(M.connLabel(c)) + "</span>"; }
  function canBook(status) { return status === "no-connector" || status === "export-only"; }

  function card(d, app) {
    const c = M.conn(d, app.id), btn = M.connButton(d, app);
    const used = M.toolNames(app.usedBy).map(function (n) { return '<span class="chip">' + esc(n) + "</span>"; }).join("");
    const how = [c.how, c.checked ? "checked " + C.shortDate(c.checked) : ""].filter(Boolean).join(", ");
    return '<article class="card tk-card tk-card--' + esc(c.status) + '">' +
      '<div class="tk-card__top"><h4 class="tk-card__name">' + esc(app.name) + "</h4>" + chip(c) + "</div>" +
      '<p class="tk-card__what">' + esc(app.what) + "</p>" +
      '<div class="tk-card__used"><span class="tk-card__label">Used by</span>' + used + "</div>" +
      (c.note ? note(c.status, c.note) : "") +
      (how ? '<p class="tk-card__meta">' + esc(how.charAt(0).toUpperCase() + how.slice(1)) + "</p>" : "") +
      '<div class="tk-card__actions">' + C.claudeActions(btn.prompt, { label: btn.label, small: true, primary: c.status === "not-connected" || c.status === "needs-attention" || c.status === "waiting" }) +
      (canBook(c.status) ? C.bookCall({ small: true }) : "") + "</div></article>";
  }

  // A note is a warning only when something needs fixing; otherwise it reads like the meta line
  function note(status, text) { return '<p class="' + (status === "needs-attention" ? "tk-card__note" : "tk-card__meta") + '">' + esc(text) + "</p>"; }

  // A row with no card of its own: its name, status, note and Fix it, Finish connecting, Look again or Check it
  function otherCard(x) {
    const fix = x.status === "needs-attention", wait = x.status === "waiting", again = x.status === "export-only" || x.status === "no-connector";
    const btn = fix ? { label: "Fix it", prompt: M.prompt.fixOther(x.name) } : wait ? { label: "Finish connecting", prompt: M.prompt.finishOther(x.name) } : again ? { label: "Look again", prompt: M.prompt.lookAgainOther(x.name) } : { label: "Check it", prompt: M.prompt.checkOther(x.name) };
    const how = [x.how, x.checked ? "checked " + C.shortDate(x.checked) : ""].filter(Boolean).join(", ");
    return '<article class="card tk-card tk-card--' + esc(x.status) + '">' +
      '<div class="tk-card__top"><h4 class="tk-card__name">' + esc(x.name) + "</h4>" + chip(x) + "</div>" +
      (x.note ? note(x.status, x.note) : "") +
      (how ? '<p class="tk-card__meta">' + esc(how.charAt(0).toUpperCase() + how.slice(1)) + "</p>" : "") +
      '<div class="tk-card__actions">' + C.claudeActions(btn.prompt, { label: btn.label, small: true, primary: fix || wait }) +
      (again ? C.bookCall({ small: true }) : "") + "</div></article>";
  }
  function group(title, cards) {
    return cards.length ? '<section class="tk-group" aria-label="' + esc(title) + '"><h3 class="tk-group__title">' + esc(title) + '</h3><div class="tk-grid">' + cards.join("") + "</div></section>" : "";
  }

  function render(root, ctx) {
    const d = ctx.data;
    const groups = L.GROUPS.map(function (g) {
      return group(g, L.APPS.filter(function (a) { return a.group === g && shows(M.connStatus(d, a.id)); }).map(function (a) { return card(d, a); }));
    }).join("") + group("Other connections", M.extras(d).filter(function (x) { return shows(x.status); }).map(otherCard));
    const n = M.counts(d);
    const problem = M.connectionsProblem();
    root.innerHTML = '<div class="page">' +
      C.pageHead(M.connectedLine(d), problem ? problem : n.attention ? (n.attention === 1 ? "1 needs attention. " : n.attention + " need attention. ") + "Each button opens Claude, and you sign in on the app's own screen." : "Each button opens Claude, and you sign in on the app's own screen.",
        C.claudeActions(M.prompt.connectElse(), { label: "Connect something else" })) +
      C.claudeNote() +
      (C.bookCall() ? '<p class="tk-note">' + ui.icon("calendar") + "<span>Want this joined up with something you already use? Book a call with Joey or George.</span>" + C.bookCall({ small: true }) + "</p>" : "") +
      '<div class="filters" role="group" aria-label="Show">' + FILTERS.map(function (f) {
        return '<button type="button" class="filter' + (filter === f.id ? " is-active" : "") + '" data-filter="' + f.id + '" aria-pressed="' + (filter === f.id) + '">' + esc(f.label) + "</button>";
      }).join("") + "</div>" +
      (groups || C.emptyState(filter === "connected" ? "Nothing connected yet" : "Everything is connected", filter === "connected" ? "Press Connect on any app and Claude walks you through it." : "")) +
      "</div>";
    root.onclick = function (e) {
      const f = e.target.closest("[data-filter]");
      if (!f) return;
      filter = f.getAttribute("data-filter");
      ctx.redraw();
    };
  }

  window.TK.views.connections = { render: render };
})();
