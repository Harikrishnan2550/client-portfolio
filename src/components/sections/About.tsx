"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* LEFT SIDE — IMAGE + CAPTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/hero.webp"
            alt="Architect"
            className="w-full h-[55vh] md:h-[70vh] object-cover"
          />

          <p className="mt-6 font-serif text-xl md:text-2xl">
            Philadelphia , United States
          </p>
        </motion.div>

        {/* RIGHT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif italic text-3xl md:text-4xl mb-8">
            Architect
          </h3>

          <p className="text-lg md:text-2xl leading-relaxed">
            Born and Raised in Kochi, India, I pursued my B.Arch from Rizvi College
            of Architecture, Mumbai before pursuing my M.S Arch from Virginia Tech.
            I’m an Architect who leaves careful, intentional details on every
            project I touch. From Adaptive Reuse to ground up concepts, I’m
            inspired by people, cities, and the stories spaces quietly hold.
          </p>

          <p className="mt-8 text-lg md:text-2xl">
            I’m currently available for consulting engagements.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
