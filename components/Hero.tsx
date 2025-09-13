// components/Hero.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import data from "@/data/artworks.json";

type HeroImage = {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  primaryColor: string;
  secondaryColor: string;
};

export default function Hero() {
  const { heroImage } = data as { heroImage: HeroImage };

  // Set brush accent colors on mount
  useEffect(() => {
    if (heroImage) {
      document.documentElement.style.setProperty("--brush-primary", heroImage.primaryColor);
      document.documentElement.style.setProperty("--brush-secondary", heroImage.secondaryColor);
    }
  }, [heroImage]);

  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImage.image}
          alt={heroImage.title}
          width={heroImage.width}
          height={heroImage.height}
          priority
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Text overlay */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{heroImage.title}</h1>
        <p className="text-lg italic">{heroImage.description}</p>
      </div>
    </section>
  );
}