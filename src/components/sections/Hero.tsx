"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 md:px-20 pt-40 overflow-hidden">

      {/* Mobile layout – unchanged */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center text-center">
          {/* PORTFOLIO - top */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-[15vw] leading-none mb-6"
          >
            PORTFOLIO
          </motion.h1>

          {/* Centered image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full max-w-[90vw] aspect-[3/4] mb-6"
          >
            <img
              src="/hero.webp"
              alt="Architect"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          {/* PORTFOLIO - bottom */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-[12vw] leading-none mb-8"
          >
            ARCHITECTURE
          </motion.h1>

          {/* Name & role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mb-8"
          >
            <p className="font-serif text-2xl">Abel Peter</p>
            <p className="text-xl text-neutral-600">Architect</p>
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className=" text-lg leading-relaxed space-y-8"
          >
            <p>
              I’m Abel, an Architect based in Philadelphia. I’ve always loved telling
              stories through spaces, and design has become the way I bring those
              stories to life.
            </p>

            <p>
              I’ve lived in the world of design for years, translating culture,
              memory, and space into work that feels both grounded and imaginative.
              I’ve created, adapted, reimagined, restored and rethought projects in
              India and the United States.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Desktop layout – with split paragraphs */}
      <div className="hidden md:block ">
        {/* ===== IMAGE (CENTER RIGHT) ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute right-0 top-40 md:top-[270px] w-[65%] md:w-[50%] h-[55vh] md:h-[75vh] z-10"
        >
          <img
            src="/hero.webp"
            alt="Architect"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ===== BIG BACK TEXT (PORTFOLIO) ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-[26vw] md:text-[17vw] leading-[0.5] relative z-20"
        >
          PORTFOLIO
        </motion.h1>

        {/* ===== BIG FRONT TEXT (ARCHITECTURE) ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-serif text-[26vw] md:text-[16vw] leading-[2.2] -mt-[5vw] relative z-0"
        >
          ARCHITECTURE
        </motion.h1>

        {/* ===== NAME + ROLE ===== */}
        <div className="mt-16 relative z-20">
          <p className="font-serif text-2xl md:text-3xl">Abel Peter</p>
          <p className="text-lg md:text-xl">Architect</p>
        </div>

        {/* ===== SPLIT INTRO TEXT – two columns with vertical line ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 relative z-20 grid md:grid-cols-2 gap-20 max-w-8xl mx-auto"
        >
          {/* Left paragraph */}
          <div className="text-lg md:text-2xl leading-relaxed">
            <p>
              I’m Abel, an Architect based in Philadelphia. I’ve always loved telling
              stories through spaces, and design has become the way I bring those
              stories to life.
            </p>
          </div>

          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-300 transform -translate-x-1/2" />

          {/* Right paragraph */}
          <div className="text-lg md:text-2xl leading-relaxed">
            <p>
              I’ve lived in the world of design for years, translating culture,
              memory, and space into work that feels both grounded and imaginative.
              I’ve created, adapted, reimagined, restored and rethought projects in
              India and the United States.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}