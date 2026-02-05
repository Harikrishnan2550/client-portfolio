"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const BookViewer = dynamic(() => import("../book/BookViewer"), {
  ssr: false,
});

export default function Booklet() {
  return (
    <section
      className="py-12 md:py-24 px-6 md:px-20 text-center"
      style={{
        minHeight: "120vh",     // ← locks height so browser doesn’t recalc
        contain: "layout style", // ← prevents flip DOM from affecting page layout
      }}
    >
      <h2 className="font-serif italic text-5xl md:text-7xl mb-12">
        Project Monograph
      </h2>

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-500 mb-16">
        Drawings, spatial studies, and narrative documentation presented as
        a digital architecture book.
      </p>

      <BookViewer />
    </section>
  );
}
