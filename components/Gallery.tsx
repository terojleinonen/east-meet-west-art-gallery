// components/Gallery.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import data from "@/data/artworks.json";

type Artwork = {
  id: number;
  title: string;
  artist: string;
  year: string | number;
  image: string;
  width: number;
  height: number;
  primaryColor: string;
  secondaryColor: string;
};

export default function Gallery() {
  const { artworks } = data as { artworks: Artwork[] };

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // auto rotate
  useEffect(() => {
    const interval = setInterval(() => triggerNext(), 8000);
    return () => clearInterval(interval);
  }, [index]);

  const changeSlide = (newIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(true);
    }, 500);
  };

  const triggerNext = () => changeSlide((index + 1) % artworks.length);
  const triggerPrev = () => changeSlide((index - 1 + artworks.length) % artworks.length);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") triggerNext();
      else if (e.key === "ArrowLeft") triggerPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const featured = artworks[index];

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background crossfade */}
      <div className="absolute inset-0">
        {artworks.map((art, i) => (
          <div key={art.id} className="absolute inset-0">
            <Image
              src={art.image}
              alt={art.title}
              width={art.width}
              height={art.height}
              priority={i === 0}
              className={`object-cover transition-opacity duration-[2000ms] ${
                i === index ? "opacity-60" : "opacity-0"
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Overlay text */}
      <div
        className={`relative z-10 text-white px-6 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">{featured.title}</h2>
        <p className="italic">{featured.artist} ({featured.year})</p>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={triggerPrev}
        aria-label="Previous"
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20 transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={triggerNext}
        aria-label="Next"
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20 transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {artworks.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              i === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
// components/Gallery.tsx