
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full bg-white/95 shadow-md backdrop-blur-md transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home">
          <h1 className="text-2xl font-bold text-[#284a36]">
            Gulmohor<span className="text-[#b18a53]">.</span>
          </h1>
          <p className="text-[10px] tracking-[4px] text-gray-500">
            RESORT
          </p>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#b18a53]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="tel:01911498819"
            className="flex items-center gap-2 rounded-full bg-[#284a36] px-6 py-3 text-sm text-white transition hover:bg-[#b18a53]"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#284a36] md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t bg-white px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-[#b18a53]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="tel:01911498819"
            className="font-semibold text-[#284a36]"
          >
            Call: 01911-498819
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
