
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BarChart3, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links
        .map((link) => document.getElementById(link.href.slice(1)))
        .filter((section): section is HTMLElement => section !== null);

      let current = "home";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-lagoon/20 bg-white/95 shadow-lg backdrop-blur-xl"
          : "border-lagoon/10 bg-cream/95 backdrop-blur-lg"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8"
      >
        {/* Logo */}
        <Link
          href="/#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lagoon text-white shadow-md transition duration-300 group-hover:-rotate-6 group-hover:bg-meadow group-hover:text-charcoal">
            <BarChart3 size={23} strokeWidth={2.3} />
          </span>

          <span className="font-display text-base font-bold tracking-tight text-charcoal md:text-lg">
            Khazanatul Arzaq
            <span className="text-berry">.</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.19em] text-lagoon">
              Data Analytics Portfolio
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;

            return (
              <li key={link.label}>
                <Link
                  href={`/${link.href}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative block whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-lagoon text-white shadow-md"
                      : "text-charcoal hover:bg-meadow/20 hover:text-lagoon"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blossom" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contact shortcut */}
        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-full bg-berry px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-lagoon md:inline-flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={15} />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-lagoon/20 bg-white text-lagoon transition hover:bg-meadow/20 lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-lagoon/10 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-5 py-4">
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;

            return (
              <li key={link.label}>
                <Link
                  href={`/${link.href}`}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-lagoon text-white"
                      : "bg-cream text-charcoal hover:bg-meadow/25 hover:text-lagoon"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>n
      </div>
    </header>
  );
}
