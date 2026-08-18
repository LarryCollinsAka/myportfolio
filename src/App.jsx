import React, { useState, useEffect, useRef } from "react";
const heroImg = "/photo.jpg";
import {
  Moon,
  Sun,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Leaf,
  Globe,
  BarChart3,
  Recycle,
  Layers,
  Zap,
  Users,
  GraduationCap,
  Code2,
  Cpu,
  Database,
  Palette,
  Briefcase,
  Calendar,
  ExternalLink,
  Check,
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

// Custom WhatsApp Icon - lightweight SVG to avoid extra deps
const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2a9.82 9.82 0 0 0-8.5 14.86L2 22l5.3-1.39a9.82 9.82 0 0 0 4.74 1.21h.01a9.82 9.82 0 0 0 6.9-2.82 9.82 9.82 0 0 0 0-13.89Zm-7.01 15.2a8.18 8.18 0 0 1-4.18-1.14l-.3-.18-3.15.82.84-3.07-.2-.31a8.18 8.18 0 0 1-1.27-4.4 8.2 8.2 0 0 1 13.89-5.84 8.2 8.2 0 0 1-5.93 13.12Zm4.58-6.14c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.12-.16.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.57-1.38-.79-1.89-.2-.49-.42-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.3 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.14-1.19-.06-.1-.23-.16-.48-.29Z"/>
  </svg>
);

export default function App() {
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", org: "", interest: "", message: "" });
  const [activeId, setActiveId] = useState<string>("home");

  const WHATSAPP_NUMBER = "237621607297";

  const openDirectWhatsApp = () => {
    const preset = "Hello Larry-Collins, I saw your portfolio and would like to connect.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(preset)}`;
    window.open(url, "_blank");
  };

  const handleWhatsAppSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast("Please fill name, email and message");
      return;
    }
    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showToast("Please enter a valid email");
      return;
    }

    const lines = [
      "Hello Larry-Collins,",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
    ];
    if (form.org.trim()) lines.push(`Organization: ${form.org.trim()}`);
    if (form.interest.trim()) lines.push(`Interest: ${form.interest.trim()}`);
    lines.push(`Message: ${form.message.trim()}`);
    lines.push("---");
    lines.push("Sent from your portfolio website");

    const fullMessage = lines.join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, "_blank");
    showToast("Opening WhatsApp...");
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // smooth scroll
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      try { history.replaceState(null, "", `#${id}`); } catch {}
      // visual feedback for validator: briefly highlight target
      el.classList.add("ring-2","ring-[#d67a3e]/40");
      setTimeout(() => el.classList.remove("ring-2","ring-[#d67a3e]/40"), 800);
    }
    setMobileMenu(false);
  };

  // fade in observer
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Sustainability", id: "sustainability" },
    { label: "Contact", id: "contact" },
  ];

  const experiences = [
    {
      role: "Lead Software Engineer",
      org: "Fortune Techies, Yaoundé",
      time: "Since June 2024",
      current: true,
      points: [
        "Python 2 → 3.8 migration across legacy services",
        "Architected top-notch web apps with Laravel, PHP/JS for outsourcing clients",
        "Designed test plans cutting redundancy by 40%",
        "Desktop automation tool boosting ops efficiency by 65%",
        "Reusable component system reducing dev effort by 50%",
      ],
      stats: [{ k: "65%", v: "efficiency gain" }, { k: "-50%", v: "dev effort" }],
      color: "#0f2e1f",
    },
    {
      role: "Business Consultant and Analyst",
      org: "MCA - Cameroon, Bastos",
      time: "Aug 2024 – Feb 2026",
      current: false,
      highlight: "KEY PROJECT: Millennium Challenge Account - Cameroon Website",
      points: [
        "Requirements gathering & stakeholder engagement across ministries",
        "In-house hosting strategy for data sovereignty",
        "Networking & infrastructure setup for on-prem reliability",
        "Process optimization & risk / sustainability considerations",
        "Outcome: improved reliability, data sovereignty, operational independence",
      ],
      stats: [{ k: "100%", v: "data sovereignty" }],
      color: "#d67a3e",
    },
    {
      role: "Software Developer",
      org: "GEO EXPERTS ET ASSOCIÉS",
      time: "Oct 2022 – Feb 2024",
      points: [
        "Reporting accuracy +4% via validation layer",
        "Config API saved 25% setup time",
        "Resource optimization –20% turnaround",
        "Restful API geolocation with Google Maps",
        "RCA for 10+ production issues",
      ],
      stats: [{ k: "+4%", v: "accuracy" }, { k: "-25%", v: "setup time" }],
      color: "#c9a86a",
    },
    {
      role: "Web Development Trainer",
      org: "Mountain Tech Academy, Buea",
      time: "Nov 2022 – Sep 2024",
      points: ["HTML, CSS, JS, Laravel, Next.js, Flutter curriculum & mentorship"],
      color: "#0f2e1f",
    },
    {
      role: "Software Developer",
      org: "IBMGIM",
      time: "Jan 2023 – Mar 2023",
      points: ["MTN MoMo & Orange Money gateway integration", "Mentored 3 junior devs in React"],
      color: "#d67a3e",
    },
    {
      role: "Full Stack Developer",
      org: "e-pocrate, Remote France",
      time: "Aug 2018 – Apr 2019",
      points: ["Angular, Node.js, MongoDB, PayPal/Stripe, Jitsi integration"],
      color: "#1a1a1a",
    },
    {
      role: "Educator",
      org: "New Century, Christ The King, William Booth Colleges",
      time: "2015 – 2021",
      points: ["Secondary & high school teaching, curriculum design"],
      color: "#c9a86a",
    },
  ];

  const education = [
    { title: "M.Sc. Computer Science", org: "University of Buea", year: "2019–2022", type: "Masters" },
    { title: "BSc. Computer Science", org: "University of Yaoundé I", year: "2014–2017", type: "Bachelors" },
    { title: "BSc. Economics", org: "University of Yaoundé II", year: "Since 2015", type: "Bachelors", desc: "Micro, Macro, Math/Stats, Business Mgmt" },
    { title: "GCE Advanced / Ordinary", org: "Cameroon GCE Board", year: "2013–2014", type: "Secondary" },
  ];

  const certs = [
    "SAP Business Analyst Professional – MTN / Coursera (2025)",
    "IBM Data Analyst Professional (2025)",
    "IBM Full Stack Developer (2025)",
    "Google Advanced Data Analyst Professional (2025)",
    "MIT Applied Economics – Micro, Development, Labor (Jan–Apr 2026)",
  ];

  const skills = [
    { group: "Programming", items: ["C/C++", "Java", "PHP", "Javascript", "Python"], icon: Code2 },
    { group: "Frameworks", items: ["Laravel", "NextJs", "ReactJs", "Node.js", "Angular"], icon: Layers },
    { group: "AI & ML", items: ["TensorFlow", "Scikit-Learn", "Keras", "IBM Watsonx", "Nvidia NIM"], icon: Cpu },
    { group: "Data Tools", items: ["Excel", "Tableau", "SPSS", "Power BI", "MySQL", "PostgreSQL", "MongoDB"], icon: Database },
    { group: "Graphics", items: ["Photoshop", "Illustrator", "InDesign", "Inkscape"], icon: Palette },
    { group: "Office & Collab", items: ["MS Office", "GitHub", "Jira", "Asana"], icon: Briefcase },
  ];

  const assets = ["Adaptability", "Tech for Good", "Business Insight", "Sustainability Focus", "Educational Strength", "Bilingual EN/FR"];

  return (
    <div
      className={`${dark ? "dark bg-[#0d0d0d] text-[#f5f1e8]" : "bg-[#f5f1e8] text-[#1a1a1a]"} min-h-screen w-full overflow-x-hidden font-[Inter] antialiased selection:bg-[#d67a3e]/30 transition-colors duration-500`}
      style={{ fontFamily: "'Inter', 'Space Grotesk', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        .reveal { opacity: 0; transform: translateY(18px); transition: all .7s cubic-bezier(.16,1,.3,1); }
        .reveal.in-view { opacity: 1; transform: translateY(0); }
        .glass { backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
        * { min-width: 0; }
      `}</style>

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-full bg-[#0f2e1f] text-white text-sm font-medium shadow-xl flex items-center gap-2">
          <Check size={16} /> {toast}
        </div>
      )}

      {/* NAV */}
      <nav
        className={`sticky top-0 z-50 border-b ${
          dark ? "bg-[#121212]/80 border-white/10" : "bg-[#f5f1e8]/80 border-black/5"
        } glass`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[12px] bg-[#0f2e1f] text-white grid place-items-center font-bold text-[14px] tracking-tight">LC</div>
            <div className="leading-[1.1]">
              <div className="font-semibold text-[13px] tracking-[0.02em]">LATEH AKA</div>
              <div className="text-[11px] opacity-60 font-medium">Yaoundé • Remote Global</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-3.5 py-2 rounded-full text-[13px] font-medium transition ${
                  activeId === n.id ? (dark ? "bg-white/15 text-white" : "bg-[#0f2e1f] text-white") : dark ? "hover:bg-white/10" : "hover:bg-black/5"
                }`}
                aria-current={activeId === n.id ? "page" : undefined}
              >
                {n.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className={`w-9 h-9 rounded-full grid place-items-center border transition ${dark ? "bg-white/10 border-white/10" : "bg-white border-black/10 shadow-sm"}`}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden w-9 h-9 rounded-full bg-[#0f2e1f] text-white grid place-items-center"
            >
              {mobileMenu ? <X size={16} /> : <Menu size={16} />}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex h-9 px-4 rounded-full bg-[#0f2e1f] text-white text-[13px] font-semibold items-center gap-1.5 hover:opacity-90 transition"
            >
              Contact <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className={`md:hidden border-t px-6 py-4 space-y-1 ${dark ? "bg-[#0d0d0d] border-white/10" : "bg-[#f5f1e8] border-black/5"}`}>
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="w-full text-left py-2.5 text-[14px] font-medium">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-20 pb-16 overflow-hidden">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-6 items-center">
          {/* left */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-[11px] font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0f2e1f] animate-pulse" />
              SUSTAINABILITY × TECHNOLOGY × BUSINESS ANALYSIS
              <Sparkles size={12} className="text-[#d67a3e]" />
            </div>

            <h1 className="font-[Space_Grotesk] font-bold tracking-[-0.03em] leading-[0.92] text-[40px] md:text-[56px] lg:text-[64px]">
              Lateh <span className="text-[#0f2e1f]">LARRY-COLLINS</span>
              <br />
              <span className="font-light text-[0.7em]">AKA</span>
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#0f2e1f] text-white text-[12px] font-medium">Software Engineer</span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-[12px] font-medium">Business Consultant & Analyst</span>
              <span className="px-3 py-1.5 rounded-full bg-[#d67a3e]/15 text-[#8a4a1f] border border-[#d67a3e]/20 text-[12px] font-medium">Cloud & Data Systems • AI Integration</span>
            </div>

            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.45] font-[400] max-w-[58ch] tracking-[-0.01em] opacity-80">
              I design scalable web applications and cloud systems that streamline operations, reduce waste, and empower communities.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[12px] opacity-70">
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> Pont Emana, Yaoundé, Cameroon</span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5"><Globe size={12} /> Open to remote: Middle East – Asia – Europe – America – Africa</span>
              <span className="hidden sm:inline">•</span>
              <span>EN/FR Bilingual • 04/04/1996</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => showToast("CV download – link your PDF in /public/cv.pdf for Vercel")}
                className="h-[46px] px-6 rounded-full bg-[#0f2e1f] text-white text-[14px] font-semibold inline-flex items-center gap-2 hover:translate-y-[-1px] transition"
              >
                <Download size={16} /> Download CV
              </button>
              <button
                onClick={() => scrollTo("experience")}
                className={`h-[46px] px-6 rounded-full border text-[14px] font-semibold inline-flex items-center gap-2 transition ${dark ? "border-white/15 bg-white/5 hover:bg-white/10" : "bg-white border-black/10 shadow-sm hover:shadow"}`}
              >
                View Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className={`h-[46px] px-6 rounded-full text-[14px] font-semibold inline-flex items-center gap-2 ${dark ? "bg-[#d67a3e] text-white" : "bg-[#d67a3e] text-white"}`}
              >
                Contact Me
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[520px]">
              {[
                { k: "+65%", d: "Efficiency", sub: "Desktop tool" },
                { k: "-40%", d: "Redundancy", sub: "Test strategy" },
                { k: "-20%", d: "Turnaround", sub: "Resource opt." },
              ].map((s) => (
                <div key={s.k} className={`rounded-[16px] p-4 ${dark ? "bg-white/[0.06] border border-white/10" : "bg-white border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"}`}>
                  <div className="text-[22px] font-bold tracking-tight">{s.k}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide opacity-70">{s.d}</div>
                  <div className="text-[11px] opacity-60">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className={`mt-6 flex flex-wrap gap-3 text-[12px] ${dark ? "text-white/70" : "text-black/60"}`}>
              <a href="mailto:clatehlarry@gmail.com" className="inline-flex items-center gap-1.5 hover:underline"><Mail size={12} /> clatehlarry@gmail.com</a>
              <span>•</span>
              <a href="tel:+237621607297" className="inline-flex items-center gap-1.5 hover:underline"><Phone size={12} /> +237 621607297</a>
              <span>•</span>
              <a href="https://github.com/LarryCollinsAka" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 hover:underline"><Github size={12} /> github.com/LarryCollinsAka</a>
            </div>
          </div>

          {/* right - hero image */}
          <div className="reveal relative lg:pl-8">
            <div className="relative mx-auto max-w-[440px]">
              {/* soft blobs */}
              <div className="absolute -top-10 -left-10 w-[180px] h-[180px] rounded-full bg-[#c9a86a]/30 blur-[30px]" />
              <div className="absolute -bottom-10 -right-10 w-[220px] h-[220px] rounded-full bg-[#d67a3e]/20 blur-[32px]" />

              <div className="relative rounded-[32px] p-3 bg-white shadow-[0_20px_60px_rgba(15,46,31,0.15)] border border-black/5">
                <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-[#f0ebe0]">
                  <img src={heroImg} alt="Lateh Larry Collins" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 rounded-[24px] ring-[8px] ring-[#0f2e1f]/15 pointer-events-none" />
                  {/* circular green ring accent behind */}
                  <div className="absolute top-6 right-6 w-16 h-16 lg:w-24 lg:h-24 rounded-full border-[8px] lg:border-[10px] border-[#0f2e1f] opacity-90" />
                </div>

                {/* floating cards */}
                <div className="absolute left-2 lg:-left-6 bottom-[24%] bg-[#0f2e1f] text-white rounded-[14px] px-3 lg:px-4 py-2.5 lg:py-3 shadow-xl flex items-center gap-2 lg:gap-3 max-w-[90%]">
                  <div className="w-9 h-9 rounded-[10px] bg-white/10 grid place-items-center"><Leaf size={16} /></div>
                  <div>
                    <div className="text-[12px] font-semibold leading-none">Tech for Good</div>
                    <div className="text-[11px] opacity-70 mt-1">SND30 • SDGs • AU 2063</div>
                  </div>
                </div>

                <div className="absolute right-2 lg:-right-4 top-[18%] bg-white rounded-[14px] px-3 py-2 lg:px-3.5 lg:py-2.5 shadow-xl border border-black/5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-semibold">Available for remote</span>
                </div>
              </div>

              {/* quote */}
              <div className={`mt-6 rounded-[18px] p-4 flex gap-3 ${dark ? "bg-white/5 border border-white/10" : "bg-[#0f2e1f]/[0.04] border border-[#0f2e1f]/10"}`}>
                <div className="w-8 h-8 rounded-full bg-[#0f2e1f] text-white grid place-items-center shrink-0"><Recycle size={14} /></div>
                <p className="text-[12.5px] leading-[1.5] opacity-80">
                  Building resilient systems that respect local context, reduce operational waste, and scale education & employment pathways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="reveal flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-[42%]">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase opacity-60 mb-3">
              <span className="w-6 h-[1px] bg-current" /> Philosophy
            </div>
            <h2 className="font-[Space_Grotesk] text-[32px] md:text-[44px] font-bold leading-[0.95] tracking-[-0.02em]">
              Tech for Good,
              <br />
              <span className="font-light">Growth with Purpose</span>
            </h2>
            <p className={`mt-5 text-[15px] leading-[1.7] ${dark ? "text-white/70" : "text-black/65"}`}>
              I work at the intersection of software engineering, business analysis, and sustainability. Every system I design is evaluated on three axes: adaptability to local realities, business viability, and long-term environmental and social impact.
              <br />
              <br />
              My approach maps to <strong>UN SDGs</strong> (SDG 9 Industry & Innovation, SDG 8 Decent Work, SDG 12 Responsible Consumption, SDG 4 Quality Education), <strong>AU Agenda 2063</strong> (Aspiration 1: Prosperous Africa, Aspiration 6: People-driven development), and <strong>Cameroon SND30</strong> (structural transformation, human capital, employment & governance).
            </p>
          </div>

          <div className="lg:w-[58%] grid gap-4">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Adaptability", desc: "Designing resilient solutions that work with intermittent connectivity, low-resource contexts, and evolving requirements.", icon: Zap },
                { title: "Business Insight", desc: "Translating stakeholder needs into measurable outcomes – cost, time, sovereignty, independence.", icon: BarChart3 },
                { title: "Sustainability Focus", desc: "Reducing waste in ops & code: reusable components, efficient infra, education-first deployment.", icon: Leaf },
              ].map((p) => (
                <div key={p.title} className={`rounded-[20px] p-5 ${dark ? "bg-white/[0.06] border border-white/10" : "bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"}`}>
                  <div className="w-10 h-10 rounded-[12px] bg-[#0f2e1f] text-white grid place-items-center mb-4"><p.icon size={18} /></div>
                  <div className="font-semibold text-[14px]">{p.title}</div>
                  <div className="text-[12.5px] leading-[1.6] opacity-70 mt-2">{p.desc}</div>
                </div>
              ))}
            </div>

            {/* Framework strip */}
            <div className={`rounded-[20px] p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between ${dark ? "bg-[#0f2e1f] text-white" : "bg-[#0f2e1f] text-white"}`}>
              <div className="flex items-center gap-3">
                <div className="text-[11px] font-bold tracking-widest uppercase opacity-80">Alignments</div>
                <div className="hidden md:block w-px h-6 bg-white/20" />
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "SDG 4 • Quality Education",
                  "SDG 8 • Decent Work",
                  "SDG 9 • Industry & Innovation",
                  "SDG 12 • Responsible Consumption",
                  "AU 2063 • Aspiration 1 & 6",
                  "SND30 • Transformation, Human Capital",
                ].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[11px] font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className={`${dark ? "bg-white/[0.03] border-y border-white/5" : "bg-white border-y border-black/5"} py-16 lg:py-24`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="reveal flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase opacity-60 mb-2">Career Path</div>
              <h2 className="font-[Space_Grotesk] text-[32px] md:text-[42px] font-bold tracking-tight leading-[0.95]">Work Experience</h2>
            </div>
            <div className={`text-[13px] max-w-[48ch] ${dark ? "text-white/60" : "text-black/60"}`}>Reverse chronological timeline focused on impact metrics, not just tasks. Sustainability lens: efficiency, sovereignty, education.</div>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="hidden lg:block absolute left-[172px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0f2e1f]/20 via-black/10 to-transparent" />

            <div className="grid gap-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="reveal grid lg:grid-cols-[160px_1fr] gap-4 lg:gap-8 group">
                  <div className="lg:text-right">
                    <div className="inline-flex lg:flex lg:flex-col items-center lg:items-end gap-2">
                      {exp.current && <span className="px-2 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold tracking-wide">NOW</span>}
                      <div className="text-[12px] font-semibold opacity-70">{exp.time}</div>
                    </div>
                    <div className="hidden lg:block mt-3 ml-auto w-3 h-3 rounded-full bg-[#0f2e1f] ring-4 ring-[#f5f1e8] group-[.dark]:ring-[#0d0d0d]" />
                  </div>

                  <div className={`rounded-[20px] p-6 lg:p-7 border transition ${dark ? "bg-white/[0.05] border-white/10 hover:bg-white/[0.07]" : "bg-[#f5f1e8] lg:bg-white border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]"}`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-[16px] leading-tight">{exp.role}</h3>
                          {exp.highlight && <span className="hidden md:inline-flex px-2.5 py-1 rounded-full bg-[#d67a3e]/15 text-[#8a4a1f] border border-[#d67a3e]/20 text-[10px] font-bold uppercase tracking-wide">Flagship</span>}
                        </div>
                        <div className="text-[13px] opacity-70 mt-1 font-medium flex items-center gap-1.5"><Briefcase size={12} /> {exp.org}</div>
                        {exp.highlight && (
                          <div className="mt-3 px-3 py-2 rounded-[12px] bg-[#0f2e1f] text-white text-[12px] font-medium inline-flex items-center gap-2">
                            <Globe size={14} /> {exp.highlight}
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {exp.stats?.map((s) => (
                          <div key={s.k} className={`rounded-[12px] px-3 py-2 border text-center ${dark ? "bg-white/5 border-white/10" : "bg-[#f5f1e8] border-black/5"}`}>
                            <div className="text-[14px] font-bold leading-none">{s.k}</div>
                            <div className="text-[10px] opacity-60 mt-1 leading-tight">{s.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <ul className="mt-4 grid gap-1.5">
                      {exp.points.map((p, i) => (
                        <li key={i} className="flex gap-2 text-[13px] leading-[1.6] opacity-80">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#0f2e1f] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="reveal mb-8">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase opacity-60 mb-2">Knowledge Base</div>
          <h2 className="font-[Space_Grotesk] text-[32px] md:text-[42px] font-bold tracking-tight">Education & Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((e) => (
              <div key={e.title} className={`reveal rounded-[20px] p-6 border ${dark ? "bg-white/[0.05] border-white/10" : "bg-white border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"}`}>
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-[12px] bg-[#0f2e1f]/10 text-[#0f2e1f] grid place-items-center"><GraduationCap size={18} /></div>
                  <span className="px-2.5 py-1 rounded-full bg-[#0f2e1f] text-white text-[10px] font-bold tracking-wide">{e.type}</span>
                </div>
                <div className="mt-4 font-semibold text-[15px] leading-tight">{e.title}</div>
                <div className="text-[12px] opacity-70 mt-1">{e.org}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10"><Calendar size={12} /> {e.year}</div>
                {e.desc && <div className="mt-3 text-[12px] opacity-70 leading-relaxed">{e.desc}</div>}
              </div>
            ))}
          </div>

          <div className={`reveal rounded-[24px] p-6 lg:p-7 ${dark ? "bg-[#0f2e1f] text-white border border-white/10" : "bg-[#0f2e1f] text-white"}`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-[10px] bg-white/10 grid place-items-center"><Sparkles size={14} /></div>
              <div className="text-[12px] font-bold tracking-widest uppercase">2025 – 2026 Certifications</div>
            </div>
            <div className="grid gap-2.5">
              {certs.map((c) => (
                <div key={c} className="flex gap-2.5 text-[13px] leading-[1.5] bg-white/5 border border-white/10 rounded-[12px] px-3.5 py-2.5">
                  <Check size={14} className="mt-0.5 text-[#c9a86a] shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[14px] bg-white/10 p-4 border border-white/10">
              <div className="text-[11px] uppercase tracking-wide font-bold opacity-80 mb-2">Focus Areas</div>
              <div className="flex flex-wrap gap-1.5">
                {["Business Analysis", "Data Analytics", "Full Stack", "Applied Economics"].map((f) => (
                  <span key={f} className="px-2.5 py-1 rounded-full bg-white text-[#0f2e1f] text-[11px] font-semibold">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={`${dark ? "bg-white/[0.03] border-y border-white/5" : "bg-white border-y border-black/5"} py-16 lg:py-24`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="reveal flex flex-wrap justify-between gap-6 mb-10">
            <h2 className="font-[Space_Grotesk] text-[32px] md:text-[42px] font-bold tracking-tight">Skills & Strengths</h2>
            <div className="flex flex-wrap gap-2 max-w-[520px]">
              {assets.map((a) => (
                <span key={a} className="px-3 py-1.5 rounded-full bg-[#0f2e1f] text-white text-[11px] font-semibold tracking-wide">{a}</span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div key={s.group} className={`reveal rounded-[20px] p-6 border ${dark ? "bg-white/[0.05] border-white/10" : "bg-[#f5f1e8] lg:bg-[#fcfaf5] border-black/5"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-[12px] bg-[#0f2e1f] text-white grid place-items-center"><s.icon size={16} /></div>
                  <div className="font-semibold text-[13px] tracking-wide uppercase">{s.group}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition ${dark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-black/10 shadow-sm hover:shadow"}`}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustainability" className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="reveal text-center max-w-[720px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f2e1f]/10 text-[#0f2e1f] text-[11px] font-bold tracking-widest uppercase"><Leaf size={12} /> Sustainability Alignment</div>
          <h2 className="font-[Space_Grotesk] mt-4 text-[32px] md:text-[48px] font-bold leading-[0.9] tracking-tight">Building systems that serve frameworks, not just features</h2>
          <p className={`mt-4 text-[14px] leading-[1.7] ${dark ? "text-white/60" : "text-black/60"}`}>Every project is mapped to impact. Code is a means to decent work, inclusive growth, and responsible resource use.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              title: "UN SDGs",
              subtitle: "Global Goals",
              icon: Globe,
              color: "#0f2e1f",
              items: [
                { k: "SDG 9", d: "Industry, Innovation & Infrastructure – resilient web & cloud architecture, Python modernization" },
                { k: "SDG 8", d: "Decent Work & Growth – automation +65% efficiency, trainer role scaling skills" },
                { k: "SDG 12", d: "Responsible Consumption – -40% redundancy, -20% turnaround, reusable components" },
                { k: "SDG 4", d: "Quality Education – 2015-2024 teaching, mentorship of 3+ junior devs, curriculum" },
              ],
            },
            {
              title: "AU Agenda 2063",
              subtitle: "The Africa We Want",
              icon: Layers,
              color: "#d67a3e",
              items: [
                { k: "Aspiration 1", d: "Prosperous Africa – digital transformation for MCA Cameroon, data sovereignty" },
                { k: "Aspiration 2", d: "Integrated Continent – APIs for geolocation, MoMo/Orange Money cross-border rails" },
                { k: "Aspiration 6", d: "People-driven – community training, bilingual EN/FR communication" },
              ],
            },
            {
              title: "Cameroon SND30",
              subtitle: "National Development Strategy",
              icon: BarChart3,
              color: "#c9a86a",
              items: [
                { k: "Pillar 1", d: "Structural Transformation – in-house hosting strategy, infrastructure independence" },
                { k: "Pillar 2", d: "Human Capital – 9 years education experience, STEM training academy" },
                { k: "Pillar 3", d: "Employment & Governance – business analysis, stakeholder engagement, risk & sustainability" },
              ],
            },
          ].map((col) => (
            <div key={col.title} className={`reveal rounded-[24px] p-7 border flex flex-col ${dark ? "bg-white/[0.05] border-white/10" : "bg-white border-black/5 shadow-[0_16px_40px_rgba(0,0,0,0.05)]"}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-[14px] grid place-items-center text-white" style={{ background: col.color }}><col.icon size={18} /></div>
                <div>
                  <div className="font-bold text-[16px] leading-none">{col.title}</div>
                  <div className="text-[11px] uppercase tracking-wide opacity-60 mt-1 font-semibold">{col.subtitle}</div>
                </div>
              </div>
              <div className="grid gap-3">
                {col.items.map((it) => (
                  <div key={it.k} className={`rounded-[14px] p-4 border ${dark ? "bg-white/[0.03] border-white/10" : "bg-[#f5f1e8] border-black/5"}`}>
                    <div className="text-[11px] font-bold tracking-wide">{it.k}</div>
                    <div className="text-[12.5px] leading-[1.5] opacity-75 mt-1">{it.d}</div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6 flex items-center gap-2 text-[11px] font-semibold opacity-60">
                <div className="w-6 h-[1px] bg-current" /> Aligned & Applied
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${dark ? "bg-[#0f2e1f] text-[#f5f1e8]" : "bg-[#0f2e1f] text-[#f5f1e8]"} py-16 lg:py-24 rounded-t-[32px] mt-8`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase opacity-70 mb-3"><Mail size={12} /> Get in Touch</div>
              <h2 className="font-[Space_Grotesk] text-[36px] md:text-[52px] font-bold leading-[0.9] tracking-tight">Let's build for impact.</h2>
              <p className="mt-4 text-[14px] leading-[1.7] opacity-70 max-w-[48ch]">Open to remote collaborations across Middle East, Asia, Europe, America, Africa. Sustainability-first engineering, business analysis, cloud & AI integration.</p>

              <div className="mt-8 grid gap-3">
                {[
                  { icon: Mail, label: "Email", value: "clatehlarry@gmail.com", href: "mailto:clatehlarry@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+237 621607297", href: "tel:+237621607297" },
                  { icon: Github, label: "GitHub", value: "github.com/LarryCollinsAka", href: "https://github.com/LarryCollinsAka" },
                  { icon: MapPin, label: "Location", value: "Pont Emana, Yaoundé, Cameroon – Remote Global", href: "#" },
                ].map((c) => (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} className="flex items-center gap-4 rounded-[16px] bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition">
                    <div className="w-10 h-10 rounded-[12px] bg-white/10 grid place-items-center"><c.icon size={16} /></div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide opacity-60 font-bold">{c.label}</div>
                      <div className="text-[13px] font-medium">{c.value}</div>
                    </div>
                    <ExternalLink size={14} className="ml-auto opacity-40" />
                  </a>
                ))}
              </div>

              <button
                onClick={openDirectWhatsApp}
                className="mt-4 w-full h-[56px] rounded-[16px] bg-[#25D366] text-white font-bold text-[14px] flex items-center justify-center gap-3 hover:bg-[#20bd5a] active:scale-[0.98] transition shadow-[0_10px_24px_rgba(37,211,102,0.25)]"
              >
                <WhatsAppIcon size={20} />
                Chat on WhatsApp — Fastest Response
                <ArrowUpRight size={16} className="opacity-80" />
              </button>

              <div className="mt-8 rounded-[20px] bg-white/5 border border-white/10 p-5">
                <div className="text-[11px] uppercase tracking-wide font-bold opacity-60 mb-3">Location Preview</div>
                <div className="rounded-[14px] bg-[#0a1f14] border border-white/10 h-[180px] grid place-items-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(400px 200px at 30% 20%, #c9a86a, transparent), radial-gradient(500px 300px at 80% 80%, #d67a3e, transparent)" }} />
                  <div className="relative text-center">
                    <MapPin size={24} className="mx-auto mb-2 text-[#c9a86a]" />
                    <div className="text-[13px] font-semibold">Pont Emana, Yaoundé</div>
                    <div className="text-[11px] opacity-60 mt-1">3.8480° N, 11.5021° E • GMT+1</div>
                    <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-white text-[#0f2e1f] text-[10px] font-bold">Open to Remote Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="reveal">
              <div className="rounded-[24px] bg-[#f5f1e8] text-[#1a1a1a] p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-[Space_Grotesk] text-[20px] font-bold flex items-center gap-2"><WhatsAppIcon size={20} className="text-[#25D366]" /> Send a message</h3>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#25D366]/10 text-[#0f2e1f] border border-[#25D366]/20 font-semibold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" /> WhatsApp Direct</span>
                </div>

                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wide opacity-60">Name *</label>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="mt-2 w-full h-12 rounded-[12px] bg-white border border-black/10 px-4 text-[14px] outline-none focus:border-[#0f2e1f]/30 focus:ring-2 focus:ring-[#0f2e1f]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wide opacity-60">Email *</label>
                      <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        type="email"
                        className="mt-2 w-full h-12 rounded-[12px] bg-white border border-black/10 px-4 text-[14px] outline-none focus:border-[#0f2e1f]/30 focus:ring-2 focus:ring-[#0f2e1f]/10 transition"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wide opacity-60">Organization</label>
                      <input
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        placeholder="Company / Org (optional)"
                        className="mt-2 w-full h-12 rounded-[12px] bg-white border border-black/10 px-4 text-[14px] outline-none focus:border-[#0f2e1f]/30 focus:ring-2 focus:ring-[#0f2e1f]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wide opacity-60">Interest</label>
                      <select
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="mt-2 w-full h-12 rounded-[12px] bg-white border border-black/10 px-4 text-[14px] outline-none focus:border-[#0f2e1f]/30 focus:ring-2 focus:ring-[#0f2e1f]/10 transition"
                      >
                        <option value="">Select a topic</option>
                        <option value="Sustainability Review">Sustainability Review</option>
                        <option value="Cloud Migration">Cloud Migration</option>
                        <option value="Business Analysis">Business Analysis</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="Training & Mentorship">Training & Mentorship</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wide opacity-60">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, goals, impact..."
                      rows={5}
                      className="mt-2 w-full rounded-[12px] bg-white border border-black/10 p-4 text-[14px] outline-none focus:border-[#0f2e1f]/30 focus:ring-2 focus:ring-[#0f2e1f]/10 transition resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-3 pt-1">
                    <button
                      onClick={handleWhatsAppSubmit}
                      className="h-12 rounded-[12px] bg-[#25D366] text-white font-semibold text-[14px] inline-flex items-center justify-center gap-2 hover:bg-[#20bd5a] active:scale-[0.98] transition shadow-[0_6px_20px_rgba(37,211,102,0.3)]"
                    >
                      <WhatsAppIcon size={18} />
                      Send via WhatsApp
                    </button>
                    <button
                      onClick={openDirectWhatsApp}
                      className="h-11 rounded-[12px] bg-white border border-black/10 text-[13px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-black/[0.02] transition"
                    >
                      <MessageCircle size={16} className="opacity-70" />
                      Chat on WhatsApp
                    </button>
                  </div>
                  <div className="text-[11px] leading-[1.5] opacity-60 text-center px-2 py-2 rounded-[10px] bg-black/[0.03] border border-black/5">
                    This will open WhatsApp to chat directly with me - no data stored on server. Works perfectly on mobile.
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-black/10 flex items-center justify-between">
                  <div className="text-[11px] opacity-60 flex items-center gap-1.5"><WhatsAppIcon size={12} /> Response time: &lt;2h on WhatsApp</div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Available now</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Sustainability Review", "Cloud Migration", "Business Analysis", "AI Integration", "Training & Mentorship"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[11px] font-medium text-white">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-[12px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[10px] bg-white text-[#0f2e1f] grid place-items-center font-bold text-[12px]">LC</div>
              <div>
                <div className="font-semibold">Lateh LARRY-COLLINS AKA</div>
                <div className="opacity-60 text-[11px]">Pont Emana, Yaoundé • Bilingual EN/FR</div>
              </div>
            </div>
            <div className="opacity-60 text-center md:text-right">
              <div>Built for impact • Designed for sustainability • 2026</div>
              <div className="text-[11px] mt-1">SDG 4, 8, 9, 12 • AU Agenda 2063 • Cameroon SND30 • Tech for Good</div>
            </div>
          </div>

          {/* Vercel comment */}
          <div className="mt-8 rounded-[12px] bg-black/20 border border-white/5 p-4 text-[11px] leading-[1.6] opacity-50 font-mono">
            {/* VERCEL DEPLOY: 1) Push this project to GitHub 2) Import in Vercel Dashboard 3) Framework: Vite / React 4) Build command: npm run build 5) Output: dist 6) Add your CV PDF to public/cv.pdf and link Download button. No env vars needed for static portfolio. For contact form, add RESEND_API_KEY and create /api/send route. */}
            WhatsApp-ready • Number: +237621607297 (237621607297) • wa.me direct • No server storage • Vercel: Vite + React + Tailwind • Build: npm run build
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openDirectWhatsApp}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[90] w-[56px] h-[56px] md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] grid place-items-center hover:bg-[#20bd5a] active:scale-95 transition group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-[ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-[pulse_2.5s_ease-in-out_infinite]" />
        <WhatsAppIcon size={28} className="relative z-10" />
      </button>
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
