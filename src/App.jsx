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

const WhatsAppIcon = (props) => {
  const size = props.size || 20;
  const className = props.className || "";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2a9.82 9.82 0 0 0-8.5 14.86L2 22l5.3-1.39a9.82 9.82 0 0 0 4.74 1.21h.01a9.82 9.82 0 0 0 6.9-2.82 9.82 9.82 0 0 0 0-13.89Zm-7.01 15.2a8.18 8.18 0 0 1-4.18-1.14l-.3-.18-3.15.82.84-3.07-.2-.31a8.18 8.18 0 0 1-1.27-4.4 8.2 8.2 0 0 1 13.89-5.84 8.2 8.2 0 0 1-5.93 13.12Zm4.58-6.14c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.12-.16.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.57-1.38-.79-1.89-.2-.49-.42-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.3 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.14-1.19-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
};

export default function App() {
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    interest: "",
    message: "",
  });
  const [activeId, setActiveId] = useState("home");
  const WHATSAPP_NUMBER = "237621607297";
  const openDirectWhatsApp = () => {
    const preset =
      "Hello Larry-Collins, I saw your portfolio and would like to connect.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(preset)}`;
    window.open(url, "_blank");
  };
  const handleWhatsAppSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast("Please fill name, email and message");
      return;
    }
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
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      try {
        history.replaceState(null, "", `#${id}`);
      } catch {}
      el.classList.add("ring-2", "ring-[#d67a3e]/40");
      setTimeout(() => el.classList.remove("ring-2", "ring-[#d67a3e]/40"), 800);
    }
    setMobileMenu(false);
  };
  const observerRef = useRef(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((el) => observerRef.current?.observe(el));
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
      stats: [
        { k: "65%", v: "efficiency gain" },
        { k: "-50%", v: "dev effort" },
      ],
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
        "RCA for 10+ critical issues",
      ],
      stats: [{ k: "+4%", v: "accuracy" }],
      color: "#1a1a1a",
    },
    {
      role: "Web Development Trainer",
      org: "Mountain Tech Academy, Buea",
      time: "Nov 2022 – Sep 2024",
      points: ["Taught HTML, CSS, JS, Laravel, NextJs, Flutter"],
      color: "#0f2e1f",
    },
  ];
  return (
    <div
      className={`${dark ? "dark bg-[#0a0a0a] text-[#f5f1e8]" : "bg-[#f5f1e8] text-[#1a1a1a]"} min-h-screen antialiased transition-colors duration-300 selection:bg-[#d67a3e]/30`}
    >
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-full bg-[#1a1a1a] text-white text-[13px] font-medium shadow-xl animate-[slideDown_.3s_ease]">
          {toast}
        </div>
      )}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b ${dark ? "bg-black/40 border-white/10" : "bg-[#f5f1e8]/80 border-black/5"}`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-[64px] flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <div className="w-9 h-9 rounded-[10px] bg-[#0f2e1f] text-white grid place-items-center font-bold text-[14px]">
              LC
            </div>
            <span className="font-semibold tracking-tight">Lateh L-C Aka</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-3 py-2 rounded-full text-[13px] font-medium transition ${activeId === n.id ? "bg-[#0f2e1f] text-white" : "opacity-60 hover:opacity-100 hover:bg-black/5"}`}
              >
                {n.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-full grid place-items-center bg-black/5 hover:bg-black/10 transition"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden w-9 h-9 rounded-full grid place-items-center bg-black/5"
            >
              {mobileMenu ? <X size={16} /> : <Menu size={16} />}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:inline-flex h-9 px-4 rounded-full bg-[#0f2e1f] text-white text-[13px] font-semibold items-center gap-2"
            >
              Let's Talk <ArrowRight size={14} />
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden px-5 pb-5 pt-2 grid gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left px-4 py-3 rounded-[12px] hover:bg-black/5 font-medium"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </nav>
      <section id="home" className="pt-[88px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_.9fr] gap-10 md:gap-6 items-center py-10 md:py-20">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2e1f]/10 border border-[#0f2e1f]/10 text-[11px] font-bold tracking-wide uppercase">
                <Leaf size={12} /> Sustainability × Technology × Business
                Analysis
              </div>
              <h1
                className="mt-6 font-[800] leading-[0.95] tracking-[-0.03em] text-[38px] md:text-[56px]"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                Lateh
                <br />
                <span className="text-[#0f2e1f]">LARRY-COLLINS</span>
                <br />
                AKA
              </h1>
              <p className="mt-4 text-[16px] md:text-[18px] font-medium leading-[1.5] opacity-80">
                Software Engineer | Business Consultant & Analyst | Cloud & Data
                Systems and AI Integration
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] opacity-70 max-w-[48ch]">
                I design scalable web applications and cloud systems that
                streamline operations, reduce waste, and empower communities.
                Bilingual EN/FR • Yaoundé, Cameroon • Remote: MEA - Asia -
                Europe - America.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("experience")}
                  className="h-11 px-6 rounded-full bg-[#0f2e1f] text-white text-[14px] font-semibold inline-flex items-center gap-2"
                >
                  View Projects <ArrowUpRight size={16} />
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="h-11 px-6 rounded-full bg-white border border-black/10 text-[14px] font-semibold inline-flex items-center gap-2 hover:bg-black/[0.02]"
                >
                  <Download size={16} /> Download CV
                </a>
                <button
                  onClick={openDirectWhatsApp}
                  className="h-11 px-5 rounded-full bg-[#25D366] text-white text-[14px] font-semibold inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={16} /> WhatsApp
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  { k: "SDG 9", v: "Industry & Innovation" },
                  { k: "AU 2063", v: "Aspiration 1" },
                  { k: "SND30", v: "Structural Transform" },
                ].map((t) => (
                  <span
                    key={t.k}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[11px] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d67a3e]" />
                    {t.k} • {t.v}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal relative">
              <div className="relative w-[280px] md:w-[380px] aspect-square mx-auto">
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#0f2e1f] to-[#d67a3e] opacity-20 blur-2xl" />
                <img
                  src={heroImg}
                  alt="Larry"
                  className="relative w-full h-full object-cover rounded-[32px] border-[6px] border-white shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-[16px] p-4 shadow-xl border border-black/5">
                  <div className="text-[11px] uppercase tracking-wide font-bold opacity-60">
                    Based in
                  </div>
                  <div className="font-semibold flex items-center gap-1.5 mt-1">
                    <MapPin size={14} /> Pont Emana, Yaoundé
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="py-16 md:py-24 border-t border-black/5"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight">
            Experience
          </h2>
          <div className="mt-10 grid gap-6">
            {experiences.map((ex, i) => (
              <div
                key={i}
                className="reveal rounded-[20px] bg-white border border-black/5 p-6 md:p-8"
              >
                <div className="flex flex-wrap gap-3 items-start justify-between">
                  <div>
                    <div className="font-semibold text-[18px]">{ex.role}</div>
                    <div className="text-[13px] opacity-60 mt-1 flex items-center gap-2">
                      <Briefcase size={12} /> {ex.org} • <Calendar size={12} />{" "}
                      {ex.time}
                    </div>
                    {ex.highlight && (
                      <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-[#d67a3e]/10 text-[#a95a22] text-[11px] font-bold">
                        {ex.highlight}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {(ex.stats || []).map((s, j) => (
                      <div
                        key={j}
                        className="px-3 py-2 rounded-[12px] bg-black/[0.03] border border-black/5 text-center"
                      >
                        <div className="font-bold text-[14px]">{s.k}</div>
                        <div className="text-[10px] opacity-60">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  {ex.points.map((p, k) => (
                    <li
                      key={k}
                      className="flex gap-2 text-[13px] leading-[1.6] opacity-80"
                    >
                      <Check size={14} className="mt-0.5 text-[#0f2e1f]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 md:py-24 bg-[#0f2e1f] text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[32px] font-bold tracking-tight">
              Let's build something sustainable
            </h2>
            <p className="mt-4 opacity-70 leading-[1.6]">
              Open to roles aligned with SDGs, AU Agenda 2063 and Cameroon
              SND30. Cloud, AI, Business Analysis.
            </p>
            <div className="mt-6 grid gap-2 text-[13px]">
              <div className="flex gap-2 items-center">
                <Mail size={14} /> clatehlarry@gmail.com
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={14} /> +237 621607297
              </div>
              <div className="flex gap-2 items-center">
                <Github size={14} /> github.com/LarryCollinsAka
              </div>
            </div>
          </div>
          <div className="bg-white text-[#1a1a1a] rounded-[20px] p-6">
            <div className="grid gap-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name *"
                className="h-12 rounded-[12px] border border-black/10 px-4 text-[14px]"
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email *"
                className="h-12 rounded-[12px] border border-black/10 px-4 text-[14px]"
              />
              <input
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                placeholder="Organization"
                className="h-12 rounded-[12px] border border-black/10 px-4 text-[14px]"
              />
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="h-12 rounded-[12px] border border-black/10 px-4 text-[14px]"
              >
                <option value="">Select topic</option>
                <option>Web/app Development</option>
                <option>Software Development</option>
                <option>Data Analysis</option>
                <option>Technology Consulting</option>
                <option>SAP Consulting</option>
                <option>Sustainability Review</option>
                <option>Cloud Migration</option>
                <option>Business Analysis</option>
                <option>AI Integration</option>
                <option>Training</option>
              </select>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message *"
                rows={5}
                className="rounded-[12px] border border-black/10 p-4 text-[14px] resize-none"
              />
              <button
                onClick={handleWhatsAppSubmit}
                className="h-12 rounded-[12px] bg-[#25D366] text-white font-semibold text-[14px] inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={18} /> Send via WhatsApp
              </button>
              <button
                onClick={openDirectWhatsApp}
                className="h-11 rounded-[12px] border border-black/10 text-[13px] font-semibold inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </button>
              <div className="text-[11px] opacity-60 text-center">
                This will open WhatsApp to chat directly — no data stored on
                server.
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        onClick={openDirectWhatsApp}
        className="fixed bottom-5 right-5 w-[56px] h-[56px] rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] grid place-items-center"
      >
        <WhatsAppIcon size={28} />
      </button>
    </div>
  );
}
