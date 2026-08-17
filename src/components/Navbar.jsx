"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Education", path: "#education" },
    { name: "Certificates", path: "#certificates" },
    { name: "About Me", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact me", path: "#contact" },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = path.replace("#", "");
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });

    // Education section ke liye animation trigger karo
    if (id === "education") {
      gsap.fromTo(
        "#education .education-heading",
        { y: 50, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }
      );
      gsap.fromTo(
        "#education .education-content",
        { y: 45, opacity: 0, scale: 0.97, filter: "blur(4px)" },
        { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.35, ease: "power3.out", delay: 0.3 }
      );
    }

    if (id === "certificates") {
      gsap.fromTo(
        ".cert-heading",
        { y: 40, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".cert-card",
        { x: -120, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.15, delay: 0.3 }
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-[1320px] mx-auto px-5 md:px-7 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Hem<span>lata</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={
                item.name === "Contact me"
                  ? "px-5 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/30"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-black/95 backdrop-blur-xl flex flex-col items-center gap-6 py-6 border-t border-white/10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={
                item.name === "Contact me"
                  ? "px-5 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300"
                  : "text-gray-300 hover:text-cyan-400 text-lg transition duration-300"
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}