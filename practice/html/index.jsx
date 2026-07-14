import { useState, useEffect, useRef } from "react";

const products = [
  { id: 1, name: "Floral Butterfly", price: 340, category: "Hair Pins", tag: "Bestseller", emoji: "🦋", color: "#e8d5f0" },
  { id: 2, name: "Floral Duo", price: 220, category: "Hair Pins", tag: "New", emoji: "🌸", color: "#fde8ec" },
  { id: 3, name: "Flower Swirl", price: 230, category: "Hair Pins", tag: null, emoji: "🌼", color: "#fff3d6" },
  { id: 4, name: "Forest Swirl", price: 360, category: "Hair Pins", tag: "Premium", emoji: "🌿", color: "#d6f0e0" },
  { id: 5, name: "Mor Cuff", price: 200, category: "Arm Cuffs", tag: null, emoji: "🦚", color: "#d6eaf8" },
  { id: 6, name: "Star Lit Cuff", price: 270, category: "Arm Cuffs", tag: "New", emoji: "⭐", color: "#fef9c3" },
  { id: 7, name: "Pixie Dust Cuff", price: 200, category: "Arm Cuffs", tag: null, emoji: "✨", color: "#f3e8ff" },
  { id: 8, name: "Crystal Necklace", price: 300, category: "Kada", tag: "Premium", emoji: "💎", color: "#e0f7fa" },
  { id: 9, name: "Golden Whirl Earrings", price: 50, category: "Kada", tag: null, emoji: "🌀", color: "#fff8e1" },
  { id: 10, name: "Golden Lumi Cuff", price: 150, category: "Arm Cuffs", tag: null, emoji: "✦", color: "#fce4ec" },
  { id: 11, name: "Silver Lumi Cuff", price: 150, category: "Arm Cuffs", tag: null, emoji: "🪞", color: "#eceff1" },
  { id: 12, name: "Barbie Loop Cuff", price: 180, category: "Kada", tag: "Fan Fav", emoji: "💗", color: "#fce4ec" },
  { id: 13, name: "Silver Swirl Cuff", price: 310, category: "Arm Cuffs", tag: "Premium", emoji: "🌙", color: "#e8eaf6" },
  { id: 14, name: "Coral Wave Cuff", price: 180, category: "Kada", tag: null, emoji: "🌊", color: "#e0f2f1" },
];

const categories = ["All", "Hair Pins", "Arm Cuffs", "Kada"];

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #faf6f1;
    --rose: #c9a0a0;
    --rose-dark: #a07070;
    --gold: #c9a96e;
    --gold-light: #e8d5b0;
    --charcoal: #2c2420;
    --muted: #8a7a72;
    --soft: #f0e8e0;
  }

  body { background: var(--cream); font-family: 'Jost', sans-serif; color: var(--charcoal); }

  .page { min-height: 100vh; position: relative; overflow: hidden; }

  /* Background grain */
  .page::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.6;
  }

  /* HEADER */
  .header {
    position: sticky; top: 0; z-index: 100;
    padding: 0 40px;
    background: rgba(250,246,241,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(201,169,110,0.2);
    display: flex; align-items: center; justify-content: space-between;
    height: 72px;
  }

  .logo-area { display: flex; align-items: center; gap: 12px; }
  .logo-icon { font-size: 22px; animation: sparkle 3s infinite; }
  @keyframes sparkle { 0%,100% { transform: rotate(-5deg) scale(1); } 50% { transform: rotate(5deg) scale(1.1); } }

  .logo-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px; font-weight: 400; letter-spacing: 0.06em;
    color: var(--charcoal);
  }
  .logo-text span { color: var(--gold); font-style: italic; }

  .nav-links { display: flex; gap: 32px; }
  .nav-links a {
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--muted); text-decoration: none; font-weight: 300;
    transition: color 0.3s;
  }
  .nav-links a:hover { color: var(--gold); }

  .cart-btn {
    background: var(--charcoal); color: var(--cream);
    border: none; cursor: pointer;
    padding: 9px 20px; border-radius: 2px;
    font-family: 'Jost', sans-serif; font-size: 11px;
    letter-spacing: 0.12em; text-transform: uppercase;
    transition: background 0.3s;
    display: flex; align-items: center; gap: 8px;
  }
  .cart-btn:hover { background: var(--gold); }

  /* HERO */
  .hero {
    position: relative; z-index: 1;
    padding: 80px 60px 60px;
    display: flex; align-items: flex-end; justify-content: space-between;
    gap: 40px;
  }
  .hero-left { flex: 1; }
  .hero-eyebrow {
    font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--gold); font-weight: 400; margin-bottom: 16px;
    display: flex; align-items: center; gap: 12px;
  }
  .hero-eyebrow::before { content: ''; width: 30px; height: 1px; background: var(--gold); display: block; }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(48px, 6vw, 82px);
    font-weight: 300; line-height: 1.05;
    color: var(--charcoal);
    margin-bottom: 24px;
  }
  .hero-title em { font-style: italic; color: var(--rose-dark); }
  .hero-sub {
    font-size: 13px; color: var(--muted); font-weight: 300;
    line-height: 1.8; max-width: 360px; letter-spacing: 0.03em;
  }
  .hero-right {
    flex-shrink: 0;
    display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
  }
  .hero-stat { text-align: right; }
  .hero-stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px; font-weight: 300; color: var(--charcoal);
    line-height: 1;
  }
  .hero-stat-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-top: 2px; }
  .hero-divider { width: 1px; height: 60px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); align-self: center; }

  /* FILTER BAR */
  .filter-section { position: relative; z-index: 1; padding: 0 60px 40px; }
  .filter-bar {
    display: flex; align-items: center; gap: 8px;
    border-bottom: 1px solid rgba(201,169,110,0.2);
    padding-bottom: 24px;
    justify-content: space-between;
  }
  .filter-tabs { display: flex; gap: 4px; }
  .filter-tab {
    background: none; border: 1px solid transparent;
    padding: 8px 20px; border-radius: 2px; cursor: pointer;
    font-family: 'Jost', sans-serif; font-size: 11px;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--muted); transition: all 0.3s; font-weight: 300;
  }
  .filter-tab:hover { color: var(--charcoal); border-color: rgba(44,36,32,0.15); }
  .filter-tab.active {
    background: var(--charcoal); color: var(--cream);
    border-color: var(--charcoal);
  }
  .filter-count {
    font-size: 11px; letter-spacing: 0.1em; color: var(--muted);
    font-weight: 300;
  }

  /* GRID */
  .grid-section { position: relative; z-index: 1; padding: 0 60px 80px; }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2px;
  }

  /* CARD */
  .card {
    background: white; cursor: pointer;
    position: relative; overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    animation: fadeUp 0.6s both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .card:hover { transform: translateY(-4px); z-index: 2; }
  .card:hover .card-overlay { opacity: 1; }
  .card:hover .card-img-bg { transform: scale(1.04); }
  .card:hover .quick-add { opacity: 1; transform: translateY(0); }

  .card-img-wrap {
    position: relative; padding-top: 110%; overflow: hidden;
  }
  .card-img-bg {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-size: 80px;
  }
  .card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(44,36,32,0.5) 0%, transparent 50%);
    opacity: 0; transition: opacity 0.4s;
  }

  .quick-add {
    position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%) translateY(8px);
    background: white; color: var(--charcoal);
    border: none; cursor: pointer;
    padding: 8px 20px; border-radius: 2px;
    font-family: 'Jost', sans-serif; font-size: 10px;
    letter-spacing: 0.15em; text-transform: uppercase;
    white-space: nowrap;
    opacity: 0; transition: all 0.3s;
  }
  .quick-add:hover { background: var(--gold); color: white; }

  .card-tag {
    position: absolute; top: 12px; left: 12px;
    background: var(--charcoal); color: var(--cream);
    font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase;
    padding: 4px 10px; font-weight: 400;
  }
  .card-tag.new { background: var(--gold); }
  .card-tag.premium { background: var(--rose-dark); }
  .card-tag.fanfav { background: #c77daa; }

  .card-body { padding: 16px 18px 20px; }
  .card-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px; font-weight: 400; letter-spacing: 0.02em;
    color: var(--charcoal); margin-bottom: 6px;
  }
  .card-footer { display: flex; align-items: center; justify-content: space-between; }
  .card-price {
    font-size: 13px; font-weight: 400; color: var(--gold);
    letter-spacing: 0.05em;
  }
  .card-wish {
    background: none; border: none; cursor: pointer;
    font-size: 14px; color: var(--muted);
    transition: all 0.3s; padding: 0;
  }
  .card-wish:hover { color: #e07070; transform: scale(1.2); }
  .card-wish.active { color: #e07070; }

  /* FOOTER */
  .footer {
    position: relative; z-index: 1;
    border-top: 1px solid rgba(201,169,110,0.2);
    padding: 40px 60px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .footer-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px; font-weight: 300; letter-spacing: 0.06em; color: var(--charcoal);
  }
  .footer-links { display: flex; gap: 24px; }
  .footer-links a { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.3s; }
  .footer-links a:hover { color: var(--gold); }
  .footer-right { font-size: 10px; letter-spacing: 0.1em; color: var(--muted); }

  /* TOAST */
  .toast {
    position: fixed; bottom: 30px; right: 30px; z-index: 999;
    background: var(--charcoal); color: var(--cream);
    padding: 14px 24px; border-radius: 2px;
    font-size: 12px; letter-spacing: 0.1em;
    transform: translateY(80px); opacity: 0;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    pointer-events: none;
    border-left: 3px solid var(--gold);
  }
  .toast.show { transform: translateY(0); opacity: 1; }

  /* DECORATIVE LINE */
  .deco-line {
    position: fixed; top: 0; right: 100px; width: 1px; height: 100vh;
    background: linear-gradient(to bottom, transparent, rgba(201,169,110,0.15), transparent);
    pointer-events: none; z-index: 0;
  }

  @media (max-width: 700px) {
    .header { padding: 0 20px; }
    .nav-links { display: none; }
    .hero { padding: 40px 24px 32px; flex-direction: column; gap: 24px; }
    .hero-right { flex-direction: row; align-items: center; }
    .filter-section, .grid-section { padding: 0 16px 40px; }
    .product-grid { grid-template-columns: repeat(2, 1fr); }
    .footer { padding: 30px 20px; flex-direction: column; gap: 16px; text-align: center; }
  }
`;

const tagClass = (tag) => {
  if (!tag) return "";
  if (tag === "New") return "new";
  if (tag === "Premium") return "premium";
  if (tag === "Fan Fav") return "fanfav";
  return "";
};

export default function TwinkleTrinkets() {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState("");
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef(null);

  const filtered = active === "All" ? products : products.filter(p => p.category === active);

  const showMsg = (msg) => {
    setToast(msg);
    setShowToast(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowToast(false), 2200);
  };

  const addToCart = (product) => {
    setCart(c => [...c, product.id]);
    showMsg(`✦ ${product.name} added to bag`);
  };

  const toggleWish = (id) => {
    setWishlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]);
  };

  return (
    <>
      <style>{style}</style>
      <div className="page">
        <div className="deco-line" />

        {/* HEADER */}
        <header className="header">
          <div className="logo-area">
            <span className="logo-icon">✦</span>
            <span className="logo-text">Twinkle <span>Trinkets</span></span>
          </div>
          <nav className="nav-links">
            <a href="#">Collections</a>
            <a href="#">About</a>
            <a href="#">Care Guide</a>
            <a href="#">Contact</a>
          </nav>
          <button className="cart-btn">
            <span>🛍</span>
            <span>Bag ({cart.length})</span>
          </button>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow">Handcrafted Wire Jewellery</div>
            <h1 className="hero-title">
              Wear the <em>magic</em><br />of little things
            </h1>
            <p className="hero-sub">
              Each piece is hand-sculpted with love — delicate wire art that catches
              light, turns heads, and tells your story.
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-stat">
              <div className="hero-stat-num">₹50</div>
              <div className="hero-stat-label">Starting From</div>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num">14+</div>
              <div className="hero-stat-label">Designs</div>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="filter-section">
          <div className="filter-bar">
            <div className="filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-tab ${active === cat ? "active" : ""}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="filter-count">{filtered.length} pieces</span>
          </div>
        </section>

        {/* GRID */}
        <section className="grid-section">
          <div className="product-grid">
            {filtered.map((p, i) => (
              <div
                className="card"
                key={p.id}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="card-img-wrap">
                  <div className="card-img-bg" style={{ background: p.color }}>
                    {p.emoji}
                  </div>
                  <div className="card-overlay" />
                  {p.tag && (
                    <span className={`card-tag ${tagClass(p.tag)}`}>{p.tag}</span>
                  )}
                  <button className="quick-add" onClick={() => addToCart(p)}>
                    Add to Bag
                  </button>
                </div>
                <div className="card-body">
                  <div className="card-name">{p.name}</div>
                  <div className="card-footer">
                    <span className="card-price">₹{p.price}</span>
                    <button
                      className={`card-wish ${wishlist.includes(p.id) ? "active" : ""}`}
                      onClick={() => toggleWish(p.id)}
                      title="Wishlist"
                    >
                      {wishlist.includes(p.id) ? "♥" : "♡"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-brand">Twinkle Trinkets × dm2buy</div>
          <div className="footer-links">
            <a href="#">Shipping & Return</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy</a>
          </div>
          <div className="footer-right">Handmade with ♥ in India</div>
        </footer>
      </div>

      {/* TOAST */}
      <div className={`toast ${showToast ? "show" : ""}`}>{toast}</div>
    </>
  );
}