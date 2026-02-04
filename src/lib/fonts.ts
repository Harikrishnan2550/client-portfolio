import { Playfair_Display, Inter } from "next/font/google";

export const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
