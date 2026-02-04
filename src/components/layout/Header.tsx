"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        px-6 md:px-20 py-6
        flex justify-between items-start
        transition-all duration-500
        ${scrolled
          ? "backdrop-blur-md bg-white/30 border-b border-white/20"
          : "bg-transparent"}
      `}
    >
      {/* LEFT — NAME */}
      <Link
        href="/"
        className="font-serif text-lg md:text-5xl tracking-wide"
      >
        ABEL PETER
      </Link>

      {/* RIGHT — NAV LINKS */}
      <nav className="flex gap-8 md:gap-12 text-base md:text-4xl">
        <a href="#about" className="hover:opacity-70 transition">
          Info
        </a>
        <a href="#works" className="hover:opacity-70 transition">
          Select Works
        </a>
      </nav>
    </header>
  );
}
