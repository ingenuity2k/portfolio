"use client";

import { useState } from "react";

export default function SideElements() {
  const [emailHover, setEmailHover] = useState(false);

  return (
    <>
      {/* Left side — email */}
      <div className="hidden lg:flex fixed bottom-0 left-0 w-[200px] flex-col items-center gap-6 pb-[90px] z-[60]">
        <a
          href="mailto:marcel@ingenuity.dev"
          onMouseEnter={() => setEmailHover(true)}
          onMouseLeave={() => setEmailHover(false)}
          className="inline-block font-mono text-xs tracking-widest transition-colors duration-200"
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            color: emailHover ? "#7dd3fc" : "#a8b2d1",
          }}
        >
          marcel@ingenuity.dev
        </a>
        <div className="w-[1px] h-[90px] bg-slate" />
      </div>

      {/* Right side — social icons */}
      <div className="hidden lg:flex fixed bottom-0 right-10 w-auto flex-col items-center gap-5 after:content-[''] after:block after:w-[1px] after:h-[90px] after:bg-slate after:mt-5 z-[60]">
        <a
          href="https://github.com/ingenuity2k"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-light hover:text-green hover:translate-y-[-2px] transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </>
  );
}
