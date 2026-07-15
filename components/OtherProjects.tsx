"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface MiniProject {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
  span?: number;
}

const miniProjects: MiniProject[] = [
  {
    title: "CYD GitHub Ticker",
    description:
      "An ESP32 Cheap Yellow Display showing your GitHub contributions heatmap on your desk. Touch-navigable views (3M/6M/Year), avatar display, ASCII art refresh screen, and year stats. Powered by a Vercel backend that proxies the GitHub API.",
    tech: ["ESP32", "Arduino", "C++", "Vercel", "GitHub API"],
    github: "https://github.com/ingenuity2k/cyd-github-ticker",
    image: "/cyd-photo.jpg",
    span: 2,
  },
  {
    title: "MiMo Monitor Display",
    description:
      "Physical desk monitor for Xiaomi MiMo API token usage. Shows live credit consumption, burn rate, balance, and quota progress on a CYD ESP32 board. Supabase backend scrapes the MiMo API on a schedule and the display reads it over WiFi.",
    tech: ["ESP32", "LVGL", "Supabase", "Deno", "Arduino"],
    github: "https://github.com/ingenuity2k/mimo-monitor-display",
    image: "/mimo-display.jpg",
  },
];

export default function OtherProjects() {
  return (
    <section className="py-24">
      <ScrollReveal>
        <h2 className="text-off-white text-2xl font-semibold text-center mb-4">
          Other Noteworthy Projects
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {miniProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className={`h-full ${project.span === 2 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className={`h-full bg-navy-light rounded flex flex-col border border-navy-lightest hover:border-green/20 transition-colors duration-300 group overflow-hidden`}>
                {project.image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-off-white text-lg font-semibold group-hover:text-green transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-light hover:text-green transition-colors"
                          aria-label="GitHub"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-light hover:text-green transition-colors"
                          aria-label="External link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-light mt-auto">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
