import type { Metadata } from "next";
import "./globals.css";
import FontApplier from "../app/(note)/components/FontApplier";
import ThemeApplier from "./(note)/components/ThemeApplier";

export const metadata: Metadata = {
  title: "Note taking app",
  description: "Frontend Mentor Advance Level Challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` antialiased relative h-dvh`}>
        <FontApplier />
        <ThemeApplier />
        {children}
      </body>
    </html>
  );
}
