import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  Menu,
  X,
  Phone,
  Search,
  Mic2,
  MapPin,
  ExternalLink,
  ChevronDown,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Scale,
  Landmark,
  Shield,
  Radio,
  Play,
  MessageCircle,
} from "lucide-react";
import { CASES_DATA, FAQS, MEDIA, PRACTICE_AREAS, PROFILE } from "./data";

const NAV = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Chamber" },
  { href: "#practice", label: "Practice" },
  { href: "#cases", label: "Matters" },
  { href: "#media", label: "Media" },
  { href: "#contact", label: "Contact" },
];

const YEARS = new Date().getFullYear() - PROFILE.since;

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedCase, setSelectedCase] = useState<(typeof CASES_DATA)[number] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [playing, setPlaying] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Criminal Trial Defence",
    court: "Pune Sessions Court",
    note: "",
  });
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cases = useMemo(() => {
    return CASES_DATA.filter((item) => {
      const byFilter = filter === "all" || item.category === filter;
      const q = query.toLowerCase();
      const bySearch = item.title.toLowerCase().includes(q) || item.act.toLowerCase().includes(q);
      return byFilter && bySearch;
    });
  }, [query, filter]);

  const featured = MEDIA.find((m) => m.featured)!;

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "—"}`,
      `Matter: ${form.category}`,
      `Court: ${form.court}`,
      "",
      form.note || "(no note)",
      "",
      "Sent from the chamber website. Non-confidential enquiry only.",
    ].join("\n");
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Chamber consultation — " + form.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all ${
          scrolled ? "bg-ink/95 shadow-lg shadow-ink/20 backdrop-blur-md" : "bg-ink"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#hero" className="min-w-0">
            <span className="block truncate font-display text-[11px] tracking-[0.22em] text-gold uppercase">
              Parulekar &amp; Associates
            </span>
            <span className="block truncate font-serif text-lg text-cream leading-tight md:text-xl">
              Adv. Shubhangi Parulekar
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a href={PROFILE.phoneHref} className="btn-gold !min-h-10 !px-4 !py-2">
              <Phone size={14} /> Call
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a href={PROFILE.phoneHref} className="btn-gold !min-h-10 !px-3 !py-2">
              <Phone size={14} />
            </a>
            <button
              className="rounded-sm border border-white/15 p-2 text-cream"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-3 text-cream"
              >
                {item.label}
              </a>
            ))}
            <a href={PROFILE.whatsapp} className="btn-gold mt-4 w-full">
              WhatsApp the chamber
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden bg-ink pt-24 text-cream">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(198,164,106,0.18),transparent_42%),radial-gradient(circle_at_10%_80%,rgba(123,36,51,0.25),transparent_40%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20">
            <motion.div {...fade()}>
              <p className="eyebrow">Criminal defence · Maharashtra · Since {PROFILE.since}</p>
              <h1 className="mt-4 font-serif text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.08] text-cream">
                Clarity in the courtroom.
                <span className="block italic text-goldSoft">Defence that is prepared.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
                Adv. Shubhangi Prasad Parulekar leads criminal trial and appellate work at {PROFILE.firm} — appearing before District &amp; Sessions Courts at Pune, Khed and Baramati, and on the Appellate Side of the Bombay High Court.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-gold">
                  Request consultation
                </a>
                <a href={PROFILE.phoneHref} className="btn-ghost !border-white/20 !bg-transparent !text-cream hover:!border-gold">
                  <Phone size={16} /> +91 {PROFILE.phone}
                </a>
                <a href="#media" className="inline-flex items-center gap-2 py-3 text-sm font-medium text-gold hover:underline">
                  <Play size={16} /> Watch the POCSO podcast
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  [`${YEARS}+`, "Years in practice"],
                  ["BHC", "Appellate Side"],
                  ["Special Acts", "POCSO · MCOCA · NDPS"],
                  ["Legal aid", "Prison & High Court panels"],
                ].map(([k, v]) => (
                  <div key={k} className="border border-white/10 bg-white/5 p-3">
                    <div className="font-serif text-xl text-gold">{k}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-cream/55">{v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative mx-auto w-full max-w-md" {...fade(0.12)}>
              <div className="portrait-frame relative overflow-hidden rounded-sm bg-navy">
                <img
                  src="/portrait.png"
                  alt="Advocate Shubhangi Prasad Parulekar"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/50 to-transparent p-5">
                  <p className="font-display text-[10px] tracking-[0.28em] text-gold uppercase">Defence counsel</p>
                  <p className="font-serif text-2xl">Shubhangi Prasad Parulekar</p>
                  <p className="text-sm text-cream/70">Pune · Bombay High Court</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-cream/70">
                <a href={PROFILE.instagram} className="hover:text-gold" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href={PROFILE.linkedin} className="hover:text-gold" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href={featured.href} className="hover:text-gold" aria-label="YouTube podcast">
                  <Youtube size={18} />
                </a>
                <a href={`mailto:${PROFILE.email}`} className="hover:text-gold" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-3">
            {[
              { icon: Landmark, t: "Trial courts", d: "Pune, Khed & Baramati Sessions" },
              { icon: Scale, t: "Appellate side", d: "Bombay High Court since 2008" },
              { icon: Shield, t: "Special statutes", d: "POCSO · MCOCA · NDPS · MPID" },
            ].map((item) => (
              <div key={item.t} className="flex items-start gap-3">
                <item.icon className="mt-0.5 text-wine" size={22} />
                <div>
                  <p className="font-serif text-xl">{item.t}</p>
                  <p className="text-sm text-muted">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <motion.div {...fade()}>
            <p className="eyebrow">The chamber</p>
            <h2 className="mt-2 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-tight">
              Built in criminal courts — not on slogans.
            </h2>
            <p className="mt-4 max-w-3xl text-muted">
              Since 2008 she has conducted criminal trials and High Court appellate work as defence counsel. {PROFILE.firm} is a Pune chamber handling serious criminal litigation, with allied work in civil, family and intellectual-property matters, and appearances before the High Courts at Bombay and Goa and the Supreme Court of India.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              {
                kicker: "2008 — Present · Trials",
                title: "District & Sessions Courts",
                body: "Continuous criminal defence at Pune, Khed and Baramati — including body offences, sexual-offence prosecutions, and special-act trials.",
              },
              {
                kicker: "2008 — Present · Appeals",
                title: "Bombay High Court, Appellate Side",
                body: "Criminal appeals, bail, revisions and writs. High-stakes listings, including organised-crime and homicide matters, are argued as defence counsel.",
              },
              {
                kicker: "Special Acts",
                title: "POCSO, MCOCA, NDPS, economic crime",
                body: "Designated-court practice under special criminal statutes, with a public voice on POCSO procedure through podcasts and the press.",
              },
              {
                kicker: "Public duty",
                title: "Legal aid, prison panel, amicus",
                body: "Panel Advocate, Pune District Legal Aid Committee; MSLSA panel at the Bombay High Court; Yerawada Central Prison panel; amicus curiae in Sessions trials at Pune.",
              },
            ].map((block, i) => (
              <motion.article key={block.title} className="card border-l-4 border-l-wine p-5 md:p-6" {...fade(i * 0.05)}>
                <p className="text-[11px] font-semibold tracking-[0.2em] text-wine uppercase">{block.kicker}</p>
                <h3 className="mt-1 font-serif text-2xl">{block.title}</h3>
                <p className="mt-2 text-muted">{block.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="practice" className="border-y border-line bg-paper py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <p className="eyebrow">Focus</p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.4rem)]">Practice areas</h2>
            <p className="mt-2 max-w-2xl text-muted">Each brief is assessed on the record, the statute, and what the court can actually be asked to do.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {PRACTICE_AREAS.map((area) => (
                <article key={area.id} className="card p-5 transition hover:border-gold">
                  <span className="font-display text-xs text-wine">{area.id}</span>
                  <h3 className="mt-1 font-serif text-xl">{area.title}</h3>
                  <p className="mt-1 text-sm text-muted">{area.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <p className="eyebrow">Court record</p>
          <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.4rem)]">Selected acquittals</h2>
          <div className="mt-4 border-l-4 border-wine bg-wine/5 p-4 text-sm">
            <strong className="text-wine">Disclaimer.</strong> Past outcomes depend on the facts, evidence and law of each matter. They do not guarantee a similar result later.
          </div>

          <div className="relative mt-6">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by party or statute — 302, POCSO, MCOCA…"
              className="input pr-10"
            />
            <Search size={18} className="pointer-events-none absolute right-3 top-3 text-muted" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ["all", "All (10)"],
              ["ipc", "IPC"],
              ["pocso", "POCSO"],
              ["mcoc", "MCOCA"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setFilter(id)}
                className={`rounded-sm border px-3 py-1.5 text-sm font-semibold ${
                  filter === id ? "border-wine bg-wine text-white" : "border-line bg-paper hover:border-gold"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-5 space-y-2.5">
            {cases.map((item) => (
              <article key={item.id} className="card flex flex-wrap items-start justify-between gap-3 p-4">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-sm bg-cream px-2 py-0.5 text-[11px] font-bold tracking-wider text-gold uppercase">
                      Case {item.id}
                    </span>
                    <span className="rounded-sm bg-wine/10 px-2 py-0.5 text-[11px] font-semibold text-wine">{item.act}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-xl">{item.title}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-sm border border-emerald-200 bg-emerald-50 px-2 py-1 text-sm font-bold text-emerald-900">
                    Acquittal
                  </span>
                  <button className="text-sm font-semibold text-wine hover:underline" onClick={() => setSelectedCase(item)}>
                    Record →
                  </button>
                </div>
              </article>
            ))}
            {cases.length === 0 && <p className="card p-8 text-center text-muted">No matching record.</p>}
          </div>
        </section>

        <section id="media" className="border-y border-line bg-ink py-16 text-cream md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <p className="eyebrow">In public</p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.4rem)]">Podcasts, press &amp; lectures</h2>
            <p className="mt-2 max-w-2xl text-cream/65">
              Legal literacy in Marathi and English — on trial courts, POCSO, senior-citizen law, and workplace POSH.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="overflow-hidden rounded-sm border border-white/10 bg-navy">
                {playing ? (
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${featured.id}?autoplay=1`}
                      title={featured.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <button className="group relative block w-full text-left" onClick={() => setPlaying(true)}>
                    <img
                      src={`https://i.ytimg.com/vi/${featured.id}/hqdefault.jpg`}
                      alt=""
                      className="aspect-video w-full object-cover opacity-90 transition group-hover:opacity-100"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/25">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-wine text-white shadow-xl">
                        <Play size={28} fill="currentColor" />
                      </span>
                    </span>
                  </button>
                )}
                <div className="p-5">
                  <p className="text-[11px] tracking-[0.2em] text-gold uppercase">{featured.outlet}</p>
                  <h3 className="mt-1 font-serif text-2xl">{featured.title}</h3>
                  <p className="mt-2 text-sm text-cream/70">{featured.blurb}</p>
                  <a href={featured.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-gold hover:underline">
                    Open on YouTube <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                {MEDIA.filter((m) => !m.featured).map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block border border-white/10 bg-white/5 p-4 transition hover:border-gold/50"
                  >
                    <div className="flex items-start gap-3">
                      {item.kind === "youtube" ? <Youtube className="text-gold" size={18} /> : item.kind === "radio" ? <Radio className="text-gold" size={18} /> : <Mic2 className="text-gold" size={18} />}
                      <div>
                        <p className="text-[11px] tracking-wider text-gold/80 uppercase">{item.outlet}</p>
                        <h3 className="font-serif text-lg leading-snug">{item.title}</h3>
                        <p className="mt-1 text-sm text-cream/60">{item.blurb}</p>
                      </div>
                    </div>
                  </a>
                ))}
                <a
                  href={PROFILE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-gold/30 bg-gold/10 p-4"
                >
                  <span className="inline-flex items-center gap-2 font-medium">
                    <Instagram size={18} /> Instagram @spparulekar
                  </span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <p className="eyebrow">Before you write</p>
          <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.2rem)]">Frequently asked</h2>
          <div className="mt-8 divide-y divide-line border border-line bg-paper">
            {FAQS.map((item, i) => (
              <div key={item.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-serif text-lg">{item.q}</span>
                  <ChevronDown size={18} className={`shrink-0 transition ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <p className="px-5 pb-4 text-sm text-muted">{item.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-paper py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <p className="eyebrow">Chamber</p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.4rem)]">Discuss the matter</h2>
            <p className="mt-3 max-w-2xl rounded-sm border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950">
              Do not send FIRs, medical records or other confidential papers through this form. Call or visit chamber for those.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-5">
              <aside className="card p-6 lg:col-span-2">
                <h3 className="font-display text-xs tracking-[0.22em] text-wine uppercase">Office</h3>
                <p className="mt-3 font-serif text-2xl">{PROFILE.name}</p>
                <p className="text-sm text-muted">{PROFILE.firm}</p>
                <div className="mt-5 space-y-4 text-sm">
                  <p className="flex gap-2">
                    <MapPin size={16} className="mt-0.5 text-wine" />
                    <span>
                      {PROFILE.addressLines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </span>
                  </p>
                  <p>
                    <a href={PROFILE.phoneHref} className="font-semibold text-wine hover:underline">
                      +91 {PROFILE.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${PROFILE.email}`} className="font-semibold text-wine hover:underline">
                      {PROFILE.email}
                    </a>
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a href={PROFILE.phoneHref} className="btn-primary">
                    <Phone size={16} /> Call chamber
                  </a>
                  <a href={PROFILE.whatsapp} className="btn-ghost">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a href={PROFILE.maps} target="_blank" rel="noreferrer" className="btn-ghost">
                    Directions <ExternalLink size={12} />
                  </a>
                </div>
                <div className="mt-6 flex gap-4 text-muted">
                  <a href={PROFILE.instagram} aria-label="Instagram" className="hover:text-wine">
                    <Instagram size={18} />
                  </a>
                  <a href={PROFILE.linkedin} aria-label="LinkedIn" className="hover:text-wine">
                    <Linkedin size={18} />
                  </a>
                  <a href={featured.href} aria-label="YouTube" className="hover:text-wine">
                    <Youtube size={18} />
                  </a>
                </div>
              </aside>

              <div className="card p-6 lg:col-span-3">
                <h3 className="font-serif text-2xl">Consultation request</h3>
                <form className="mt-4 space-y-3" onSubmit={submitForm}>
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold tracking-wider uppercase">Full name *</label>
                    <input required className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold tracking-wider uppercase">Phone *</label>
                    <input required type="tel" className="input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold tracking-wider uppercase">Email</label>
                    <input type="email" className="input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold tracking-wider uppercase">Matter</label>
                      <select className="input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                        {["Criminal Trial Defence", "Bail / Anticipatory Bail", "POCSO", "MCOCA", "NDPS", "High Court Appeal", "POSH / Advisory"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold tracking-wider uppercase">Court</label>
                      <select className="input" value={form.court} onChange={(e) => setForm({ ...form, court: e.target.value })}>
                        {["Pune Sessions Court", "Khed Court", "Baramati Court", "Bombay High Court", "Other"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold tracking-wider uppercase">Brief, non-confidential note</label>
                    <textarea rows={3} className="input" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
                  </div>
                  <button className="btn-primary w-full" type="submit">
                    Open email to chamber
                  </button>
                </form>
                {sent && (
                  <p className="mt-3 rounded-sm border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-950">
                    Your mail client should open with the enquiry. For listings or bail today, call +91 {PROFILE.phone}.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="disclaimer" className="mx-auto max-w-7xl px-4 py-10 pb-24 md:pb-10">
          <div className="border border-line bg-white/70 p-5 text-sm leading-relaxed text-muted">
            <h4 className="mb-2 font-display text-[11px] tracking-[0.2em] text-wine uppercase">Statutory disclaimer</h4>
            <p>
              As per the Bar Council of India, advocates are prohibited from soliciting work or advertising. Information here is for the visitor who has chosen to view this profile. It is not legal advice. Transmission or use of this site does not create an advocate–client relationship. Prior acquittals do not predict future results.
            </p>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <a href={PROFILE.phoneHref} className="flex items-center justify-center gap-2 bg-ink py-3.5 font-semibold tracking-wider text-white uppercase">
          <Phone size={16} /> Call
        </a>
        <a href={PROFILE.whatsapp} className="flex items-center justify-center gap-2 bg-wine py-3.5 font-semibold tracking-wider text-white uppercase">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>

      <footer className="bg-ink pb-8 pt-10 text-cream">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:flex-row">
          <div>
            <p className="font-display text-[11px] tracking-[0.22em] text-gold uppercase">{PROFILE.firm}</p>
            <p className="font-serif text-2xl">{PROFILE.name}</p>
            <p className="mt-1 text-sm text-cream/55">Criminal defence · Practising since {PROFILE.since}</p>
          </div>
          <div className="text-sm text-cream/70 sm:text-right">
            {PROFILE.addressLines.map((l) => (
              <div key={l}>{l}</div>
            ))}
            <div className="mt-1">
              <a href={PROFILE.phoneHref} className="text-gold hover:underline">
                +91 {PROFILE.phone}
              </a>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl px-4 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} {PROFILE.name}. Informational profile of a practising advocate in Maharashtra.
        </p>
      </footer>

      {selectedCase && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 p-4" onClick={() => setSelectedCase(null)}>
          <div className="card relative max-w-lg p-6" onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-3 top-3 p-1 text-muted" onClick={() => setSelectedCase(null)} aria-label="Close">
              <X size={18} />
            </button>
            <p className="text-[11px] font-bold tracking-wider text-wine uppercase">Record {selectedCase.id}</p>
            <h3 className="mt-1 pr-6 font-serif text-2xl">{selectedCase.title}</h3>
            <dl className="mt-4 space-y-2 border-y border-line py-3 text-sm">
              <div>
                <dt className="text-muted">Statute</dt>
                <dd className="font-semibold text-wine">{selectedCase.act}</dd>
              </div>
              <div>
                <dt className="text-muted">Result</dt>
                <dd className="font-bold text-emerald-800">Acquittal</dd>
              </div>
              <div>
                <dt className="text-muted">Counsel</dt>
                <dd>{PROFILE.name}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs italic text-muted">Further papers may be inspected only in chamber, subject to privacy and court rules.</p>
          </div>
        </div>
      )}
    </div>
  );
}
