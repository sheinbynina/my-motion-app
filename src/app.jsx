import { motion } from "motion/react";
import { ShoppingBag, Heart, Star, Truck, RotateCcw, Shield, ChevronRight, Search, Menu, X, Camera } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";

// Brand name — easy to change here
const BRAND_NAME = "Shein By Nina";

const NAV_LINKS = ["All Products", "New Arrivals", "Women", "Men", "Children", "Household", "Outdoors", "Technology", "Automotive", "Holidays & Festivities", "Seasonal"];

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tag: "We Brought It All For You!",
    headline: "All You Need\nis One Shop!",
    sub: "Fashion, home, tech, outdoors & more — thousands of styles across every category, all in one place.",
  },
  {
    image: "https://images.unsplash.com/photo-1594396568283-64d7fb9abc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tag: "New Arrivals Are Here",
    headline: "Fresh Drops\nEvery Day",
    sub: "New products added daily across women's, men's, kids', home & more. Shop before it sells out.",
  },
];

const CATEGORIES = [
  { label: "Women", image: "https://images.unsplash.com/photo-1780396427743-a869eb9cb23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Formal · Informal · Maternal · Underwear · Shoes · Bags" },
  { label: "Men", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Formal · Casual · Sportswear · Shoes · Accessories" },
  { label: "Children", image: "https://images.unsplash.com/photo-1529776292731-c2246c65df5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Girls · Boys · Baby · Shoes · School" },
  { label: "Household", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Kitchen · Bedroom · Bathroom · Décor · Storage" },
  { label: "Outdoors", image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Camping · Sports · Garden · Travel" },
  { label: "Technology", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Gadgets · Accessories · Smart Home · Audio" },
  { label: "Automotive", image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Car Accessories · Tools · Care Products" },
  { label: "Holidays", image: "https://images.unsplash.com/photo-1646875403870-b8b674924620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Christmas · Halloween · Easter · Eid · Diwali" },
  { label: "Seasonal", image: "https://images.unsplash.com/photo-1764697021136-a0b50bc88090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", count: "Spring · Summer · Fall · Winter" },
];

const PRODUCTS = [
  { id: 1, name: "Rosebud Floral Midi Dress", price: "$24.99", original: "$39.99", rating: 4.8, reviews: 1240, image: "https://images.unsplash.com/photo-1594396568283-64d7fb9abc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badge: "Bestseller", badgeColor: "bg-primary" },
  { id: 2, name: "Satin Slip Skirt", price: "$18.99", original: "$29.99", rating: 4.6, reviews: 872, image: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badge: "New", badgeColor: "bg-rose-400" },
  { id: 3, name: "Patent Stiletto Heels", price: "$32.99", original: "$54.99", rating: 4.9, reviews: 643, image: "https://images.unsplash.com/photo-1573100925118-870b8efc799d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badge: "40% Off", badgeColor: "bg-destructive" },
  { id: 4, name: "Mini Quilted Crossbody", price: "$21.99", original: "$34.99", rating: 4.7, reviews: 519, image: "https://images.unsplash.com/photo-1574271143515-5cddf8da19be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badge: "Trending", badgeColor: "bg-pink-500" },
  { id: 5, name: "Pearl Drop Earrings", price: "$9.99", original: "$14.99", rating: 4.5, reviews: 2105, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badge: "Bestseller", badgeColor: "bg-primary" },
  { id: 6, name: "Linen Blazer Co-ord", price: "$44.99", original: "$69.99", rating: 4.8, reviews: 388, image: "https://images.unsplash.com/photo-1612731486606-2614b4d74921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badge: "New", badgeColor: "bg-rose-400" },
  { id: 7, name: "Floral Chiffon Blouse", price: "$16.99", original: "$26.99", rating: 4.6, reviews: 731, image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badge: "Sale", badgeColor: "bg-destructive" },
  { id: 8, name: "Platform Peep-Toe Sandals", price: "$27.99", original: "$44.99", rating: 4.7, reviews: 492, image: "https://images.unsplash.com/photo-1630407332126-70ebb700976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badge: "Trending", badgeColor: "bg-pink-500" },
];

const PERKS = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $49" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day hassle-free returns" },
  { icon: Shield, title: "Secure Checkout", desc: "Your data is always safe" },
  { icon: Star, title: "Top Rated", desc: "4.8★ from 2M+ shoppers" },
];

const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1562572159-4efc207f5aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1615919737249-965d68c7e439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1573100925118-870b8efc799d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1574271143515-5cddf8da19be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  "https://images.unsplash.com/photo-1646875403870-b8b674924620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
];

function RoseSVG({ className }: { className?: string }) {
  return (
    <img
      src="https://hercules-cdn.com/file_JUBV53ZfJEfV5J5S8H8x6eQV"
      alt="rosebud"
      className={className}
      style={{ objectFit: "contain", borderRadius: "50%" }}
    />
  );
}

export default function Index() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const hero = HERO_SLIDES[heroIdx];

  function toggleWishlist(id: number) {
    setWishlist((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  }

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Floating rosebuds decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <RoseSVG
            key={i}
            className="absolute text-pink-300 opacity-20"
            style={{
              width: `${24 + (i * 7) % 30}px`,
              top: `${(i * 137) % 90}%`,
              left: `${(i * 83) % 95}%`,
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Top announcement bar */}
      <div className="relative z-10 bg-primary text-primary-foreground text-center py-2.5 text-sm font-medium tracking-wide px-4">
        🌸 It is about time to reveal that new ground breaking promotion we promised! &nbsp;|&nbsp; Stay tuned — <span className="font-bold underline">big news coming soon</span>
      </div>

      {/* Navbar */}
      <header className="relative z-20 bg-background/90 backdrop-blur-md border-b border-border sticky top-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <RoseSVG className="w-8 h-8 text-primary" />
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">{BRAND_NAME}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium cursor-pointer" onClick={(e) => e.preventDefault()}>
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:text-primary transition-colors cursor-pointer hidden md:flex" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-primary transition-colors cursor-pointer" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <Button size="sm" className="hidden md:flex gap-1.5 cursor-pointer">
              <ShoppingBag className="w-4 h-4" /> Shop Now
            </Button>
            <button className="md:hidden p-2 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); }} className="text-foreground/80 hover:text-primary font-medium py-1 cursor-pointer">
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <section className="relative z-10 min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img key={heroIdx} src={hero.image} alt="Hero" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/90 via-pink-50/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <motion.div key={heroIdx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-lg">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full">
              {hero.tag}
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-balance whitespace-pre-line mb-5" style={{ color: "#7B5EA7" }}>
              {hero.headline}
            </h1>
            <p className="text-lg text-foreground/65 mb-8 leading-relaxed max-w-sm">{hero.sub}</p>
            <div className="flex gap-3 flex-wrap">
              <Button size="lg" className="rounded-full px-8 text-base font-semibold cursor-pointer shadow-lg shadow-primary/30">
                Shop the Edit <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-base cursor-pointer">
                Explore Looks
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => setHeroIdx(i)} className={`h-2 rounded-full transition-all cursor-pointer ${i === heroIdx ? "w-8 bg-primary" : "w-2 bg-primary/30"}`} />
          ))}
        </div>
      </section>

      {/* Perks bar */}
      <section className="relative z-10 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERKS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Shop by Category</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map(({ label, image, count }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-3">
                <img src={image} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-serif font-bold text-lg leading-tight">{label}</p>
                  <p className="text-white/70 text-xs">{count}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending products */}
      <section className="relative z-10 bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Hand-picked</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Trending Now</h2>
            </div>
            <Button variant="ghost" className="hidden md:flex gap-1 text-primary cursor-pointer">
              View all <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {PRODUCTS.map(({ id, name, price, original, rating, reviews, image, badge, badgeColor }, i) => (
              <motion.div key={id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3">
                    <span className={`${badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>{badge}</span>
                  </div>
                  <button onClick={() => toggleWishlist(id)} className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors hover:bg-white cursor-pointer">
                    <Heart className={`w-4 h-4 transition-colors ${wishlist.includes(id) ? "fill-primary text-primary" : "text-foreground/50"}`} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-primary-foreground py-3 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer">
                      <ShoppingBag className="w-4 h-4" /> Add to Bag
                    </button>
                  </div>
                </div>
                <div className="p-3.5">
                  <h3 className="font-medium text-sm text-foreground leading-tight mb-1.5 truncate">{name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className={`w-3 h-3 ${si < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">({reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary text-base">{price}</span>
                    <span className="text-xs text-muted-foreground line-through">{original}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner / promo */}
      <section className="relative z-10 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center">
            <img src="https://images.unsplash.com/photo-1646875403870-b8b674924620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080" alt="Promo" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-pink-800/40 to-transparent" />
            <div className="relative px-10 md:px-16 py-14 max-w-lg">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                Limited Time
              </Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Up to 60% Off<br />Summer Styles
              </h2>
              <p className="text-white/75 mb-8 text-lg">Shop our biggest sale of the season. New markdowns added daily.</p>
              <Button size="lg" className="bg-white text-primary hover:bg-pink-50 rounded-full px-8 font-semibold cursor-pointer">
                Shop the Sale <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram / community */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Camera className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">@shein.by.nina.pro</p>
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground">Style Inspiration</h2>
          <p className="text-muted-foreground mt-2">Tag us for a chance to be featured</p>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {INSTAGRAM_IMAGES.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer">
              <img src={src} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 bg-primary py-20 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <RoseSVG key={i} className="absolute text-white opacity-10" style={{ width: `${40 + (i * 11) % 50}px`, top: `${(i * 143) % 80}%`, left: `${(i * 89) % 90}%`, transform: `rotate(${i * 45}deg)` }} />
        ))}
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <RoseSVG className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">Welcome to {BRAND_NAME}</h2>
            <p className="text-white/80 text-xl font-serif italic mb-3">{"\"We brought it all for you!\""}</p>
            <p className="text-white/65 text-base mb-8 leading-relaxed max-w-lg mx-auto">
              We are thrilled to announce the official launch of {BRAND_NAME} — your one-stop destination for fashion, home, tech, outdoors, automotive, and so much more. Subscribe now to be the first to know about our <span className="font-bold text-white">grand opening promotion</span> and exclusive early-access deals.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 rounded-full px-5 py-3 bg-white/15 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 text-sm backdrop-blur-sm" />
              <Button className="bg-white text-primary hover:bg-pink-50 rounded-full px-6 font-semibold cursor-pointer shrink-0">Subscribe</Button>
            </div>
            <p className="text-white/40 text-xs mt-3">No spam, unsubscribe any time.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <RoseSVG className="w-7 h-7 text-primary" />
              <span className="font-serif text-xl font-bold text-primary">{BRAND_NAME}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Fashion, home, tech & more for every body, every budget, every mood. Thousands of new products added daily.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/shein.by.nina.pro" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer" aria-label="Instagram">
                <Camera className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
          {[
            { heading: "Shop", links: ["All Products", "New Arrivals", "Women", "Men", "Children", "Household", "Sale"] },
            { heading: "Help", links: ["Track Order", "Returns", "Sizing Guide", "FAQs", "Contact Us"] },
            { heading: "Company", links: ["About Us", "Careers", "Press", "Sustainability", "Affiliates"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors cursor-pointer">Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors cursor-pointer">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
