/* shop.js — GameCycle shared product, cart and UI utilities
 *
 * Single source of truth for:
 *   - product catalogue (with language, condition and featured flag)
 *   - currency formatting
 *   - cart persistence (localStorage)
 *   - product-card rendering (supports featured-only grids)
 *   - cart rendering with quantity controls, discount codes and shipping
 *   - checkout form handling
 *   - micro-interactions (toast, reveal animations, tilt, sparks)
 */

// ── Product catalogue ─────────────────────────────────────────────

var gameProducts = [
    {
        id: 1,
        title: "God of War",
        platform: "PlayStation",
        price: 19.99,
        oldPrice: 39.99,
        pegi: "18",
        condition: "Zeer goed",
        language: "Engels met Nederlandse ondertiteling",
        featured: true,
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
        fallback: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
        description: "Een episch actie-avontuur met een meeslepende verhaallijn. Volg Kratos en zijn zoon door Noorsche mythologie vol spectaculaire gevechten, puzzels en versterkingen. Adembenemende graphics en cinematic gameplay."
    },
    {
        id: 2,
        title: "Skyrim",
        platform: "Xbox",
        price: 14.99,
        oldPrice: 29.99,
        pegi: "18",
        condition: "Goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
        fallback: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
        description: "Verken een uitgebreide open-world vol geschiedenis, magie en monsters. Honderden quests, dynamische kampagne tegen draken, en eindeloze mogelijkheden voor character customization. Cre\u00eber je eigen avontuur!"
    },
    {
        id: 3,
        title: "Mario Kart 8 Deluxe",
        platform: "Nintendo",
        price: 34.99,
        oldPrice: 54.99,
        pegi: "3",
        condition: "Zeer goed",
        language: "Nederlands beschikbaar",
        featured: true,
        image: "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg",
        fallback: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
        description: "Het populairste racespel op Nintendo Switch. Race met vrienden en familie over kleurrijke banen, gebruik power-ups strategisch en beheerst de shortcuts. Multiplayer fun voor alle leeftijden!"
    },
    {
        id: 4,
        title: "Fallout 4",
        platform: "PC",
        price: 9.99,
        oldPrice: 24.99,
        pegi: "18",
        condition: "Goed",
        language: "Engels",
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg",
        fallback: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        description: "Overleven in een post-apocalyptische wereld vol mutanten en falen morele keuzes. Bouw je basis uit, recruit companions, en ontdek wat er van Amerika over is. Immersieve RPG met oneindig veel playstyles."
    },
    {
        id: 5,
        title: "FIFA 23",
        platform: "PlayStation",
        price: 12.99,
        oldPrice: 34.99,
        pegi: "3",
        condition: "Licht gebruikt",
        language: "Nederlands beschikbaar",
        image: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/common/f23-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
        fallback: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80",
        description: "De ultieme voetbalsimulator met eredivisie clubs en sterren. Speel carri\u00e8remode, bouw je favoriete team op in Ultimate Team, en neem het op tegen spelers online. Realistische voetbalacties en tactische diepgang."
    },
    {
        id: 6,
        title: "Halo Infinite",
        platform: "Xbox",
        price: 17.99,
        oldPrice: 49.99,
        pegi: "16",
        condition: "Zeer goed",
        language: "Engels",
        featured: true,
        image: "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png",
        fallback: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=800&q=80",
        description: "Klassieke sci-fi shooter met futuristische wapens en high-octane multipayer combat. Verken de Halo ring in de campagne, gebruik jetpack en grappling hooks tactisch, en domineer online in intense 12vs12 gevechten."
    },
    {
        id: 7,
        title: "Zelda: Breath of the Wild",
        platform: "Nintendo",
        price: 39.99,
        oldPrice: 59.99,
        pegi: "12",
        condition: "Zeer goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        fallback: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
        description: "Een revolutionair open-world avontuur waar je Hyrule in willekeurige volgorde kunt verkennen. Klim overal, experimenteer met Physics puzzels, en geniet van totale vrijheid. Een meesterwerk van game design."
    },
    {
        id: 8,
        title: "The Witcher 3",
        platform: "PC",
        price: 11.99,
        oldPrice: 29.99,
        pegi: "18",
        condition: "Goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        fallback: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
        description: "Speelt als de beruchte Witcher Geralt van Rivia in een dark fantasy wereld. Accepteer contracts tegen monsters, maak gevolgen-volle keuzes met permanente effecten, en geniet van een Prijs-winnaar verhaal. Expansies gratis inbegrepen!"
    },
    {
        id: 9,
        title: "Red Dead Redemption 2",
        platform: "PlayStation",
        price: 22.99,
        oldPrice: 49.99,
        pegi: "18",
        condition: "Zeer goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
        fallback: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
        description: "Leef als outlaw Arthur Morgan in de Wilde Westen. Epic verhaal over verraad en lojaliteit, realistische details overal, en enorme open wereld vol activiteiten. Meesterwerk van immersieve storytelling."
    },
    {
        id: 10,
        title: "Cyberpunk 2077",
        platform: "PC",
        price: 18.99,
        oldPrice: 44.99,
        pegi: "18",
        condition: "Goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
        fallback: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
        description: "Ontsnap aan de neon-verlichte stad Night City als gecyborg ingestelde commando. Epic main questline met branching storylines, bodyware upgrades, en baanbrekende AI. Actie-RPG van volgende generatie."
    },
    {
        id: 11,
        title: "Minecraft",
        platform: "Nintendo",
        price: 21.99,
        oldPrice: 34.99,
        pegi: "7",
        condition: "Zeer goed",
        language: "Nederlands beschikbaar",
        image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Vanilla_Block-Render_Creeper.jpg",
        fallback: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=800&q=80",
        description: "Bouw, verken en overlev in oneindige werelden van blokken. Creatieve survival modus met monsters, of freebuild in creative mode. Multiplayer co-op voor eindeloos plezier met vrienden. Alle leeftijden genieten!"
    },
    {
        id: 12,
        title: "Grand Theft Auto V",
        platform: "Xbox",
        price: 16.99,
        oldPrice: 39.99,
        pegi: "18",
        condition: "Goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        fallback: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        description: "Criminaliteit, actie en chaos in Los Santos. Drie speelbare karakters met hun eigen verhalen, diefstalles plannen met medespelers, en eindeloze activiteiten. Legendaire open-world gameplay die nog steeds overweldigend is."
    },
    {
        id: 13,
        title: "Elden Ring",
        platform: "PlayStation",
        price: 34.99,
        oldPrice: 59.99,
        pegi: "16",
        condition: "Zeer goed",
        language: "Engels",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
        fallback: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
        description: "Legendaire fantasy RPG met verschrikkelijke bosses en gotische setting. Cre\u00eber je character, pas spells aan, en verken een enorme open wereld vol mysteries. Samen ontworpen door FromSoftware en George R.R. Martin. GeWaarschuwing: Erg moeilijk!"
    },
    {
        id: 14,
        title: "Spider-Man: Miles Morales",
        platform: "PlayStation",
        price: 24.99,
        oldPrice: 49.99,
        pegi: "16",
        condition: "Zeer goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://upload.wikimedia.org/wikipedia/en/5/5e/Spider-Man_Miles_Morales_cover.jpg",
        fallback: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=800&q=80",
        description: "Swing door New York als Miles Morales in dit spannende superheld-avontuur. Dynamische strijd met bioelektrische krachten, hartscheurende verhaal, en stunning graphics. Verfrolling en actie gecombineerd perfectie."
    },
    {
        id: 15,
        title: "Assassin's Creed Valhalla",
        platform: "Xbox",
        price: 19.99,
        oldPrice: 49.99,
        pegi: "18",
        condition: "Goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg",
        fallback: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
        description: "Verken Engeland als Noors raider Eivor in dit Viking-epos. Bouw je nederzetting uit, sluit allianties en voer veldslagen. Schitterende wereld, aangrijpende verhalen, en pure middeleeuwse chaos. 60+ uren gameplay!"
    },
    {
        id: 16,
        title: "Hogwarts Legacy",
        platform: "PlayStation",
        price: 29.99,
        oldPrice: 59.99,
        pegi: "12",
        condition: "Zeer goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
        fallback: "https://images.unsplash.com/photo-1520975922284-9a1b7c8b0f9c?auto=format&fit=crop&w=800&q=80",
        description: "Leef je droom uit als toevenaar op Hogwarts School. Leer toverspeuken, maak vrienden, en ontdek geheimen. Veel keuzes be\u00efnvloeden het verhaal, prachtige hogwarts setting, en pure magic. Harry Potter fans worden vertoverd!"
    },
    {
        id: 17,
        title: "Call of Duty MWII",
        platform: "Xbox",
        price: 39.99,
        oldPrice: 69.99,
        pegi: "18",
        condition: "Goed",
        language: "Engels",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-REVEAL-TOUT.jpg",
        fallback: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        description: "Intense multiplayer-ervaring met nauwkeurige wapenopmaken en snelle gevechten. Campaign volgt een professioneel team in geopolitieke chaos. Waarom wacht je? Moderne oorlogsvoering op z'n best!"
    },
    {
        id: 18,
        title: "Animal Crossing: New Horizons",
        platform: "Nintendo",
        price: 34.99,
        oldPrice: 54.99,
        pegi: "3",
        condition: "Zeer goed",
        language: "Nederlands beschikbaar",
        image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons.jpg",
        fallback: "https://images.unsplash.com/photo-1608889175679-7a3c2b3a3c7d?auto=format&fit=crop&w=800&q=80",
        description: "Rust uit op je eigen eiland vol schattige dieren. Decoreer naar wens, vang vis, verzamel meubilair en voel je zen-achtig. Geen druk, geen deadlines - pure relaxatie. Perfecte escape-game voor iedereen."
    },
    {
        id: 19,
        title: "Gran Turismo 7",
        platform: "PlayStation",
        price: 29.99,
        oldPrice: 59.99,
        pegi: "3",
        condition: "Zeer goed",
        language: "Engels met Nederlandse ondertiteling",
        image: "https://www.gran-turismo.com/images/c/i1v1o1.jpg",
        fallback: "https://images.unsplash.com/photo-1511910849309-0dffb8788f1f?auto=format&fit=crop&w=800&q=80",
        description: "Ultiem raceservaring met fysicamente authentieke simulatie. Kies uit 400+ voertuigen, race op legendarische circuits, en tunen auto's precies. Enkele controller trillingen in realistische handling. Racegames op hun best."
    },
    {
        id: 20,
        title: "Resident Evil Village",
        platform: "PC",
        price: 24.99,
        oldPrice: 49.99,
        pegi: "18",
        condition: "Goed",
        language: "Engels",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png",
        fallback: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        description: "Overleven in een spookachtig Europees dorp vol vampires en monsters. Beperkte munitie forceert je tot tactische keuzes. Intense horror-ervaring met cinematische storytelling. Niet voor zwakken van hart!"
    },
    {
        id: 21,
        title: "Super Smash Bros Ultimate",
        platform: "Nintendo",
        price: 39.99,
        oldPrice: 59.99,
        pegi: "12",
        condition: "Zeer goed",
        language: "Nederlands beschikbaar",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/hero",
        fallback: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
        description: "Ultieme Nintendo fighter met 89 speelbare karakters. Mario tot Zelda, allemaal kunnen elkaar aftuigen. Casual en competitief gameplay, Online tournaments, en endless fun. De definitieve Nintendo-feestgame."
    },
    {
        id: 22,
        title: "Battlefield 2042",
        platform: "PC",
        price: 14.99,
        oldPrice: 39.99,
        pegi: "16",
        condition: "Goed",
        language: "Engels",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg",
        fallback: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        description: "Chaos in massive 128-speler gevechten op dynamische kaarten. Jeeps, helicopters, \u00e9n dreigingen van de omgeving geven elk moment spanning. Team-gebaseerde operaties met specialisten met unieke skills. Oorlog op groot karakter."
    }
];

// ── Currency formatter (single instance) ──────────────────────────

var money = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" });

// ── Cart persistence (localStorage) ───────────────────────────────

var CART_KEY = "gamecycle-cart";
var discountActive = false;

function readCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || "{}");
}

function writeCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ── Cart helpers ──────────────────────────────────────────────────

function changeQuantity(id, delta) {
    var cart = readCart();
    var next = (cart[id] || 0) + delta;
    if (next <= 0) delete cart[id];
    else cart[id] = next;
    writeCart(cart);
    renderCart();
}

function addToCart(id) {
    changeQuantity(id, 1);
    document.querySelector(".cart-drawer")?.classList.add("open");
    showToast("Game toegevoegd aan je winkelwagen");
    document.querySelectorAll("[data-cart-open], .cart-button").forEach(function (btn) {
        btn.classList.remove("cart-pop");
        void btn.offsetWidth;
        btn.classList.add("cart-pop");
    });
}

// ── Product rendering ─────────────────────────────────────────────

function renderProducts(filter) {
    if (filter === undefined) filter = "all";
    var grid = document.querySelector("[data-product-grid]");
    if (!grid) return;

    var featuredOnly = grid.hasAttribute("data-featured");
    grid.innerHTML = "";

    gameProducts
        .filter(function (p) { return featuredOnly ? p.featured : true; })
        .filter(function (p) { return filter === "all" || p.platform === filter; })
        .forEach(function (product) {
            var card = document.createElement("article");
            card.className = "product-card reveal-card";
            card.innerHTML =
                '<div class="product-photo-wrap">' +
                '    <img class="product-photo" src="' + product.image + '"' +
                '         alt="Coverfoto van ' + product.title + '"' +
                "         onerror=\"this.src='" + (product.fallback || product.image) + "'\">" +
                '    <span class="shine"></span>' +
                "</div>" +
                '<div class="product-info">' +
                '    <div class="product-title">' +
                "        <h3>" + product.title + "</h3>" +
                "        <span>PEGI " + product.pegi + "</span>" +
                "    </div>" +
                "    <p>" + product.description + "</p>" +
                "    <dl>" +
                "        <div><dt>Platform</dt><dd>" + product.platform + "</dd></div>" +
                "        <div><dt>Staat</dt><dd>" + product.condition + "</dd></div>" +
                "        <div><dt>Levering</dt><dd>1-2 werkdagen</dd></div>" +
                "    </dl>" +
                '    <div class="price-row">' +
                "        <div><strong>" + money.format(product.price) + "</strong>" +
                "        <span>" + money.format(product.oldPrice) + "</span></div>" +
                '        <button type="button" data-add="' + product.id + '">In winkelwagen</button>' +
                "    </div>" +
                "</div>";
            grid.appendChild(card);
        });
}

// ── Cart rendering ────────────────────────────────────────────────

function renderCart() {
    var countEls   = document.querySelectorAll("[data-cart-count]");
    var itemsEl    = document.querySelector("[data-cart-items]");
    var totalEl    = document.querySelector("[data-cart-total]");
    var subtotalEl = document.querySelector("[data-subtotal]");
    var shippingEl = document.querySelector("[data-shipping]");
    var cart       = readCart();
    var count      = 0;
    var subtotal   = 0;

    if (itemsEl) itemsEl.innerHTML = "";

    Object.entries(cart).forEach(function (entry) {
        var id  = entry[0];
        var qty = entry[1];
        var product = gameProducts.find(function (p) { return p.id === Number(id); });
        if (!product) return;
        count    += qty;
        subtotal += product.price * qty;

        if (itemsEl) {
            var row = document.createElement("div");
            row.className = "cart-item";
            row.innerHTML =
                "<div>" +
                "    <strong>" + product.title + "</strong>" +
                "    <span>" + product.platform + " \u2014 " + money.format(product.price) + "</span>" +
                "</div>" +
                '<div class="quantity">' +
                '    <button type="button" data-quantity-minus="' + id + '">\u2212</button>' +
                "    <span>" + qty + "</span>" +
                '    <button type="button" data-quantity-plus="' + id + '">+</button>' +
                "</div>";
            itemsEl.appendChild(row);
        }
    });

    if (itemsEl && count === 0) {
        itemsEl.innerHTML = "<p class='empty-cart'>Je winkelwagen is leeg.</p>";
    }

    countEls.forEach(function (el) { el.textContent = count; });

    if (subtotalEl) {
        var discount = discountActive ? subtotal * 0.1 : 0;
        var shipping = subtotal >= 35 || subtotal === 0 ? 0 : 3.95;
        var total    = Math.max(subtotal - discount + shipping, 0);
        subtotalEl.textContent = money.format(subtotal);
        if (shippingEl) shippingEl.textContent = shipping === 0 ? "Gratis" : money.format(shipping);
        if (totalEl)    totalEl.textContent     = money.format(total);
    } else if (totalEl) {
        totalEl.textContent = money.format(subtotal);
    }
}

// ── Global click delegation ───────────────────────────────────────

document.addEventListener("click", function (event) {
    var add = event.target.closest("[data-add]");
    if (add) addToCart(Number(add.dataset.add));

    var plus = event.target.closest("[data-quantity-plus]");
    if (plus) changeQuantity(plus.dataset.quantityPlus, 1);

    var minus = event.target.closest("[data-quantity-minus]");
    if (minus) changeQuantity(minus.dataset.quantityMinus, -1);

    if (event.target.closest("[data-cart-open]"))
        document.querySelector(".cart-drawer")?.classList.add("open");

    if (event.target.closest("[data-cart-close]"))
        document.querySelector(".cart-drawer")?.classList.remove("open");

    var applyBtn = event.target.closest("[data-apply-discount]");
    if (applyBtn) {
        var input = document.querySelector("[data-discount-input]");
        var msg   = document.querySelector("[data-discount-message]");
        if (input && msg) {
            var code = input.value.trim().toUpperCase();
            discountActive = code === "GAME10";
            msg.textContent = discountActive
                ? "Kortingscode toegepast: 10% korting."
                : "Gebruik code GAME10 voor 10% korting.";
            renderCart();
        }
    }
});

// ── Platform filters ──────────────────────────────────────────────

document.querySelectorAll("[data-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelectorAll("[data-filter]").forEach(function (b) { b.classList.remove("active"); });
        button.classList.add("active");
        renderProducts(button.dataset.filter);
    });
});

// ── Checkout form ─────────────────────────────────────────────────

var checkoutForm = document.querySelector("[data-checkout-form]");
if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var msg  = document.querySelector("[data-order-message]");
        var cart = readCart();

        if (Object.keys(cart).length === 0) {
            if (msg) msg.textContent = "Voeg eerst een game toe aan je winkelwagen.";
            return;
        }

        if (msg) msg.textContent = "Bedankt! Je bestelling is ontvangen. Je ontvangt een bevestiging per e-mail.";
        writeCart({});
        discountActive = false;
        renderCart();
    });
}

// ── Toast notification ────────────────────────────────────────────

function showToast(text) {
    var toast = document.querySelector(".toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");
}

// ── Scroll-reveal animations ──────────────────────────────────────

function setupRevealAnimations() {
    document.body.classList.add("motion-ready");
    var targets = document.querySelectorAll(
        ".product-card, .legal-grid article, .review-grid article, .check-list li, .journey div"
    );
    if (!("IntersectionObserver" in window)) {
        targets.forEach(function (t) { t.classList.add("is-visible"); });
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    targets.forEach(function (t) { observer.observe(t); });
}

// ── Tilt / parallax on hero panels ────────────────────────────────

function setupPageMotion() {
    var hero = document.querySelector(".page-hero, .hero-panel");
    if (!hero) return;
    hero.addEventListener("mousemove", function (event) {
        var rect = hero.getBoundingClientRect();
        var x = ((event.clientX - rect.left) / rect.width  - 0.5) * 14;
        var y = ((event.clientY - rect.top)  / rect.height - 0.5) * 14;
        hero.style.setProperty("--tilt-x", -y + "deg");
        hero.style.setProperty("--tilt-y",  x + "deg");
    });
    hero.addEventListener("mouseleave", function () {
        hero.style.setProperty("--tilt-x", "0deg");
        hero.style.setProperty("--tilt-y", "0deg");
    });
}

// ── Decorative spark layer ────────────────────────────────────────

function createSparkLayer() {
    if (document.querySelector(".spark-layer")) return;
    var layer = document.createElement("div");
    layer.className = "spark-layer";
    for (var i = 0; i < 18; i += 1) {
        var spark = document.createElement("span");
        spark.style.setProperty("--x",     Math.random() * 100 + "%");
        spark.style.setProperty("--delay", Math.random() * 8   + "s");
        spark.style.setProperty("--size",  5 + Math.random() * 8 + "px");
        layer.appendChild(spark);
    }
    document.body.appendChild(layer);
}

// ── Initialise ────────────────────────────────────────────────────

renderProducts();
renderCart();
setupRevealAnimations();
setupPageMotion();
createSparkLayer();
