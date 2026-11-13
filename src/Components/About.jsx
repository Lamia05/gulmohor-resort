
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-[#faf9f5] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* About Content */}
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-[#b18a53]">
            About Gulmohor
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#284a36] md:text-5xl">
            A Peaceful Escape From Everyday Life.
          </h2>

          <p className="mt-7 leading-8 text-gray-600">
            Welcome to Gulmohor Resort, Munshiganj.
            Discover a refreshing place to relax, spend
            quality time with family and friends, and enjoy
            a peaceful atmosphere away from your busy routine.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Take a break from everyday life and create
            beautiful memories with your loved ones.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#284a36] px-8 py-4 font-semibold text-white transition hover:bg-[#b18a53]"
          >
            Contact Us
            <ArrowRight size={18} />
          </a>
        </div>

        {/* About Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000"
            alt="Beautiful resort view"
            className="h-[430px] w-full rounded-2xl object-cover shadow-xl"
          />

          <div className="absolute -bottom-6 -left-5 hidden rounded-xl bg-[#b18a53] p-6 text-white md:block">
            <h3 className="text-3xl font-bold">Relax</h3>
            <p className="text-sm">Refresh & Reconnect</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
