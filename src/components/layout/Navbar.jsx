import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const MOBILE_LINKS = [{ id: "home", label: "Overview" }, ...LINKS];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const panel = useRef(null);
  const route = useNavigate();
  const reduce = useReducedMotion();
  useEffect(() => {
    let queued = false;
    const update = () => {
      setScrolled(window.scrollY > 12);
      const marker = window.innerHeight * 0.35;
      let current = "";
      LINKS.forEach(({ id }) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= marker) current = id;
      });
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40
      )
        current = "contact";
      setActive(current || "work");
      queued = false;
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    const key = (e) => { if (e.key === "Tab" || e.key === "Enter" || e.key === " ") root.dataset.input = "keyboard"; };
    const ptr = () => { root.dataset.input = "pointer"; };
    document.addEventListener("keydown", key, true);
    document.addEventListener("pointerdown", ptr, true);
    return () => {
      document.removeEventListener("keydown", key, true);
      document.removeEventListener("pointerdown", ptr, true);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const before = document.body.style.overflow;
    const background = [...document.querySelectorAll("main, footer")].map(
      (node) => ({ node, inert: node.inert }),
    );
    background.forEach(({ node }) => {
      node.inert = true;
    });
    document.body.style.overflow = "hidden";
    const keyboardOpen = document.documentElement.dataset.input === "keyboard";
    if (keyboardOpen) panel.current.querySelector("a")?.focus();
    else panel.current.focus({ preventScroll: true });
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const nodes = [toggle.current, ...panel.current.querySelectorAll("a")];
      const index = nodes.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) {
        event.preventDefault();
        nodes.at(-1).focus();
      }
      if (!event.shiftKey && index === nodes.length - 1) {
        event.preventDefault();
        nodes[0].focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      background.forEach(({ node, inert }) => {
        node.inert = inert;
      });
      document.body.style.overflow = before;
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("resize", onResize);
    };
  }, [open]);
  const navigate = (event, id) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    event.preventDefault();
    setOpen(false);
    route({ hash: `#${id}` }, { preventScrollReset: true });
    requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      const heading = document.querySelector(`#${id} h1, #${id} h2`);
      heading?.setAttribute("tabindex", "-1");
      heading?.focus({ preventScroll: true });
    });
  };
  return (
    <header className={`site-header ${scrolled || open ? "is-solid" : ""} ${open ? "menu-is-open" : ""}`}>
      <nav className="nav-shell" aria-label="Primary">
        <a href="#home" className="brand" title="Back to top">
          <img src="/generated/ak-logo.webp" className="brand-mark" alt="Ahmed Karam" />
        </a>
        <ul className="desktop-navigation">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                onClick={(event) => navigate(event, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <span className="nav-availability">
            <i aria-hidden="true" />
            <span className="availability-label">Available for opportunities</span>
          </span>
          <span className="nav-divider" aria-hidden="true" />
          <a
            href="#contact"
            onClick={(event) => navigate(event, "contact")}
            className="nav-resume"
          >
            Let's talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <button
          ref={toggle}
          className="menu-toggle icon-button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div ref={panel} id="mobile-navigation" className="mobile-navigation" tabIndex={-1}>
          <ul>
            {MOBILE_LINKS.map(({ id, label }, index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => navigate(event, id)}
                  aria-current={active === id || (id === "home" && !active) ? "location" : undefined}
                >
                  <small aria-hidden="true">0{index + 1}</small>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="menu-availability">
            <i aria-hidden="true" />
            Available for opportunities
          </p>
          <div className="mobile-navigation-bottom">
            <div className="menu-socials">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={21} aria-hidden="true" /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={21} aria-hidden="true" /></a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail size={21} aria-hidden="true" /></a>
            </div>
            <a href="#contact" onClick={(event) => navigate(event, "contact")} className="button-primary">
              Get in Touch <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
