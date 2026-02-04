"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// Dynamically import to skip type evaluation
const FlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false,
}) as ComponentType<any>;

export default FlipBook;
