"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Draper Estate",
    image: "/work1.webp",
  },
  {
    title: "Old Virginia Motors Building",
    image: "/work2.webp",
  },
  {
    title: "Charlie’s Cafe",
    image: "/work3.webp",
  },
];

export default function Works() {
  return (
    <section className="py-16 md:py-28 px-6 md:px-24">

      {/* SECTION TITLE */}
      <h2 className="font-serif italic text-4xl md:text-5xl mb-20">
        Select Works
      </h2>

      <div className="grid md:grid-cols-3 gap-16 md:gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[35vh] md:h-[45vh] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <h3 className="mt-8 font-serif text-2xl md:text-3xl">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
