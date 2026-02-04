"use client";

import { motion } from "framer-motion";

export default function Personal() {
  return (
    <section className="py-24 md:py-16 px-6 md:px-24">
      <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-start">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[60vh] md:h-[85vh]"
        >
          <img
            src="/personal.webp"
            alt="Personal"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT — TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-2xl leading-relaxed">
            When I’m not designing or consulting, you’ll usually find me at my
            local parish—St. Katherine of Siena in Wayne, PA—helping out however
            I can. I love shooting on film and developing it myself, and my
            travels constantly spark new creative projects that I’m excited to
            share here soon.
          </p>

          <p className="mt-8 text-lg md:text-2xl leading-relaxed">
            I’m a member at AIA Pennsylvania, an avid philatelist and founder &
            CEO of ATMA.
          </p>

          <p className="mt-10 font-serif text-xl md:text-2xl">
            Commercial folio available upon request.
          </p>

          <p className="mt-10 md:mt-[330px] font-serif text-xl md:text-2xl"> Charlie’s Cafe, Norfolk, Virginia</p>
        </motion.div> 

      </div>
    </section>
  );
}
