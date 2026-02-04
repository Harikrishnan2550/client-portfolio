"use client";

import { motion } from "framer-motion";

const clients = [
  {
    role: "Architect",
    year: "2019 – 2020",
    title: "Architect Hafeez Contractor",
    subtitle: "CIDCO",
  },
  {
    role: "Architect",
    year: "2020 – 2021",
    title: "Silpi Architects",
    subtitle: "Luxury Single Residence Homes & Villas",
  },
  {
    role: "Architectural Designer",
    year: "2022",
    title: "M Group Architects",
    subtitle: "BAE Systems, Falls Church VA",
  },
  {
    role: "Architectural Designer",
    year: "2023 – 2025",
    title: "Ionic Dezign Studios",
    subtitle: "Tim Hortons, Wendy’s, Midtown Yoga, The Language Group",
  },
  {
    role: "Architectural Designer",
    year: "2025 – Present",
    title: "Lenhardt Rodgers",
    subtitle: "Confidential",
  },
];

export default function ClientList() {
  return (
    <section className="py-4 md:py-16 px-6 md:px-24">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-serif italic text-5xl md:text-7xl mb-16 md:mb-32"
      >
        Client List
      </motion.h2>

      <div className="space-y-28">
        {clients.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
          >
            {/* LEFT SIDE — DELICATE META TEXT */}
            <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-400 leading-relaxed">
              <p>{item.role}</p>
              <p className="mt-1">{item.year}</p>
            </div>

            {/* RIGHT SIDE — HERO TYPOGRAPHY */}
            <div>
              <h3 className="font-serif text-4xl md:text-8xl leading-[1.05]">
                {item.title}
              </h3>

              <p className="mt-6 text-base md:text-xl text-gray-500 max-w-3xl">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
