const gameProducts = [
    {
        id: 1,
        title: "God of War",
        platform: "PlayStation",
        price: 19.99,
        oldPrice: 39.99,
        pegi: "18",
        condition: "Zeer goed",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
        fallback: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
        description: "Actie-avontuur met sterke verhaallijn."
    },
    {
        id: 2,
        title: "Skyrim",
        platform: "Xbox",
        price: 14.99,
        oldPrice: 29.99,
        pegi: "18",
        condition: "Goed",
        image: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
        fallback: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
        description: "Open-world RPG met honderden quests."
    },
    {
        id: 3,
        title: "Mario Kart 8 Deluxe",
        platform: "Nintendo",
        price: 34.99,
        oldPrice: 54.99,
        pegi: "3",
        condition: "Zeer goed",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg",
        fallback: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
        description: "Racen met vrienden."
    },
    {
        id: 4,
        title: "Fallout 4",
        platform: "PC",
        price: 9.99,
        oldPrice: 24.99,
        pegi: "18",
        condition: "Goed",
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg",
        fallback: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        description: "Post-apocalyptische RPG."
    },
    {
        id: 5,
        title: "FIFA 23",
        platform: "PlayStation",
        price: 12.99,
        oldPrice: 34.99,
        pegi: "3",
        condition: "Licht gebruikt",
        image: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/common/f23-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
        fallback: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80",
        description: "Voetbalgame met career mode."
    },
    {
        id: 6,
        title: "Halo Infinite",
        platform: "Xbox",
        price: 17.99,
        oldPrice: 49.99,
        pegi: "16",
        condition: "Zeer goed",
        image: "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png",
        fallback: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=800&q=80",
        description: "Sci-fi shooter."
    },
    {
        id: 7,
        title: "Zelda: Breath of the Wild",
        platform: "Nintendo",
        price: 39.99,
        oldPrice: 59.99,
        pegi: "12",
        condition: "Zeer goed",
        image: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        fallback: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
        description: "Open-world avontuur."
    },
    {
        id: 8,
        title: "The Witcher 3",
        platform: "PC",
        price: 11.99,
        oldPrice: 29.99,
        pegi: "18",
        condition: "Goed",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        fallback: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
        description: "Fantasy RPG."
    },
    {
        id: 9,
        title: "Red Dead Redemption 2",
        platform: "PlayStation",
        price: 22.99,
        oldPrice: 49.99,
        pegi: "18",
        condition: "Zeer goed",
        image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
        fallback: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
        description: "Western open-world game."
    },
    {
        id: 10,
        title: "Cyberpunk 2077",
        platform: "PC",
        price: 18.99,
        oldPrice: 44.99,
        pegi: "18",
        condition: "Goed",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
        fallback: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
        description: "Futuristische RPG."
    },

    {
        id: 11,
        title: "Minecraft",
        platform: "Nintendo",
        price: 21.99,
        oldPrice: 34.99,
        pegi: "7",
        condition: "Zeer goed",
        image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Vanilla_Block-Render_Creeper.jpg",
        fallback: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=800&q=80",
        description: "Bouwen en survival."
    },
    {
        id: 12,
        title: "Grand Theft Auto V",
        platform: "Xbox",
        price: 16.99,
        oldPrice: 39.99,
        pegi: "18",
        condition: "Goed",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        fallback: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        description: "Open-world actie."
    },

    {
        id: 13,
        title: "Elden Ring",
        platform: "PlayStation",
        price: 34.99,
        oldPrice: 59.99,
        pegi: "16",
        condition: "Zeer goed",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
        fallback: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
        description: "Hardcore fantasy RPG."
    },
    {
        id: 14,
        title: "Spider-Man: Miles Morales",
        platform: "PlayStation",
        price: 24.99,
        oldPrice: 49.99,
        pegi: "16",
        condition: "Zeer goed",
        image: "https://upload.wikimedia.org/wikipedia/en/5/5e/Spider-Man_Miles_Morales_cover.jpg",
        fallback: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=800&q=80",
        description: "Superheld actie."
    },
    {
        id: 15,
        title: "Assassin’s Creed Valhalla",
        platform: "Xbox",
        price: 19.99,
        oldPrice: 49.99,
        pegi: "18",
        condition: "Goed",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg",
        fallback: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
        description: "Viking avontuur."
    },
    {
        id: 16,
        title: "Hogwarts Legacy",
        platform: "PlayStation",
        price: 29.99,
        oldPrice: 59.99,
        pegi: "12",
        condition: "Zeer goed",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
        fallback: "https://images.unsplash.com/photo-1520975922284-9a1b7c8b0f9c?auto=format&fit=crop&w=800&q=80",
        description: "Magische open-world RPG."
    },
    {
        id: 17,
        title: "Call of Duty MWII",
        platform: "Xbox",
        price: 39.99,
        oldPrice: 69.99,
        pegi: "18",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-REVEAL-TOUT.jpg",
        fallback: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        description: "Multiplayer shooter."
    },
    {
        id: 18,
        title: "Animal Crossing: New Horizons",
        platform: "Nintendo",
        price: 34.99,
        oldPrice: 54.99,
        pegi: "3",
        condition: "Zeer goed",
        image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons.jpg",
        fallback: "https://images.unsplash.com/photo-1608889175679-7a3c2b3a3c7d?auto=format&fit=crop&w=800&q=80",
        description: "Relaxte eiland game."
    },
    {
        id: 19,
        title: "Gran Turismo 7",
        platform: "PlayStation",
        price: 29.99,
        oldPrice: 59.99,
        pegi: "3",
        condition: "Zeer goed",
        image: "https://www.gran-turismo.com/images/c/i1v1o1.jpg",
        fallback: "https://images.unsplash.com/photo-1511910849309-0dffb8788f1f?auto=format&fit=crop&w=800&q=80",
        description: "Realistische races."
    },
    {
        id: 20,
        title: "Resident Evil Village",
        platform: "PC",
        price: 24.99,
        oldPrice: 49.99,
        pegi: "18",
        condition: "Goed",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png",
        fallback: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        description: "Horror survival."
    },
    {
        id: 21,
        title: "Super Smash Bros Ultimate",
        platform: "Nintendo",
        price: 39.99,
        oldPrice: 59.99,
        pegi: "12",
        condition: "Zeer goed",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/hero",
        fallback: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
        description: "Nintendo fighter game."
    },
    {
        id: 22,
        title: "Battlefield 2042",
        platform: "PC",
        price: 14.99,
        oldPrice: 39.99,
        pegi: "16",
        condition: "Goed",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg",
        fallback: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        description: "Large-scale shooter."
    }
];

const money = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" });
const cartKey = "gamecycle-cart";

function readCart() {
    return JSON.parse(localStorage.getItem(cartKey) || "{}");
}

function writeCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
}

function addToCart(id) {
    const cart = readCart();
    cart[id] = (cart[id] || 0) + 1;
    writeCart(cart);
    renderCart();
    document.querySelector(".cart-drawer")?.classList.add("open");
    showToast("Game toegevoegd aan je winkelwagen");
    document.querySelectorAll("[data-cart-open], .cart-button").forEach(button => {
        button.classList.remove("cart-pop");
        void button.offsetWidth;
        button.classList.add("cart-pop");
    });
}

function renderProducts(filter = "all") {
    const grid = document.querySelector("[data-product-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    gameProducts
        .filter(product => filter === "all" || product.platform === filter)
        .forEach(product => {
            const card = document.createElement("article");
            card.className = "product-card reveal-card";
            card.innerHTML = `
                <div class="product-photo-wrap">
                    <img class="product-photo" src="${product.image}" alt="Coverfoto van ${product.title}" onerror="this.src='${product.fallback || product.image}'">
                    <span class="shine"></span>
                </div>
                <div class="product-info">
                    <div class="product-title">
                        <h3>${product.title}</h3>
                        <span>PEGI ${product.pegi}</span>
                    </div>
                    <p>${product.description}</p>
                    <dl>
                        <div><dt>Platform</dt><dd>${product.platform}</dd></div>
                        <div><dt>Staat</dt><dd>${product.condition}</dd></div>
                        <div><dt>Levering</dt><dd>1-2 werkdagen</dd></div>
                    </dl>
                    <div class="price-row">
                        <div><strong>${money.format(product.price)}</strong><span>${money.format(product.oldPrice)}</span></div>
                        <button type="button" data-add="${product.id}">In winkelwagen</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
}

function renderCart() {
    const countEls = document.querySelectorAll("[data-cart-count]");
    const items = document.querySelector("[data-cart-items]");
    const totalEl = document.querySelector("[data-cart-total]");
    const cart = readCart();
    let count = 0;
    let total = 0;

    if (items) items.innerHTML = "";
    Object.entries(cart).forEach(([id, qty]) => {
        const product = gameProducts.find(item => item.id === Number(id));
        if (!product) return;
        count += qty;
        total += product.price * qty;
        if (items) {
            const row = document.createElement("div");
            row.className = "cart-item";
            row.innerHTML = `<div><strong>${product.title}</strong><span>${qty} x ${money.format(product.price)}</span></div><button type="button" data-remove="${id}">Verwijder</button>`;
            items.appendChild(row);
        }
    });

    if (items && count === 0) items.innerHTML = "<p class='empty-cart'>Je winkelwagen is leeg.</p>";
    countEls.forEach(el => el.textContent = count);
    if (totalEl) totalEl.textContent = money.format(total);
}

document.addEventListener("click", event => {
    const add = event.target.closest("[data-add]");
    if (add) addToCart(Number(add.dataset.add));

    const remove = event.target.closest("[data-remove]");
    if (remove) {
        const cart = readCart();
        delete cart[remove.dataset.remove];
        writeCart(cart);
        renderCart();
    }

    if (event.target.closest("[data-cart-open]")) document.querySelector(".cart-drawer")?.classList.add("open");
    if (event.target.closest("[data-cart-close]")) document.querySelector(".cart-drawer")?.classList.remove("open");
});

document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        renderProducts(button.dataset.filter);
    });
});

document.querySelector("[data-checkout-form]")?.addEventListener("submit", event => {
    const form = event.target;
    const itemsInput = form.querySelector("#orderItems");
    if (!itemsInput) return;

    const cart = readCart();
    const orderLines = Object.entries(cart)
        .map(([id, qty]) => {
            const product = gameProducts.find(item => item.id === Number(id));
            return product ? `${qty}x ${product.title} (${product.platform}) - ${money.format(product.price)}` : null;
        })
        .filter(Boolean);

    itemsInput.value = orderLines.join("\n");
});

function showToast(text) {
    let toast = document.querySelector(".toast");
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

function setupRevealAnimations() {
    document.body.classList.add("motion-ready");
    const targets = document.querySelectorAll(".product-card, .legal-grid article, .review-grid article, .check-list li, .journey div");
    if (!("IntersectionObserver" in window)) {
        targets.forEach(target => target.classList.add("is-visible"));
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    targets.forEach(target => observer.observe(target));
}

function setupPageMotion() {
    const hero = document.querySelector(".page-hero, .hero-panel");
    if (hero) {
        hero.addEventListener("mousemove", event => {
            const rect = hero.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;
            hero.style.setProperty("--tilt-x", `${-y}deg`);
            hero.style.setProperty("--tilt-y", `${x}deg`);
        });
        hero.addEventListener("mouseleave", () => {
            hero.style.setProperty("--tilt-x", "0deg");
            hero.style.setProperty("--tilt-y", "0deg");
        });
    }
}

function createSparkLayer() {
    if (document.querySelector(".spark-layer")) return;
    const layer = document.createElement("div");
    layer.className = "spark-layer";
    for (let i = 0; i < 18; i += 1) {
        const spark = document.createElement("span");
        spark.style.setProperty("--x", `${Math.random() * 100}%`);
        spark.style.setProperty("--delay", `${Math.random() * 8}s`);
        spark.style.setProperty("--size", `${5 + Math.random() * 8}px`);
        layer.appendChild(spark);
    }
    document.body.appendChild(layer);
}

renderProducts();
renderCart();
setupRevealAnimations();
setupPageMotion();
createSparkLayer();
