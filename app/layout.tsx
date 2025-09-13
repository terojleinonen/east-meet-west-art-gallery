// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "East Meets West Gallery",
  description: "Fine Japanese & Chinese art in the heart of London",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={
          inter.className +
          " bg-stone-100 text-stone-900 dark:bg-stone-900 dark:text-stone-100 antialiased"
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}