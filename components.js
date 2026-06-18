/* components.js — Shared layout components for GameCycle
 *
 * Injects a consistent site header and footer on every page so the
 * markup only needs to be maintained in one place.
 */

(function () {
    var NAV_LINKS = [
        { href: "Producten.html", label: "Games" },
        { href: "OverOns.html", label: "Over ons" },
        { href: "Service.html", label: "Service" },
        { href: "Contact.html", label: "Contact" }
    ];

    function currentPage() {
        var path = location.pathname.split("/").pop() || "index.html";
        return path;
    }

    function renderSiteHeader() {
        var header = document.querySelector(".site-header");
        if (!header) return;

        var page = currentPage();
        var linksHTML = NAV_LINKS.map(function (n) {
            var attr = n.href === page ? ' aria-current="page"' : "";
            return '<a href="' + n.href + '"' + attr + ">" + n.label + "</a>";
        }).join("\n                ");

        header.innerHTML =
            '<nav class="nav" aria-label="Hoofdnavigatie">' +
            '    <a class="brand" href="index.html" aria-label="GameCycle homepage">' +
            '        <span class="brand-mark">GC</span>' +
            "        <span>GameCycle</span>" +
            "    </a>" +
            '    <div class="nav-links">' +
                     linksHTML +
            "    </div>" +
            '    <button class="cart-button" type="button" data-cart-open aria-label="Winkelwagen openen">' +
            '        Winkelwagen <span data-cart-count>0</span>' +
            "    </button>" +
            "</nav>";
    }

    function renderSiteFooter() {
        if (document.querySelector(".footer")) return;
        var main = document.querySelector("main");
        if (!main) return;
        var footer = document.createElement("footer");
        footer.className = "footer";
        footer.innerHTML =
            "<p>&copy; 2026 GameCycle B.V. | Tweedehands videogames voor gamers in Nederland.</p>";
        main.insertAdjacentElement("afterend", footer);
    }

    renderSiteHeader();
    renderSiteFooter();
})();
