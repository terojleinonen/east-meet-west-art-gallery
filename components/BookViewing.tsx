//`components/BookViewing.tsx`

export default function BookViewing() {
  return (
    <section id="contact" className="bg-stone-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Book a Private Viewing</h2>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-stone-300 rounded-xl p-3 focus:ring-2 focus:ring-stone-600"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-stone-300 rounded-xl p-3 focus:ring-2 focus:ring-stone-600"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="border border-stone-300 rounded-xl p-3 focus:ring-2 focus:ring-stone-600"
          />
          <button
            type="submit"
            className="bg-stone-900 text-white rounded-xl px-6 py-3 font-medium hover:bg-stone-700 transition"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}