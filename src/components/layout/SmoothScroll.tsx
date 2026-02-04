"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🔥 ignore elements with data-lenis-prevent
    lenis.on("scroll", () => {});

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
