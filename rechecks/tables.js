// Shared by the measurement papers. Adds, without changing the stamped page bytes:
//  - a "Download CSV" link under each data table, built from the table exactly as shown on the page
//  - a "Show your work" link near the top that jumps to the page's "Run it yourself" section
(function () {
  var page = (location.pathname.split("/").pop() || "table").replace(/\.html$/, "");
  function cellText(c) {   // footnote markers (<sup>) are dropped so "2020.18" doesn't land in the data
    var x = c.cloneNode(true); Array.prototype.forEach.call(x.querySelectorAll("sup"), function (s) { s.remove(); });
    return (x.textContent || "").replace(/\s+/g, " ").trim();
  }
  function csv(table) {
    return Array.prototype.map.call(table.rows, function (r) {
      return Array.prototype.map.call(r.cells, function (c) {
        var t = cellText(c); return /[",\n]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t;
      }).join(",");
    }).join("\r\n") + "\r\n";
  }
  var n = 0;
  Array.prototype.forEach.call(document.querySelectorAll("table"), function (table) {
    if (table.classList.contains("tl") || table.rows.length < 3) return;   // skip timelines and tiny tables
    n += 1;
    var k = n, h = table.closest("div.tw") || table;
    var a = document.createElement("a");
    a.href = "#"; a.textContent = "Download CSV"; a.className = "csv-link";
    a.style.cssText = "display:inline-block;font-size:13px;margin:4px 0 0;color:var(--link,#0066cc);text-decoration:none";
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var blob = new Blob(["﻿" + csv(table)], { type: "text/csv;charset=utf-8" });
      var u = URL.createObjectURL(blob), d = document.createElement("a");
      d.href = u; d.download = page + "-table-" + k + ".csv"; document.body.appendChild(d); d.click();
      setTimeout(function () { URL.revokeObjectURL(u); d.remove(); }, 0);
    });
    h.insertAdjacentElement("afterend", a);
  });
  var run = Array.prototype.find.call(document.querySelectorAll("h2"), function (x) { return /run it yourself/i.test(x.textContent); });
  var anchor = document.querySelector(".glance") || document.querySelector("p.meta");
  if (run && anchor) {
    if (!run.id) run.id = "run";
    var p = document.createElement("p");
    p.style.cssText = "font-size:14px;margin:6px 0 0";
    p.innerHTML = '<a href="#' + run.id + '">Show your work &darr;</a> &middot; the scripts, the raw data and the commands to get our numbers yourself';
    anchor.insertAdjacentElement("afterend", p);
  }
})();
