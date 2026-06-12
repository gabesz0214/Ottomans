import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, useRef } from "react";
import {
  Phone, MapPin, Clock, Instagram, Facebook, Star, Flame, Leaf,
  UtensilsCrossed, ChevronDown, ArrowRight, Navigation, Camera,
  X, ShoppingBag
} from "lucide-react";

import logo from "@/assets/ottomans-logo.jpg";
import heroDoner from "@/assets/hero-doner.jpg";
import donerSandwich from "@/assets/doner-sandwich.png";
import foodBox from "@/assets/food-box.jpg";
import foodWurst from "@/assets/food-wurst.jpg";
import donerDurum from "@/assets/doner-durum.png";
import donerLahmacun from "@/assets/doner-lahmacun.png";
import donerVeggieDurum from "@/assets/doner-veggie-durum.png";
import donerPocket from "@/assets/doner-pocket.png";
import lahmacun from "@/assets/lahmacun.png";
import donerTal from "@/assets/doner-tal.png";
import fitBox from "@/assets/fit-box.png";
import stripsL from "@/assets/strips-l.png";
import stripsXl from "@/assets/strips-xl.png";
import curryWurstSnack from "@/assets/curry-wurst-snack.png";
import sultkrumpli from "@/assets/sultkrumpli.png";
import menuDoner from "@/assets/menu-doner.png";
import menuDurum from "@/assets/menu-durum.png";
import menuCurrywurst from "@/assets/menu-currywurst.png";
import menuLahmacun from "@/assets/menu-lahmacun.png";
import menuLahmacunDoner from "@/assets/menu-lahmacun-doner.png";
import menuVeggieDoner from "@/assets/menu-veggie-doner.png";
import monsterFeher from "@/assets/monster-feher.png";
import monsterHamilton from "@/assets/monster-hamilton.png";
import naturaquaSzensavmentes from "@/assets/naturaqua-szensavmentes.png";
import naturaquaSzensavas from "@/assets/naturaqua-szensavas.png";
import cocaCola033 from "@/assets/coca-cola-033.png";
import cocaColaZero033 from "@/assets/coca-cola-zero-033.png";
import cocaColaCherryZero033 from "@/assets/coca-cola-cherry-zero-033.png";
import cocaColaCherryZero05 from "@/assets/coca-cola-cherry-zero-05.png";
import kinleyGingerAle033 from "@/assets/kinley-ginger-ale-033.png";
import sprite033 from "@/assets/sprite-033.png";
import fanta033 from "@/assets/fanta-033.png";
import cocaCola05 from "@/assets/coca-cola-05.png";
import poweradeBlue05 from "@/assets/powerade-blue-05.png";
import spriteZero05 from "@/assets/sprite-zero-05.png";
import heroOriginal from "@/assets/ottomans-hero.jpg";
import illustrations from "@/assets/food-illustrations.png";
import foodFries from "@/assets/food-fries.png";
import headerLogo from "@/assets/header-logo.png";
import aboutInterior from "@/assets/about-interior.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery6 from "@/assets/gallery-6.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ottoman's Döner, Fries & Wurst — Prémium street food Debrecen" },
      { name: "description", content: "Eredeti török ízek, ropogós hasáb és tüzes curry wurst Debrecen szívében. Nézd meg az étlapot és látogass el hozzánk!" },
      { property: "og:title", content: "Ottoman's Döner, Fries & Wurst — Debrecen" },
      { property: "og:description", content: "Prémium street food élmény. Eredeti török ízek Debrecenben." },
    ],
  }),
  component: OttomansPage,
});

const FACEBOOK = "https://www.facebook.com/profile.php?id=61559474031615";
const INSTAGRAM = "https://www.instagram.com/ottomansdebrecen";
const MAPS = "https://www.google.com/search?q=OTTOMAN%27S+D%C3%96NER%2C+FRIES+%26+WURST";
const PHONE = "+36306420420";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tags?: ("spicy" | "veg" | "uj" | "nepszeru" | "18+")[];
  img?: string;
};

const MENU: Record<string, MenuItem[]> = {
  "Döner": [
    { name: "Döner", desc: "Friss Török kenyér csirkével vagy marhával, zöldségekkel és választható szószokkal", price: "3 500 Ft", img: donerSandwich, tags: ["nepszeru"] },
    { name: "Dürüm", desc: "Tortilla csirkével vagy marhával, zöldségekkel és választható szószokkal", price: "3 500 Ft", img: donerDurum, tags: ["nepszeru"] },
    { name: "Lahmacun", desc: "Friss török pizza zöldségekkel és választható szószokkal.", price: "3 200 Ft", img: lahmacun },
    { name: "Lahmacun Döner", desc: "friss török pizza hússal, zöldségekkel és választható szószokkal.", price: "4 200 Ft", img: donerLahmacun },
    { name: "Veggie Döner", desc: "Döner halloumi sajttal, zöldségekkel és választható szószokkal.", price: "3 200 Ft", img: donerPocket, tags: ["veg"] },
    { name: "Veggie Dürüm", desc: "Dürüm halloumi sajttal, zöldségekkel és választható szószokkal.", price: "3 200 Ft", tags: ["veg"] },
  ],
  "Menük": [
    { name: "Döner Menü", desc: "A Döner Menüben a köret közepes burgonya. Kérjük válasszon hozzá üdítőt!", price: "4 500 Ft", img: menuDoner, tags: ["nepszeru"] },
    { name: "Dürüm Menü", desc: "A Dürüm Menüben a köret közepes burgonya. Kérjük válasszon hozzá üdítőt!", price: "4 500 Ft", img: menuDurum, tags: ["nepszeru"] },
    { name: "Curry Wurst Menü", desc: "két kolbász különleges curry szósszal és curryporral, két adag sült krumpli majonézzel.", price: "4 200 Ft", img: menuCurrywurst },
    { name: "Kids Menü", desc: "Hat csirkefalatka sült krumplival, 330 ml itallal és választott szósszal", price: "3 100 Ft" },
    { name: "Lahmacun Menü", desc: "Friss török pizza választható zöldségekkel és szószokkal, 1 adag sült krumplival és üdítővel (330 ml)", price: "4 100 Ft", img: menuLahmacun },
    { name: "Lahmacun Döner Menü", desc: "Friss török pizza választható hússal, zöldségekkel és szószokkal, 1 adag sült krumplival és üdítővel (330 ml)", price: "4 900 Ft", img: menuLahmacunDoner },
    { name: "Veggie Döner Menü", desc: "Friss török kenyér halloumi sajttal, zöldségekkel és választott szószokkal. (1 adag sült krumpli és 330 ml üdítő)", price: "4 100 Ft", img: menuVeggieDoner, tags: ["veg"] },
    { name: "Veggie Dürüm Menü", desc: "Friss tortilla halloumi sajttal, zöldségekkel és választott szószokkal. (1 adag sült krumpli és 330 ml üdítő)", price: "4 100 Ft", tags: ["veg"] },
  ],
  "Döner Tál": [
    { name: "Döner Tál", desc: "Egy tál étel csirkével vagy marhával, sült krumpli zöldségekkel és választható szószokkal", price: "5 400 Ft", img: donerTal, tags: ["nepszeru"] },
    { name: "Fit Box", desc: "Doboz étel csirkével vagy marhával, zöldségekkel és választható szószokkal", price: "3 500 Ft", img: fitBox },
  ],
  "Snacks": [
    { name: "Strips L", desc: "300 gramm szaftos csirkemellcsíkok, két adag sült krumpli és egy választott szósz.", price: "3 800 Ft", img: stripsL },
    { name: "Strips XL", desc: "500 gramm szaftos csirkecsíkok, két adag sült krumpli és két választott szósz", price: "5 100 Ft", img: stripsXl },
    { name: "Curry Wurst", desc: "két kolbász különleges curry szósszal és curryporral, két adag sült krumpli majonézzel.", price: "3 600 Ft", img: curryWurstSnack },
  ],
  "Köretek": [
    { name: "Sültkrumpli", desc: "Kétszer sült, ropogós hasábburgonya tengeri sóval és választható házi szósszal.", price: "1 100 Ft", img: sultkrumpli, tags: ["veg"] },
  ],
  "Italok": [
    { name: "NaturAqua szénsavmentes 0,5l", desc: "Szénsavmentes természetes ásványvíz.", price: "550 Ft", img: naturaquaSzensavmentes },
    { name: "NaturAqua szénsavas 0,5l", desc: "Szénsavas természetes ásványvíz.", price: "550 Ft", img: naturaquaSzensavas },
    { name: "Coca-Cola 0,33l", desc: "2 Coca-Cola termék vásárlásakor 30% kedvezmény az italok fogy. árából!", price: "650 Ft", img: cocaCola033 },
    { name: "Coca-Cola Zero 0,33l", desc: "2 Coca-Cola termék vásárlásakor 30% kedvezmény az italok fogy. árából!", price: "650 Ft", img: cocaColaZero033 },
    { name: "Coca Cola Cherry Zero 0,33l", desc: "2 Coca-Cola termék vásárlásakor 30% kedvezmény az italok fogy. árából!", price: "650 Ft", img: cocaColaCherryZero033 },
    { name: "Coca-Cola Cherry Zero 0,5l", desc: "2 Coca-Cola termék vásárlásakor 30% kedvezmény az italok fogy. árából!", price: "700 Ft", img: cocaColaCherryZero05 },
    { name: "Kinley Ginger Ale 0,33l", desc: "Klasszikus gyömbér ízű szénsavas üdítőital.", price: "650 Ft", img: kinleyGingerAle033 },
    { name: "Sprite 0,33l", desc: "Citrom-lime ízű szénsavas üdítőital.", price: "650 Ft", img: sprite033 },
    { name: "Monster Lewis Hamilton 0,5l", desc: "Lewis Hamilton kiadású energiaital.", price: "990 Ft", tags: ["18+"], img: monsterHamilton },
    { name: "Fanta 0,33l", desc: "Narancs ízű szénsavas üdítőital.", price: "650 Ft", img: fanta033 },
    { name: "Monster Fehér 0,5l", desc: "Cukormentes Monster energiaital.", price: "990 Ft", tags: ["18+"], img: monsterFeher },
    { name: "Coca-Cola 0,5l", desc: "2 Coca-Cola termék vásárlásakor 30% kedvezmény az italok fogy. árából!", price: "700 Ft", img: cocaCola05 },
    { name: "Powerade Blue 0,5l", desc: "Kék bogyós gyümölcs ízű izotóniás sportital.", price: "800 Ft", img: poweradeBlue05 },
    { name: "Sprite Zero 0,5l", desc: "Cukormentes citrom-lime ízű szénsavas üdítőital.", price: "700 Ft", img: spriteZero05 },
  ],
};

function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return [ref, isIntersecting] as const;
}

function useOpenStatus() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  // Open every day 11:00 - 24:00 (Europe/Budapest approximated by local)
  const hour = now.getHours();
  const minute = now.getMinutes();
  const inHours = hour >= 11 && (hour < 24);
  return { open: inHours, label: inHours ? "Most nyitva" : "Most zárva", time: `${hour.toString().padStart(2,"0")}:${minute.toString().padStart(2,"0")}` };
}

function CheckerboardDivider() {
  return <div className="h-12 w-full bg-slanted-checkerboard border-y border-primary/10 shadow-sm relative z-20" />;
}

function OttomansPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Menu />
      <CheckerboardDivider />
      <About />
      <CheckerboardDivider />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const status = useOpenStatus();
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-3 sm:mt-5">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-6 rounded-2xl border border-border bg-background/60 backdrop-blur-xl px-3 sm:px-5 py-2.5 shadow-2xl">
          <a href="#top" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-xl overflow-hidden ring-1 ring-accent/40 bg-white">
              <img src={headerLogo} alt="Ottoman's Döner logó" className="h-full w-full object-contain mix-blend-multiply p-0.5" />
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-display text-base sm:text-lg tracking-wider text-foreground truncate">OTTOMAN'S</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] text-accent uppercase truncate">Döner · Fries · Wurst</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center justify-center gap-7 text-sm">
            {[
              ["Menü", "#menu"],
              ["Rólunk", "#about"],
              ["Galéria", "#gallery"],
              ["Kapcsolat", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="relative group text-foreground/80 hover:text-foreground transition-colors">
                <span className="uppercase tracking-[0.18em] text-[12px]">{label}</span>
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[11px] font-medium tracking-wider uppercase border ${status.open ? "border-emerald-500/30 text-emerald-700 bg-emerald-50" : "border-red-500/30 text-red-700 bg-red-50"}`}>
              <span className={`relative flex h-1.5 w-1.5 sm:h-2 sm:w-2`}>
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${status.open ? "bg-emerald-400" : "bg-red-400"}`} />
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 ${status.open ? "bg-emerald-500" : "bg-red-500"}`} />
              </span>
              {status.label}
            </span>
            <a href="#menu" className="hidden lg:inline-flex btn-ember !py-2.5 !px-5 text-sm">Étlap <ArrowRight className="h-4 w-4"/></a>
            <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 text-foreground" aria-label="Menü">
              <ChevronDown className={`h-6 w-6 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          </div>
          {/* Checkerboard strip at the bottom of header card */}
          <div className="absolute bottom-0 inset-x-0 h-[6px] bg-slanted-checkerboard" />
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-background/90 backdrop-blur-xl p-4 grid gap-2 animate-reveal">
            {[
              ["Menü", "#menu"],
              ["Rólunk", "#about"],
              ["Kapcsolat", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-muted text-foreground/90 uppercase tracking-widest text-sm">{label}</a>
            ))}
            <div className="h-px bg-border my-1" />
            <button
              onClick={() => {
                setOpen(false);
                setOrderOpen(true);
              }}
              className="mt-1 w-full btn-ember !py-2.5 justify-center text-xs uppercase tracking-widest font-semibold flex items-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" /> Rendeld meg a kedvenceid!
            </button>
          </div>
        )}
      </div>
      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </header>
  );
}


function Hero() {
  const status = useOpenStatus();
  return (
    <section id="top" className="relative w-full min-h-screen pt-32 pb-24 flex items-center noise overflow-hidden" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 40%, #f4f4f5 120%)" }}>
      {/* Top Slanted Checkerboard Banner */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-slanted-checkerboard border-b border-primary/10 shadow-sm z-30" />

      {/* Mesh Gradient Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-orange-500/5 blur-[120px] sm:blur-[160px] pointer-events-none -z-10 animate-[pulse_8s_infinite] ease-in-out" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-amber-500/5 blur-[120px] sm:blur-[160px] pointer-events-none -z-10 animate-[pulse_8s_infinite] ease-in-out" style={{ animationDelay: "4s" }} />

      {/* Scattered food illustrations (Desktop Only) */}
      <div className="hidden lg:block">
        {[
          // Left side (4 symmetrical rows, shifted closer to center, larger sizes, casual rotations)
          { left: "10%", top: "16%", size: "w-18 h-18 xl:w-22 xl:h-22", rotClass: "-rotate-6", bgPos: "0% 0%", anim: "animate-float-1", label: "Döner Húsnyárs" },
          { left: "17%", top: "38%", size: "w-16 h-16 xl:w-20 xl:h-20", rotClass: "rotate-6", bgPos: "0% 100%", anim: "animate-float-2", label: "Dürüm" },
          { left: "11%", top: "60%", size: "w-18 h-18 xl:w-22 xl:h-22", rotClass: "-rotate-3", img: foodFries, anim: "animate-float-3", label: "Hasábburgonya" },
          { left: "16%", top: "82%", size: "w-20 h-20 xl:w-24 xl:h-24", rotClass: "rotate-12", bgPos: "100% 0%", anim: "animate-float-4", label: "Pita" },

          // Right side (4 symmetrical rows matching the left side in position, size, anim, but with unique casual rotations)
          { right: "10%", top: "16%", size: "w-18 h-18 xl:w-22 xl:h-22", rotClass: "rotate-6", bgPos: "0% 0%", anim: "animate-float-1", label: "Döner Húsnyárs" },
          { right: "17%", top: "38%", size: "w-16 h-16 xl:w-20 xl:h-20", rotClass: "-rotate-6", bgPos: "0% 100%", anim: "animate-float-2", label: "Dürüm" },
          { right: "11%", top: "60%", size: "w-18 h-18 xl:w-22 xl:h-22", rotClass: "rotate-3", img: foodFries, anim: "animate-float-3", label: "Hasábburgonya" },
          { right: "16%", top: "82%", size: "w-20 h-20 xl:w-24 xl:h-24", rotClass: "-rotate-12", bgPos: "100% 0%", anim: "animate-float-4", label: "Pita" }
        ].map((emoji, idx) => {
          const outerStyle: React.CSSProperties = {
            position: "absolute",
            top: emoji.top,
            ...(emoji.left ? { left: emoji.left } : { right: emoji.right }),
          };
          const innerStyle: React.CSSProperties = {
            backgroundImage: `url(${emoji.img || illustrations})`,
            backgroundSize: emoji.img ? "contain" : "200% 200%",
            backgroundPosition: emoji.img ? "center" : emoji.bgPos,
            filter: "drop-shadow(0 0 15px rgba(249,115,22,0.18)) drop-shadow(0 6px 12px rgba(0,0,0,0.06))",
          };
          return (
            <div
              key={idx}
              className={`absolute z-20 ${emoji.size} ${emoji.rotClass}`}
              style={outerStyle}
            >
              <div
                className={`w-full h-full ${emoji.anim} hover:scale-105 transition-transform duration-500 bg-no-repeat`}
                style={innerStyle}
                aria-label={emoji.label}
              />
            </div>
          );
        })}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center w-full relative">
        {/* Centered Content */}
        <div className="lg:col-span-12 relative flex flex-col items-center w-full z-10 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] tracking-[0.25em] uppercase mb-6 animate-reveal">
            <Flame className="h-3.5 w-3.5" /> Debrecen · Est. 2024
          </div>

          {/* Centered Brand Logo */}
          <div className="max-w-[320px] sm:max-w-[580px] md:max-w-3xl w-full mb-6 animate-reveal">
            <img src={logo} alt="Ottoman's Logo" className="w-full h-auto object-contain mix-blend-multiply" />
          </div>

          <p className="mt-8 max-w-2xl text-base sm:text-lg text-zinc-800 leading-relaxed text-center animate-reveal">
            Lassan sült döner, ropogós belga hasáb és berlini curry wurst — Isztambul utcáinak tüze és Európa street-food kultúrája egyetlen falatban.
          </p>

          {/* Static Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 animate-reveal">
            {["Eredeti török ízek", "Friss lavash naponta", "Ropogós belga hasáb"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-white border-2 border-primary text-primary shadow-sm"
                style={{ borderRadius: "4px 12px 4px 12px" }}
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-reveal">
            <a href="#menu" className="btn-ember">Nézd meg a menüt <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" /></a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="btn-ghost-gold">
              <Navigation className="h-4 w-4 sm:h-5 sm:w-5" /> Hogyan találsz ide?
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2 animate-flicker z-30">
        görgess <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>

      {/* Bottom Slanted Checkerboard Banner */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-slanted-checkerboard border-t border-primary/10 shadow-sm z-30" />
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-l-2 border-primary/60 pl-2 sm:pl-3">
      <div className="font-display text-xl sm:text-2xl text-foreground leading-tight">{k}</div>
      <div className="text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-muted-foreground mt-0.5 leading-snug">{v}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Eredeti török ízek", "Ropogós belga hasáb", "Berlini Curry Wurst", "Friss lavash naponta", "Házi szószok", "Debrecen ❤️"];
  const row = [...items, ...items];
  return (
    <div className="relative py-6 border-y border-border bg-gradient-to-r from-blood/20 via-background to-blood/20 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl sm:text-3xl tracking-[0.15em] uppercase text-foreground/80 inline-flex items-center gap-12">
            {t} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function MenuItemCard({ item, index, active }: { item: MenuItem; index: number; active: string }) {
  const [ref, isVisible] = useIntersectionObserver();
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset load state when active category or image changes
    setImgLoaded(false);
  }, [item.img]);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      if (img.complete) {
        setImgLoaded(true);
      }
    }
  }, [item.img]);

  return (
    <article
      ref={ref}
      className={`card-3d group relative overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-sm hover:shadow-md noise flex ${
        active === "Italok" ? "flex-row min-h-[120px]" : "flex-col-reverse sm:flex-row min-h-[180px]"
      } justify-between items-stretch sm:h-[190px] transform transition-all duration-500 ease-out ${
        isVisible ? "animate-card-shine" : ""
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transitionDelay: isVisible ? `${(index % 4) * 0.06}s` : "0s"
      }}
    >
      {/* Left Column (Content) */}
      <div className={`p-4 sm:p-6 flex flex-col justify-between ${
        item.img 
          ? (active === "Italok" ? "w-[75%]" : "w-full sm:w-[60%]") 
          : "w-full"
      } z-10`}>
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className={`font-display uppercase tracking-wide text-foreground ${
              active === "Italok" ? "text-base sm:text-xl" : "text-xl sm:text-3xl"
            }`}>{item.name}</h3>
            {item.tags?.map(t => <Tag key={t} t={t} />)}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md line-clamp-2 sm:line-clamp-none">{item.desc}</p>
        </div>
        <div className="mt-2 sm:mt-4">
          <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 leading-none">{item.price}</div>
        </div>
      </div>

      {/* Right Column (Image block) */}
      {item.img && (
        <div className={`shrink-0 relative overflow-hidden ${
          active === "Italok" 
            ? "w-[25%] bg-transparent" 
            : "w-full h-48 sm:h-auto sm:w-[40%] border-b sm:border-b-0 sm:border-l border-primary/10 bg-white"
        }`}>
          {/* Shimmer skeleton loader */}
          <div 
            className={`absolute inset-0 bg-zinc-100 overflow-hidden transition-opacity duration-300 pointer-events-none z-10 ${
              imgLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Shimmer moving gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer-loading" />
          </div>

          <img
            ref={imgRef}
            src={item.img}
            alt={item.name}
            onLoad={() => setImgLoaded(true)}
            className={`absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-out ${
              active === "Italok" ? "object-contain p-2" : "object-cover"
            }`}
            loading="lazy"
          />
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  );
}

function Menu() {
  const cats = useMemo(() => Object.keys(MENU), []);
  const [active, setActive] = useState(cats[0]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, height: 0, opacity: 0 });

  useEffect(() => {
    const updatePill = () => {
      const activeBtn = tabRefs.current[active];
      if (activeBtn) {
        setPillStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          height: activeBtn.offsetHeight,
          opacity: 1
        });
      }
    };
    updatePill();
    const t = setTimeout(updatePill, 50);
    window.addEventListener("resize", updatePill);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updatePill);
    };
  }, [active]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsToRender = useMemo(() => {
    const allItems = MENU[active];
    if (isMobile) {
      if (!isExpanded) {
        return allItems.slice(0, 2);
      }
    } else {
      if (active === "Italok" && !isExpanded) {
        return allItems.slice(0, 6);
      }
    }
    return allItems;
  }, [active, isExpanded, isMobile]);

  const showButton = useMemo(() => {
    const totalItems = MENU[active].length;
    if (isMobile) {
      return totalItems > 2;
    } else {
      return active === "Italok" && totalItems > 6;
    }
  }, [active, isMobile]);

  const buttonText = useMemo(() => {
    if (isExpanded) {
      return active === "Italok" ? "Kevesebb ital" : "Kevesebb étel";
    } else {
      return active === "Italok" ? "További italok" : "További ételek";
    }
  }, [active, isExpanded]);

  return (
    <section id="menu" className="relative py-20 sm:py-36 scroll-mt-20 sm:scroll-mt-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 pt-4 sm:pt-6">
          <div>
            <div className="text-accent text-[11px] tracking-[0.3em] uppercase mb-3">— Az étlap</div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.15] uppercase">
              Tüz, hús,<br/><span className="text-gradient-ember italic font-serif font-black tracking-wide">ízek.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Minden falatunk mögött 12 órás pácolás és lassú nyársas sütés áll. Válassz kedvedre, mi felépítjük neked.
          </p>
        </div>

        {/* Category switcher */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="pointer-events-none absolute right-4 top-0 bottom-3 w-8 z-20 bg-gradient-to-l from-background to-transparent sm:hidden" />
          <div className="flex overflow-x-auto pb-3 gap-2 mb-10 scrollbar-none snap-x snap-mandatory scroll-smooth relative">
            {/* Sliding active pill background */}
            <div 
              className="absolute bg-primary transition-all duration-300 ease-in-out pointer-events-none shadow-sm z-0"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                height: `${pillStyle.height}px`,
                opacity: pillStyle.opacity,
                borderRadius: "4px 12px 4px 12px"
              }}
            />

            {cats.map(c => (
              <button
                key={c}
                ref={el => { tabRefs.current[c] = el; }}
                onClick={() => {
                  setActive(c);
                  setIsExpanded(false);
                }}
                className={`group relative px-4 py-2.5 sm:px-5 sm:py-3 font-display tracking-[0.12em] uppercase text-xs sm:text-sm transition-colors duration-300 border shrink-0 snap-start z-10 ${
                  active === c
                    ? "border-primary/0 text-white"
                    : "bg-white border-border text-foreground/80 hover:text-primary hover:border-primary/40"
                }`}
                style={{ borderRadius: "4px 12px 4px 12px" }}
              >
                <span className="relative z-10">{c}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {itemsToRender.map((item, i) => (
            <MenuItemCard key={item.name} item={item} index={i} active={active} />
          ))}
        </div>

        {showButton && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => {
                if (isExpanded) {
                  const element = document.getElementById("menu");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  setTimeout(() => {
                    setIsExpanded(false);
                  }, 300);
                } else {
                  setIsExpanded(true);
                }
              }}
              className="btn-menu-expand group"
            >
              <span>{buttonText}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "animate-bounce"}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Tag({ t }: { t: "spicy" | "veg" | "uj" | "nepszeru" | "18+" }) {
  if (t === "spicy") return <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-destructive/15 text-destructive border border-destructive/30"><Flame className="h-3 w-3" /> Csípős</span>;
  if (t === "veg") return <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"><Leaf className="h-3 w-3" /> Vega</span>;
  if (t === "nepszeru") return <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20">Népszerű</span>;
  if (t === "18+") return <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20">18+</span>;
  return <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-accent/15 text-accent border border-accent/40">Új</span>;
}

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-36 scroll-mt-20 sm:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Restaurant interior image */}
          <div 
            className="lg:col-span-7 relative h-[280px] sm:h-[400px] lg:h-[600px] w-full overflow-hidden border border-primary/20 shadow-md group"
            style={{ borderRadius: "6px 24px 6px 24px" }}
          >
            <img 
              src={aboutInterior} 
              alt="Ottoman's belső tér" 
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          <div className="lg:col-span-5 lg:pl-6 self-center">
            <div className="text-accent text-[11px] tracking-[0.3em] uppercase mb-3">— Rólunk</div>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[1.15] mb-6">
              Az utca <span className="text-gradient-ember italic font-serif">tüze.</span><br/>
              A kézművesség <span className="italic font-serif text-primary">lelke.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Az <strong className="text-foreground">Ottoman's</strong>-nál hisszük, hogy a street food nem gyors étel, hanem egy gyors, intenzív élmény. Csapatunk minden egyes tagja odáig van a török ízekért, és ezt az érzést szeretnénk minden vendégünknek átadni.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Naponta gyúrunk friss lavasht, magunk pácoljuk a húst, és kétszer sütjük a hasábot, mert Debrecen prémiumot érdemel.
            </p>

            {/* Stats Row moved from Hero */}
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 mt-8 mb-8">
              <Stat k="11–24" v="Minden nap" />
              <Stat k="100%" v="Friss alapanyag" />
              <Stat k="★ 4.8" v="Google értékelés" />
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-accent text-sm transition-colors">
                <Instagram className="h-4 w-4 text-accent" /> @ottomansdebrecen
              </a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-accent text-sm transition-colors">
                <Facebook className="h-4 w-4 text-accent" /> Ottoman's Debrecen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: heroOriginal, span: "col-span-2 row-span-2" },
    { src: gallery1, span: "" },
    { src: gallery2, span: "" },
    { src: gallery6, span: "col-span-2 row-span-2" },
    { src: gallery3, span: "" },
    { src: gallery4, span: "" },
  ];
  return (
    <section id="gallery" className="relative py-20 sm:py-36 scroll-mt-20 sm:scroll-mt-28 hidden md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="font-display text-3xl sm:text-6xl uppercase leading-[1.15]">
              A galéria<br/><span className="text-gradient-ember italic font-serif">— csak nézd.</span>
            </h2>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent group">
            <Instagram className="h-5 w-5" />
            <span className="font-display tracking-widest text-sm">Több az Instagramon</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {imgs.map((g, i) => (
            <figure key={i} className={`relative overflow-hidden ring-1 ring-border group ${g.span}`} style={{ borderRadius: "6px 24px 6px 24px" }}>
              {g.src ? (
                <>
                  <img src={g.src} alt="Ottoman's" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 border-2 border-dashed border-zinc-200/80 text-zinc-400 p-4">
                  <Camera className="h-5 w-5 mb-1.5 text-zinc-300" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold font-display">Hamarosan...</span>
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Marci Hollár",
    text: "Debrecenen belül a legjobb döneres. Mindig friss jó minőségű húsok és zöldséges és kiváló adagok.\nNagyon kedves kiszolgálás.\nMindenkinek csak ajánlani tudom.",
    date: "4 hónapja",
    stars: 5
  },
  {
    name: "Kristóf Kalcsits",
    text: "Többször voltunk már.\nBőséges adagok, prémium alapanyagok, lenyűgöző, isteni finom ízek.\nA legjobb a városban, de valószínűleg még az országban is! Ilyet eddig csak külföldön ettünk.\nA személyzet nagyon szimpatikus és patika tisztaság van mindig.",
    date: "egy éve",
    stars: 5
  },
  {
    name: "Balczó Róbert",
    text: "Hujujuj! Leírták már előttem: végre! Mert lehet jó egy görög gyors, egy körúti 6 dekás is sokszor megfelel, de a német/török dürüm, döner a legjobb. És Debrecen eddig ebben nem járt az élen, de most itt van Ottoman. Semmi extra, bejössz, kikéred, bejön. Bármikor. Jók a fűszerek, határozott ízvilág, nem kell tüzet lélegezni még akkor sem ha csípős, a fries közepe olvad, a külseje roppan. A srácok jó fejek, tiszta és rendezett! Jó, hogy jöttetek!",
    date: "egy éve",
    stars: 5
  },
  {
    name: "Barbara Mitro",
    text: "Nagyon finom ételeket készítenek itt, mind a zöldségek, mind a húsok mindig frissek. Ajánlom!",
    date: "3 hónapja",
    stars: 5
  },
  {
    name: "misu1644",
    text: "Nekem ez újnak számít amit ők nyújtanak és eléggé finom! Kedvenc gyorséttermi ételem a gyros és ez megfelel az összes elvárásomnak. Egyedül az étterem nagyságával van gond, amiatt csak 4 csillagot tudok adni de egyébként ezt leszámítva 5.\nElvitelre is rendeltem már, úgy 5/5 csillag.",
    date: "8 hónapja",
    stars: 4
  },
  {
    name: "Gábor Zsolnai",
    text: "Szuper minden finom volt végre van egy hely ahol gondoltak a kicsi gyerekre aki nem eszi még meg a dönert és van náluk gyerek menü ezért gratulálok nekik",
    date: "5 hónapja",
    stars: 5
  },
  {
    name: "Emese Hegyközi",
    text: "Kedves Ottoman,\nKöszönjük a finom és különleges ételeket!🤩\n☝🏻Az biztos, hogy ilyen nincs még egy Debrecenben🌯 🍟",
    date: "egy éve",
    stars: 5
  },
  {
    name: "Tibor Alt",
    text: "Ez egy jó hely, a dönerük jó és az asztalokat folyamatosan takarítják. Talán a fokhagymás öntet ami a pita alján összegyűlt egy kicsit tömény volt, de ezzel együtt is jó volt.",
    date: "3 hónapja",
    stars: 5
  },
  {
    name: "Lövész Péter",
    text: "Nagyon finom, nekem sok volt. Én még extra szószt is kértem, annyira finom volt 😊 A kiszolgálók is nagyon kedvesek, megérdemlik az 5-öst",
    date: "7 hónapja",
    stars: 5
  },
  {
    name: "dav",
    text: "Kedves és gyors kiszolgálás még zárás előtt is, egészen jó árban finom étel.",
    date: "4 hónapja",
    stars: 5
  },
  {
    name: "László Kaszás",
    text: "Elégedett voltam az Döner boxxal, a marhahús megfelelő ízű volt, a csirkeset legközelebb kóstolom meg.\nA curry wurstot kíváncsian várom.",
    date: "egy éve",
    stars: 5
  },
  {
    name: "Attila Nagy",
    text: "Ritkán eszünk egy utazásunk során kétszer ugyan azon a helyen. Ide viszont visszatértünk mert nagyon jót ettünk az első alkalommal és másodszorra is.\nKöszönjük!",
    date: "9 hónapja",
    stars: 5
  },
  {
    name: "Attila Tanka",
    text: "Nagyon finom volt az étel és jó volt a kiszolgálás😊 😊 A szósz választék BRUTÁLIS🤩 🤩 🤪",
    date: "egy éve",
    stars: 5
  },
  {
    name: "Nagy Kata",
    text: "Nagyon jó volt az étel és a hely hangulata szép nagy adag van én csak ajánlani tudom!",
    date: "4 hónapja",
    stars: 5
  },
  {
    name: "József Gyuricza",
    text: "Gyors, finom, jó nagy adag, nem bírtam megenni.",
    date: "egy hónapja",
    stars: 5
  }
];

function ReviewCard({ rev, index, compact }: { rev: typeof REVIEWS[0]; index: number; compact?: boolean }) {
  const initials = rev.name.split(" ").map(n => n[0]).join("").toUpperCase();
  const isEven = index % 2 === 0;
  const avatarBg = isEven ? "bg-orange-50 text-primary" : "bg-zinc-100 text-zinc-700";

  return (
    <div className={`bg-white border border-border/80 shadow-sm rounded-xl p-4 flex flex-col gap-2.5 ${compact ? "mx-1" : "mx-4"} hover:shadow-md transition-shadow duration-300`}>
      <div className="flex items-center gap-3">
        <div className={`h-8 w-8 rounded-full ${avatarBg} flex items-center justify-center text-xs font-bold shrink-0`}>
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-zinc-800 truncate">{rev.name}</div>
          <div className="flex items-center gap-1 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${
                  i < rev.stars 
                    ? "fill-amber-400 text-amber-400" 
                    : "text-zinc-200 fill-zinc-100"
                }`} 
              />
            ))}
            <span className="text-[10px] text-zinc-400 ml-1.5">{rev.date}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-semibold shrink-0">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
          <span>Google</span>
        </div>
      </div>
      <p className="text-xs text-zinc-600 italic leading-relaxed whitespace-pre-line line-clamp-3 lg:line-clamp-none">
        &ldquo;{rev.text}&rdquo;
      </p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-36 scroll-mt-20 sm:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="min-w-0 w-full">
            <div className="text-accent text-[11px] tracking-[0.3em] uppercase mb-3">— Kapcsolat</div>
            <h2 className="font-display text-3xl sm:text-6xl uppercase leading-[1.15] mb-6">
              Találkozzunk<br/><span className="text-gradient-ember italic font-serif">Debrecenben.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Ülj be hozzánk egy friss dürümre, vagy rendelj online — bármerre is jársz a városban.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <InfoCard
                icon={<Clock className="h-5 w-5"/>}
                title="Nyitvatartás"
                lines={["Vas–Csüt: 11:00 – 24:00", "Pén–Szom: 11:00 – 24:00"]}
              />
              <InfoCard
                icon={<MapPin className="h-5 w-5"/>}
                title="Cím"
                lines={["Debrecen, Magyarország", "Részletek a térképen"]}
                link={MAPS}
                linkLabel="Útvonal →"
              />
              <InfoCard
                icon={<Phone className="h-5 w-5"/>}
                title="Telefon"
                lines={["+36 30 642 0420"]}
                link={`tel:${PHONE}`}
                linkLabel="Hívás most →"
              />
              <InfoCard
                icon={<UtensilsCrossed className="h-5 w-5"/>}
                title="Rendelés"
                lines={["Foodora · Wolt"]}
                links={[
                  { href: "https://www.foodora.hu/restaurant/nsae/ottomans-doner-fries-and-wurst", label: "Foodora" },
                  { href: "https://wolt.com/hu/hun/debrecen/restaurant/ottomans-doner-fries-curry-wurst?srsltid=AfmBOoosxBtXw-WjHW4-iztS-W-wYR8NR1_BalCft-E0orCwNqLiUbnr", label: "Wolt" }
                ]}
              />
            </div>
          </div>

          <div className="relative w-full h-[180px] sm:h-[200px] lg:h-auto mt-6 lg:mt-0 min-w-0 overflow-hidden">
            <div 
              className="lg:absolute lg:inset-0 w-full h-full relative overflow-hidden border border-primary/30 bg-zinc-50 flex items-center lg:block" 
              style={{ borderRadius: "6px 24px 6px 24px" }}
            >
              {/* Desktop vertical overlays */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 z-10 bg-gradient-to-b from-zinc-50 to-transparent hidden lg:block" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 z-10 bg-gradient-to-t from-zinc-50 to-transparent hidden lg:block" />

              {/* Mobile horizontal overlays */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-zinc-50 to-transparent lg:hidden" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-zinc-50 to-transparent lg:hidden" />

              {/* Horizontal scrolling marquee for Mobile */}
              <div 
                className="flex flex-row w-max animate-marquee-slow items-center gap-3 py-4 lg:hidden"
                style={{ willChange: "transform" }}
              >
                {REVIEWS.map((rev, idx) => (
                  <div key={`rm1-${idx}`} className="shrink-0 w-[270px] sm:w-[310px] whitespace-normal">
                    <ReviewCard rev={rev} index={idx} compact={true} />
                  </div>
                ))}
                {REVIEWS.map((rev, idx) => (
                  <div key={`rm2-${idx}`} className="shrink-0 w-[270px] sm:w-[310px] whitespace-normal">
                    <ReviewCard rev={rev} index={idx} compact={true} />
                  </div>
                ))}
              </div>

              {/* Vertical scrolling marquee for Desktop */}
              <div 
                className="hidden lg:flex flex-col animate-marquee-vertical"
                style={{ willChange: "transform" }}
              >
                {REVIEWS.map((rev, idx) => (
                  <div key={`rv1-${idx}`} className="pb-6">
                    <ReviewCard rev={rev} index={idx} />
                  </div>
                ))}
                {REVIEWS.map((rev, idx) => (
                  <div key={`rv2-${idx}`} className="pb-6">
                    <ReviewCard rev={rev} index={idx} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social icons below the grid */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
            className="h-14 w-14 inline-flex items-center justify-center rounded-full border border-border bg-white text-foreground hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transform transition-all duration-300 shadow-sm"
          >
            <Facebook className="h-6 w-6"/>
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="h-14 w-14 inline-flex items-center justify-center rounded-full border border-border bg-white text-foreground hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transform transition-all duration-300 shadow-sm"
          >
            <Instagram className="h-6 w-6"/>
          </a>
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="h-14 w-14 inline-flex items-center justify-center rounded-full border border-border bg-white text-foreground hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transform transition-all duration-300 shadow-sm"
          >
            <Star className="h-6 w-6"/>
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, lines, accent, link, linkLabel, links }: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  accent?: string;
  link?: string;
  linkLabel?: string;
  links?: { href: string; label: string }[];
}) {
  return (
    <div className="relative p-3 sm:p-5 bg-primary text-white border border-primary/20 hover:shadow-lg transition-all group"
         style={{ borderRadius: "6px 24px 6px 24px" }}>
      <div className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3">
        <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-white/20 text-white inline-flex items-center justify-center shrink-0">{icon}</span>
        <h3 className="font-display tracking-widest uppercase text-xs sm:text-sm text-white truncate">{title}</h3>
        {accent && <span className="ml-auto text-[9px] sm:text-[10px] uppercase tracking-widest text-emerald-100 bg-emerald-500/30 px-1.5 sm:px-2 py-0.5 rounded-full">{accent}</span>}
      </div>
      <div className="text-xs sm:text-sm text-white/95 space-y-0.5 font-medium leading-snug">
        {lines.map(l => <div key={l}>{l}</div>)}
      </div>
      {links ? (
        <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          {links.map((lnk, idx) => (
            <a
              key={idx}
              href={lnk.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-white text-primary hover:bg-white/90 font-bold text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest transition-colors shrink-0"
              style={{ borderRadius: "4px 10px 4px 10px" }}
            >
              {lnk.label}
            </a>
          ))}
        </div>
      ) : link && (
        <a href={link} target="_blank" rel="noreferrer" className="mt-2.5 sm:mt-3 inline-flex items-center text-white hover:text-white/80 font-semibold text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest group-hover:translate-x-0.5 transition-transform">
          {linkLabel}
        </a>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-lg overflow-hidden ring-1 ring-accent/40 bg-white">
            <img src={headerLogo} alt="Ottoman's" className="h-full w-full object-contain mix-blend-multiply p-0.5" />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="font-display tracking-wider text-foreground">OTTOMAN'S</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Döner · Fries · Wurst · Debrecen</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ottoman's Debrecen. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}

function OrderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-xs sm:max-w-sm bg-white border border-primary/20 shadow-2xl p-6 overflow-hidden z-10 flex flex-col items-center text-center animate-reveal"
        style={{ borderRadius: "6px 24px 6px 24px" }}
      >
        {/* Slanted checkerboard strip at the top */}
        <div className="absolute top-0 inset-x-0 h-2 bg-slanted-checkerboard" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Bezárás"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 shrink-0 animate-bounce">
          <ShoppingBag className="h-6 w-6" />
        </div>
        
        <h3 className="font-syne text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-foreground mb-1.5">Rendeld meg a kedvenceid</h3>
        <p className="text-xs text-muted-foreground mb-6 max-w-[240px]">
          Válassz az alábbi házhozszállítási partnereink közül a rendelés leadásához:
        </p>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3">
          {/* Foodora */}
          <a
            href="https://www.foodora.hu/restaurant/nsae/ottomans-doner-fries-and-wurst"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-5 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg active:scale-95 shadow-sm"
            style={{ 
              backgroundColor: "#D70F64", 
              borderRadius: "6px 24px 6px 24px" 
            }}
          >
            <span>Foodora</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Wolt */}
          <a
            href="https://wolt.com/hu/hun/debrecen/restaurant/ottomans-doner-fries-curry-wurst?srsltid=AfmBOoosxBtXw-WjHW4-iztS-W-wYR8NR1_BalCft-E0orCwNqLiUbnr"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-5 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg active:scale-95 shadow-sm"
            style={{ 
              backgroundColor: "#00C2E8", 
              borderRadius: "6px 24px 6px 24px" 
            }}
          >
            <span>Wolt</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button 
          onClick={onClose}
          className="mt-5 text-[11px] uppercase tracking-widest text-zinc-600 hover:text-zinc-900 font-bold transition-colors"
        >
          Bezárás
        </button>
      </div>
    </div>
  );
}
