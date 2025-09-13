//`components/Footer.tsx`

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-2 text-white">East Meets West Gallery</h3>
          <p className="text-sm text-stone-400">Bond Street, London · Fine Japanese & Chinese Art</p>
        </div>
        <div className="flex md:justify-end gap-4 text-stone-400">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">WeChat</a>
        </div>
      </div>
      <div className="text-center text-xs text-stone-500 mt-6">
        © {new Date().getFullYear()} East Meets West Gallery. All rights reserved.
      </div>
    </footer>
  );
}