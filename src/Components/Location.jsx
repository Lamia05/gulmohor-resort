
import { MapPin, Navigation, Phone } from "lucide-react";

const Location = () => {
  return (
    <section
      id="location"
      className="bg-[#284a36] px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* Location Information */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#e6c99c]">
            Find Our Location
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Come and Visit
            <br />
            Gulmohor Resort
          </h2>

          <p className="mt-6 leading-8 text-white/75">
            Discover Gulmohor Resort in Munshiganj, Bangladesh.
            Find our location and plan your visit.
          </p>

          {/* Address */}
          <div className="mt-9 flex items-start gap-4">
            <MapPin className="mt-1 text-[#e6c99c]" size={24} />

            <div>
              <h3 className="font-semibold">Our Address</h3>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Munshiganj, Bangladesh, 1550
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="mt-6 flex items-center gap-4">
            <Phone className="text-[#e6c99c]" size={23} />

            <div>
              <h3 className="font-semibold">Phone Number</h3>
              <a
                href="tel:01911498819"
                className="mt-2 block text-sm text-white/70 hover:text-[#e6c99c]"
              >
                01911-498819
              </a>
            </div>
          </div>

          {/* Directions Button */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Gulmohor+Resort+Munshiganj"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#b18a53] px-8 py-4 font-semibold transition hover:bg-white hover:text-[#284a36]"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </div>

        {/* Google Map */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <iframe
            title="Gulmohor Resort Location"
            src="https://maps.google.com/maps?q=Gulmohor%20Resort%20Munshiganj&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
};

export default Location;
