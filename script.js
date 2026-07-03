(function () {
  "use strict";

  const listEl = document.getElementById("bulletin-list");
  const contentEl = document.getElementById("content");
  const searchEl = document.getElementById("search");
  const searchCountEl = document.getElementById("search-count");
  const emptyStateEl = document.getElementById("empty-state");
  const sidebarTotalEl = document.getElementById("sidebar-total");

  // Sort newest first
  const bulletins = [...BULLETINS].sort((a, b) => (a.date < b.date ? 1 : -1));

  let activeId = null;

  function formatDate(isoDate) {
    // "2026-07-03" -> "07/03/26"
    const [y, m, d] = isoDate.split("-");
    return `${m}/${d}/${y.slice(2)}`;
  }

  function formatDateLong(isoDate) {
    const [y, m, d] = isoDate.split("-");
    const dt = new Date(Number(y), Number(m) - 1, Number(d));
    return dt.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function highlight(text, term) {
    if (!term) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const safeTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(${safeTerm})`, "gi");
    return escaped.replace(re, "<mark>$1</mark>");
  }

  // ---- Light markdown support for bulletin bodies ----
  // Supports: ## headings, - bullet lists, > callout boxes,
  // **bold**, [link text](url), ![alt](image path), blank-line paragraphs.

  function inline(text) {
    let t = escapeHtml(text);
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, label, url) =>
      `<a href="${url}" target="_blank" rel="noopener">${label}</a>`);
    t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return t;
  }

  function bodyToHtml(raw) {
    const lines = raw.replace(/\r\n/g, "\n").split("\n");
    let html = "";
    let paraBuffer = [];
    let listBuffer = [];
    let calloutBuffer = [];

    function flushPara() {
      if (paraBuffer.length) {
        const text = paraBuffer.join(" ").trim();
        if (text) html += `<p>${inline(text)}</p>`;
        paraBuffer = [];
      }
    }
    function flushList() {
      if (listBuffer.length) {
        html += "<ul>" + listBuffer.map((li) => `<li>${inline(li)}</li>`).join("") + "</ul>";
        listBuffer = [];
      }
    }
    function flushCallout() {
      if (calloutBuffer.length) {
        html += `<div class="callout">${calloutBuffer.map((l) => `<p>${inline(l)}</p>`).join("")}</div>`;
        calloutBuffer = [];
      }
    }

    for (const rawLine of lines) {
      const line = rawLine.trim();

      if (line === "") {
        flushPara(); flushList(); flushCallout();
        continue;
      }

      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);

      if (line.startsWith("## ")) {
        flushPara(); flushList(); flushCallout();
        html += `<h3>${inline(line.slice(3).trim())}</h3>`;
      } else if (imgMatch) {
        flushPara(); flushList(); flushCallout();
        const alt = escapeHtml(imgMatch[1]);
        const src = escapeHtml(imgMatch[2]);
        html += `<figure class="bulletin-figure"><img src="${src}" alt="${alt}" loading="lazy">${
          alt ? `<figcaption>${alt}</figcaption>` : ""
        }</figure>`;
      } else if (line.startsWith("- ")) {
        flushPara(); flushCallout();
        listBuffer.push(line.slice(2).trim());
      } else if (line.startsWith("> ")) {
        flushPara(); flushList();
        calloutBuffer.push(line.slice(2).trim());
      } else {
        flushList(); flushCallout();
        paraBuffer.push(line);
      }
    }
    flushPara(); flushList(); flushCallout();
    return html;
  }

  function highlightHtml(html, term) {
    if (!term) return html;
    const safeTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(${safeTerm})`, "gi");
    return html
      .split(/(<[^>]+>)/g)
      .map((seg) => (seg.startsWith("<") ? seg : seg.replace(re, "<mark>$1</mark>")))
      .join("");
  }

  function matches(bulletin, term) {
    if (!term) return true;
    const haystack = (bulletin.title + " " + bulletin.body).toLowerCase();
    return haystack.includes(term.toLowerCase());
  }

  function renderList(term) {
    const filtered = bulletins.filter((b) => matches(b, term));

    listEl.innerHTML = "";

    filtered.forEach((b) => {
      const li = document.createElement("li");
      li.className = "bulletin-item" + (b.id === activeId ? " active" : "");
      li.dataset.id = b.id;
      li.setAttribute("role", "button");
      li.setAttribute("tabindex", "0");

      const dateLine = document.createElement("span");
      dateLine.className = "bulletin-date";
      dateLine.innerHTML = "Update Bulletin — " + highlight(formatDate(b.date), "");

      const titleLine = document.createElement("span");
      titleLine.className = "bulletin-title";
      titleLine.innerHTML = highlight(b.title, term);

      li.appendChild(dateLine);
      li.appendChild(titleLine);

      li.addEventListener("click", () => selectBulletin(b.id, term));
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectBulletin(b.id, term);
        }
      });

      listEl.appendChild(li);
    });

    emptyStateEl.hidden = filtered.length !== 0;
    sidebarTotalEl.textContent = bulletins.length;

    if (term) {
      searchCountEl.textContent = `${filtered.length} match${filtered.length === 1 ? "" : "es"}`;
    } else {
      searchCountEl.textContent = "";
    }

    return filtered;
  }

  function renderContent(bulletin, term) {
    if (!bulletin) {
      contentEl.innerHTML = `
        <div class="placeholder">
          <p class="placeholder-eyebrow">Welcome</p>
          <h2>Select a bulletin to read the full update</h2>
          <p>Choose an entry from the list on the left, or search for a keyword above.</p>

          <h3 class="placeholder-subhead">How to read a bulletin</h3>
          <ol class="placeholder-steps">
            <li>Find a bulletin in the list on the left.</li>
            <li>Click it to read the full update here.</li>
            <li>Want to find something specific? Type a word into the search bar at the top.</li>
          </ol>

          <div class="callout placeholder-contact">
            <p>Questions? Contact Angel:</p>
            <p>Email: <a href="mailto:hello@thewhiteninglab.co">hello@thewhiteninglab.co</a></p>
            <p>iMessage: <a href="sms:+639177236062">+63 917 723 6062</a></p>
          </div>
        </div>`;
      return;
    }

    const bodyHtml = highlightHtml(bodyToHtml(bulletin.body), term);

    contentEl.innerHTML = `
      <article class="bulletin-full">
        <p class="bulletin-full-date">${formatDateLong(bulletin.date)}</p>
        <h2>${highlight(bulletin.title, term)}</h2>
        <div class="bulletin-body">${bodyHtml}</div>
      </article>`;
  }

  function selectBulletin(id, term) {
    activeId = id;
    const bulletin = bulletins.find((b) => b.id === id);
    renderContent(bulletin, term);
    renderList(term || searchEl.value.trim());
    contentEl.scrollTop = 0;
    history.replaceState(null, "", "#" + id);
  }

  function handleSearchInput() {
    const term = searchEl.value.trim();
    const filtered = renderList(term);

    // If the currently open bulletin no longer matches, but there are
    // results, keep the panel as-is (don't yank content away while typing).
    if (term && filtered.length && !filtered.some((b) => b.id === activeId)) {
      // leave current content visible; user can click a result
    }
  }

  searchEl.addEventListener("input", handleSearchInput);

  // Deep-link support: #bulletin-id in the URL opens that bulletin directly.
  // Otherwise, show the welcome page by default.
  function init() {
    renderList("");
    const hashId = decodeURIComponent(location.hash.replace("#", ""));
    const hashMatch = bulletins.find((b) => b.id === hashId);

    if (hashMatch) {
      selectBulletin(hashMatch.id, "");
    } else {
      renderContent(null, "");
    }
  }

  init();
})();
