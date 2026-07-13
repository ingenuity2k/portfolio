"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <ScrollReveal>
        <p className="font-mono text-green text-sm mb-4">04. What&apos;s Next?</p>
        <h2 className="text-off-white text-4xl md:text-5xl font-bold mb-6">
          Get In Touch
        </h2>
        <p className="text-slate leading-relaxed mb-10 max-w-lg mx-auto">
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try to get back to you asap. And if you like what I create, 
          feel free to support me. Thanks :)
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:marcel@ingenuity.dev"
            className="inline-block border border-green text-green font-mono text-sm px-10 py-4 rounded hover:bg-green-tint transition-colors duration-200"
          >
            Send me an e-mail
          </a>
          <a
            href="https://buymeacoffee.com/ingenuity2k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-green text-green font-mono text-sm px-10 py-4 rounded hover:bg-green-tint transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
            Buy me a coffee
          </a>
        </div>

        {/* Social icons — visible on mobile/tablet, hidden on desktop (side rail handles it) */}
        <div className="flex lg:hidden justify-center gap-6 mt-12">
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
              className="w-6 h-6"
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
              className="w-6 h-6"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
