"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "whoami", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <header className="hidden md:flex fixed top-0 left-0 h-screen w-[100px] lg:w-[200px] flex-col items-center lg:items-start justify-between py-10 px-4 lg:px-10 z-50">
        <Link href="/">
          <img src="/avatar.png" alt="Marcel Baur" className="w-10 h-10 rounded-full border border-navy-lightest hover:border-green transition-colors duration-200" />
        </Link>

        <nav className="flex flex-col gap-6">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 text-slate-light text-sm font-mono hover:text-green transition-colors duration-200"
            >
              <span className="text-green text-xs font-mono">
                {String(i).padStart(2, "0")}.
              </span>
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="text-xs text-slate font-mono hidden lg:block">
          &copy; 2026
        </div>
      </header>

      {/* Mobile header */}
      <header
        className={`md:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-navy/90 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <img src="/avatar.png" alt="Marcel Baur" className="w-8 h-8 rounded-full" />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-green origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-green"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-green origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-navy/95 backdrop-blur-md z-40 flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col items-center text-off-white text-2xl font-sans hover:text-green transition-colors"
                  >
                    <span className="text-green text-sm font-mono mb-1">
                      {String(i).padStart(2, "0")}.
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 mt-4"
              >
                <a
                  href="https://github.com/ingenuity2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-light hover:text-green hover:translate-y-[-2px] transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/marcelbaur"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-light hover:text-green hover:translate-y-[-2px] transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
