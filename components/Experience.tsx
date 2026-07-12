"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Job {
  company: string;
  role: string;
  range: string;
  url: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "Vakarys LTD",
    role: "Software Engineer",
    range: "2024 — Present",
    url: "#",
    bullets: [
      "Self-employed software engineer running my own company",
      "Building products, tools, and client solutions end-to-end",
      "Full ownership of architecture, development and delivery",
    ],
  },
  {
    company: "Puzzle ITC",
    role: "Software Engineer",
    range: "2022 — 2023",
    url: "https://puzzle.ch",
    bullets: [
      "Building and maintaining CI/CD pipelines for enterprise clients",
      "Delivering mandate-based projects for Swisscom, Mobiliar and Adcubum",
      "Assisted clients to migrate their software landscape to container architecture",
    ],
  },
  {
    company: "NTS Workspace",
    role: "Software Engineer",
    range: "2020 — 2021",
    url: "https://nts.ch",
    bullets: [
      "Full-stack development of internal business software",
      "Administration of internal server architecture and infrastructure",
      "Worked with Golang, Elastic stack and Angular",
    ],
  },
  {
    company: "SPOUD",
    role: "Software Engineer",
    range: "2017 — 2020",
    url: "https://www.spoud.io",
    bullets: [
      "Product owner for Storalytics, a retail analytics platform",
      "Full-stack development, network administration and DevOps",
      "Contributed to data science projects and analytics tooling",
    ],
  },
  {
    company: "soom-it",
    role: "Junior Software Engineer",
    range: "2013 — 2017",
    url: "https://www.linkedin.com/company/soom-it",
    bullets: [
      "Full-stack development alongside 4-year apprenticeship (Informatiker EFZ)",
      "Focus on backend, mobile applications and Hardware development",
      "Graduated the apprenticeship in 2017",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24">
      <ScrollReveal>
        <h2 className="section-heading mb-12">Where I&apos;ve Worked</h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col md:flex-row">
          {/* Tab buttons */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible mb-4 md:mb-0 md:mr-6 shrink-0">
            {jobs.map((job, i) => (
              <button
                key={`${job.company}-${job.range}`}
                onClick={() => setActiveTab(i)}
                className={`relative whitespace-nowrap px-5 py-3 font-mono text-sm text-left transition-colors duration-200 min-w-[140px] ${
                  activeTab === i
                    ? "text-green"
                    : "text-slate hover:text-off-white hover:bg-navy-light/50"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 bottom-0 md:bottom-auto md:top-0 w-full md:w-[2px] h-[2px] md:h-full bg-green"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {job.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-off-white text-xl font-medium">
                  {jobs[activeTab].role}{" "}
                  {jobs[activeTab].url !== "#" ? (
                    <a
                      href={jobs[activeTab].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green hover:underline"
                    >
                      @ {jobs[activeTab].company}
                    </a>
                  ) : (
                    <span className="text-green">
                      @ {jobs[activeTab].company}
                    </span>
                  )}
                </h3>
                <p className="font-mono text-sm text-slate mt-1 mb-6">
                  {jobs[activeTab].range}
                </p>
                <ul className="space-y-4">
                  {jobs[activeTab].bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-slate">
                      <span className="text-green mt-1.5 text-xs">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
