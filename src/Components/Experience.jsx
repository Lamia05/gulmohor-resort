
import { Leaf, Heart, Users, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <Leaf size={30} />,
      title: "Peaceful Moments",
      description:
        "Take a break from your busy routine and enjoy a refreshing atmosphere.",
    },
    {
      icon: <Heart size={30} />,
      title: "Beautiful Memories",
      description:
        "Make every moment special with the people who matter most.",
    },
    {
      icon: <Users size={30} />,
      title: "Family Time",
      description:
        "Spend quality time together and enjoy meaningful moments.",
    },
    {
      icon: <Sparkles size={30} />,
      title: "Relax & Refresh",
      description:
        "Give yourself time to relax, recharge and reconnect with nature.",
    },
  ];

  return (
    <section className="bg-[#faf9f5] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#b18a53]">
            Your Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#284a36] md:text-5xl">
            Make Every Moment Special
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Enjoy meaningful moments, peaceful surroundings
            and memorable experiences at Gulmohor Resort.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0eee5] text-[#b18a53]">
                {item.icon}
              </div>

              <h3 className="mb-4 text-xl font-bold text-[#284a36]">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
