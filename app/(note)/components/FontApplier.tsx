"use client";

import { useEffect,} from "react";
import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
});
const sourceCodePro = Source_Code_Pro({
  variable: "--font-monospace",
  subsets: ["latin"],
});

export default function FontApplier() {
  useEffect(() => {
    const preferredFont = localStorage.getItem("preferredFont") || "sans";
    if (preferredFont === "sans") {
      document.body.classList.remove(notoSerif.className, sourceCodePro.className);
      document.body.classList.add(inter.className);
    } else if (preferredFont === "serif") {
      document.body.classList.remove(inter.className, sourceCodePro.className);
      document.body.classList.add(notoSerif.className);
    } else if (preferredFont === "monospace") {
      document.body.classList.remove(notoSerif.className, inter.className);
      document.body.classList.add(sourceCodePro.className);
    }
  }, []);

  return null;
}
