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

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="/resume.pdf"
                target="_blank"
                className="mt-4 px-8 py-3 border border-green text-green font-mono text-sm rounded hover:bg-green-tint transition-colors"
              >
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
