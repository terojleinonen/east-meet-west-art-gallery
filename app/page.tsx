// app/page.tsx

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Exhibitions from "../components/Exhibitions";
import BookViewing from "../components/BookViewing";

export default function Home() {
  return (
    <main className="bg-stone-100 text-stone-900 antialiased">
      <Hero />
      <Gallery />
      <About />
      <Exhibitions />
      <BookViewing />
    </main>
  );
}