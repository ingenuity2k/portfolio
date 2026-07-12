"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Jimo",
    description:
      "A gig marketplace app connecting workers with employers. Built with React Native and Supabase, featuring real-time matching, job listings, map views, worker pools, and an employer dashboard. Currently in development for Android.",
    tech: ["React Native", "TypeScript", "Supabase", "PostgreSQL", "Expo"],
    github: "https://github.com/cyha96/jimo",
    image: "/jimo-logo.svg",
  },
  {
    title: "Riftbound Tracker",
    description:
      "A mobile companion app for the Riftbound TCG. Scan cards with your camera to build your collection, track prices in real-time, and build decks with an integrated deck builder. Backed by a custom price-scraping pipeline.",
    tech: ["React Native", "Supabase", "TypeScript", "Edge Functions"],
    github: "https://github.com/ingenuity2k/riftbound-tracker",
  },
  {
    title: "Pantri",
    description:
      "A grocery and pantry inventory app with barcode scanning, expiry alerts, and smart shopping lists. Designed to reduce food waste and keep your kitchen organized. Freemium model with subscription tier.",
    tech: ["React Native", "Supabase", "TypeScript", "Expo"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24">
      <ScrollReveal>
        <h2 className="section-heading mb-16">Things I&apos;ve Built</h2>
      </ScrollReveal>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title}>
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center ${
                i % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative group">
                  <div className="aspect-video bg-navy-light rounded overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      project.image.endsWith(".svg") ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-4/5 h-4/5 object-contain"
                        />
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      )
                    ) : (
                      <div className="text-6xl opacity-20">{"{ }"}</div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-green/5 rounded group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="font-mono text-green text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-off-white text-2xl font-bold mb-4">
                  {project.external ? (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <div className="bg-navy-light rounded p-6 mb-4">
                  <p className="text-slate text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-sm text-slate ${
                    i % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {project.github && (
                  <div
                    className={`mt-4 flex gap-4 ${
                      i % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-light hover:text-green transition-colors"
                      aria-label="GitHub"
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
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
