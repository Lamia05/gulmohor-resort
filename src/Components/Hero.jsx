
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=2000')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[5px] text-[#e6c99c]">
          Welcome to Gulmohor Resort
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Escape the Ordinary,
          <br />
          Embrace Nature.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
          Find peace, enjoy nature and create beautiful memories
          with your family and loved ones.
        </p>

        <a
          href="#about"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#b18a53] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#284a36]"
        >
          Explore Resort
          <ArrowRight size={18} />
        </a>

      </div>
    </section>
  );
};

export default Hero;
