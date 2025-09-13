//`components/About.tsx`

import owner from "@/data/owner.json";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <Image
            src={owner.image}
            alt={owner.name}
            width={owner.width}
            height={owner.height}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">About the Owner</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">{owner.bio}</p>
          <blockquote className="italic text-stone-600 border-l-4 border-stone-400 pl-4">
            “{owner.quote}”
          </blockquote>
        </div>
      </div>
    </section>
  );
}