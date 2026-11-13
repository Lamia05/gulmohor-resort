
import { Camera } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900",
      alt: "Beautiful resort",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
      alt: "Resort swimming pool",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900",
      alt: "Nature and wooden cottage",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900",
      alt: "Green resort surroundings",
    },
  ];

  return (
    <section id="gallery" className="bg-[#f0eee5] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex justify-center">
            <Camera size={30} className="text-[#b18a53]" />
          </div>

          <p className="text-sm font-bold uppercase tracking-[4px] text-[#b18a53]">
            Our Gallery
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#284a36] md:text-5xl">
            Discover The Beauty
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
            Explore beautiful views and peaceful moments
            through our gallery.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
