
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e3025] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Gulmohor<span className="text-[#b18a53]">.</span>
          </h2>

          <p className="mt-3 text-xs tracking-[4px] text-white/50">
            RESORT
          </p>

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Relax, refresh and reconnect with nature.
            Create beautiful memories at Gulmohor Resort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-sm text-white/60">
            <a href="#home" className="transition hover:text-[#b18a53]">
              Home
            </a>
            <a href="#about" className="transition hover:text-[#b18a53]">
              About
            </a>
            <a href="#gallery" className="transition hover:text-[#b18a53]">
              Gallery
            </a>
            <a href="#location" className="transition hover:text-[#b18a53]">
              Location
            </a>
            <a href="#contact" className="transition hover:text-[#b18a53]">
              Contact
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold">Contact Us</h3>

          <div className="flex flex-col gap-5 text-sm text-white/60">
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-[#b18a53]" />
              01911-498819
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-[#b18a53]" />
              Munshiganj, Bangladesh
            </p>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-[#b18a53]"
            >
              
              Facebook
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-7 text-center">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Gulmohor Resort. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
