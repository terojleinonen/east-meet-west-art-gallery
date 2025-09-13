//`components/Exhibitions.tsx`

import exhibitions from "../data/exhibitions.json";
import Image from "next/image";

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="font-serif text-3xl md:text-4xl mb-8">Exhibitions</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {exhibitions.map((ex) => (
          <article
            key={ex.title}
            className="bg-white rounded-2xl shadow border border-stone-200 overflow-hidden"
          >
            <Image
              src={ex.image}
              alt={ex.title}
              width={ex.width}
              height={ex.height}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif text-xl mb-2">{ex.title}</h3>
              <p className="text-sm text-stone-600 mb-3">{ex.date}</p>
              <p className="text-stone-700 text-base">{ex.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}