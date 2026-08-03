"use client";

import Link from "next/link";

export default function Navbar() {
  const navLinks = [
  
    { name: "Education", path: "#education" },
    { name: "Certificates", path: "#certificates" },
    { name: "About Me", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
   { name: "Contact me", path: "#contact" },

  ];

  return (
    <>
     <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-[1320px] mx-auto px-7 py-4 flex items-center justify-between ">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-900 bg-clip-text text-transparent">
          Hem<span className="">lata</span>
        </Link>

        {/* Menu */}
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

        {/* Buttons */}
        

      </div>
    </header>
    </>
   
  );
}