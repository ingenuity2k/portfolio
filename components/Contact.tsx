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
            className="inline-flex items-center gap-2 border border-green text-green font-mono text-sm px-10 py-4 rounded hover:bg-green-tint transition-colors duration-200"
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
      </ScrollReveal>
    </section>
  );
}
