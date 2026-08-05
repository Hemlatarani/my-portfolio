"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-[1320px] mx-auto px-5 md:px-7 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-900 to-cyan-900 bg-clip-text text-transparent"
        >
          Hem<span>lata</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
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
              onClick={() => setMenuOpen(false)}
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