"use client";

import ScrollReveal from "./ScrollReveal";

const techStack = [
  "React Native",
  "TypeScript",
  "Next.js",
  "CI/CD",
  "Node.js",
  "ElasticSearch",
  "Docker",
  "PostgreSQL",
  "Supabase",
  "MicroPython"
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <ScrollReveal>
        <h2 className="section-heading mb-12">About Me</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <ScrollReveal className="lg:col-span-3">
          <div className="space-y-4 text-slate text-base leading-relaxed">
            <p>
              I started my career in tech back in 2013 with a 4-year
              apprenticeship as a Software Developer (Informatiker EFZ) in Bern, Switzerland.
              What began as building web applications for clients quickly turned
              into a deep passion for full-stack development, DevOps and
              everything in between.
            </p>
            <p>
              Over the past 10+ years, I&apos;ve worked across startups and
              enterprise environments — from product ownership and data science
              at{" "}
              <a href="https://www.spoud.io" target="_blank" rel="noopener noreferrer" className="text-green font-mono text-sm hover:underline">SPOUD</a>,
              to building internal tools at{" "}
              <a href="https://nts.ch" target="_blank" rel="noopener noreferrer" className="text-green font-mono text-sm hover:underline">
                NTS Workspace
              </a>,
              to CI/CD and client projects for Clients like Swisscom, Mobiliar and
              Adcubum at{" "}
              <a href="https://puzzle.ch" target="_blank" rel="noopener noreferrer" className="text-green font-mono text-sm hover:underline">
                Puzzle ITC
              </a>
              .
            </p>
            <p>
              These days I&apos;m focused on building reliable, well-crafted
              software — and side projects that scratch my own itches. When
              I&apos;m not coding, you&apos;ll find me on my motorcycle or snowboard,
              reading, or learning a new language.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <ul className="grid grid-cols-2 gap-2 mt-6">
            {techStack.map((tech) => (
              <li key={tech} className="flex items-center gap-2 font-mono text-sm text-slate-light">
                <span className="text-green text-xs">▸</span>
                {tech}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-2" delay={0.2}>
          <div className="relative group mx-auto max-w-xs lg:max-w-none">
            <div className="relative rounded overflow-hidden">
              <div className="aspect-square bg-navy-light rounded flex items-center justify-center">
                <img
                  src="/me.png"
                  alt="Marcel Baur"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="absolute inset-0 bg-green/10 rounded mix-blend-multiply group-hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
