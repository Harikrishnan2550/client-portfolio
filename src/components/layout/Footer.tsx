    "use client";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-20  flex flex-col md:flex-row justify-between gap-16 mb-16">
      {/* LEFT SIDE */}
      <div className="space-y-6">
        <p className="font-serif text-3xl md:text-5xl italic">
          Abel Peter
        </p>

        <p className="font-serif text-3xl md:text-5xl italic">
          hello@AbelPeter.com
        </p>

        <p className="text-sm md:text-base mt-20 font-semibold">
          Made with Winshine Infotech
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-end md:items-center gap-8 md:gap-12 text-lg md:text-4xl font-serif">
        <a href="#" className="underline hover:opacity-70 transition">
          Instagram
        </a>
        <a href="mailto:hello@AbelPeter.com" className="underline hover:opacity-70 transition">
          Email
        </a>
        <a href="#" className="underline hover:opacity-70 transition">
          Linkedin
        </a>
      </div>
    </footer>
  );
}
