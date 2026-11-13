
import { Phone,  MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#faf9f5] px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl bg-white p-10 text-center shadow-lg md:p-16">

          <p className="text-sm font-bold uppercase tracking-[4px] text-[#b18a53]">
            Get In Touch
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#284a36] md:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
            Have questions or planning a visit?
            Get in touch with Gulmohor Resort.
            We would love to hear from you.
          </p>

          {/* Contact Details */}
          <div className="mt-10 flex flex-col items-center gap-6">

            <div className="flex items-center gap-3 text-gray-700">
              <Phone size={22} className="text-[#b18a53]" />
              <a
                href="tel:01911498819"
                className="text-xl font-bold hover:text-[#b18a53]"
              >
                01911-498819
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={22} className="text-[#b18a53]" />
              <p>Munshiganj, Bangladesh</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="tel:01911498819"
              className="inline-flex items-center gap-3 rounded-full bg-[#284a36] px-8 py-4 font-semibold text-white transition hover:bg-[#b18a53]"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[#284a36] px-8 py-4 font-semibold text-[#284a36] transition hover:bg-[#284a36] hover:text-white"
            >
              
              Facebook
              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
