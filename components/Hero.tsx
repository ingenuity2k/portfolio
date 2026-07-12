"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-green text-base mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-off-white font-bold text-5xl sm:text-6xl md:text-7xl leading-tight"
        >
          Marcel <span className="text-green">//</span> ingenuity2k
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mt-2"
        >
          I build Hard- and Software things.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate max-w-xl mt-6 text-lg leading-relaxed"
        >
          I&apos;m a software developer specializing in creating stuff beyond just code. 
          The space where the digital meets the physical world is where I like to dwell.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <a
            href="#work"
            className="inline-block border border-green text-green font-mono text-sm px-8 py-4 rounded hover:bg-green-tint transition-colors duration-200"
          >
            Check out my projects!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
