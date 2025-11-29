import { useState, useEffect } from "react";
import { useLanguage } from "../i18n";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#ueber-uns" },
    { name: t.nav.region, href: "#region" },
    { name: t.nav.service, href: "#service" },
    { name: t.nav.gallery, href: "#bilder" },
    { name: t.nav.directions, href: "#anreise" },
    { name: t.nav.contact, href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with House Icon */}
          <a href="#home" className="flex items-center gap-2 group">
            {/* House Icon */}
            <div
              className={`transition-all duration-300 ${
                isScrolled ? "text-orange-500" : "text-white"
              }`}
            >
              <svg
                className="w-8 h-8 md:w-9 md:h-9"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18 11v8h-2v-6H8v6H6v-8l6-5.16z" />
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" opacity="0.3" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-orange-500" : "text-white"
                }`}
              >
                Boarding House
              </span>
              <span
                className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                  isScrolled ? "text-gray-600" : "text-gray-300"
                }`}
              >
                KARLSRUHE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 hover:text-orange-500 ${
                  isScrolled
                    ? "text-gray-700"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all duration-300 border ${
                isScrolled
                  ? "border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500"
                  : "border-white/30 text-white/90 hover:border-white hover:text-white"
              }`}
            >
              <span className={language === "de" ? "font-bold" : "opacity-60"}>
                DE
              </span>
              <span className="opacity-40">|</span>
              <span className={language === "en" ? "font-bold" : "opacity-60"}>
                EN
              </span>
            </button>
            <a
              href="#kontakt"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105"
            >
              {t.nav.inquire}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-white/10 bg-white/95 backdrop-blur-md rounded-b-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Language Toggle */}
            <div className="px-4 py-3 border-t border-gray-100 mt-2">
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-gray-300 text-gray-700 font-medium transition-all duration-300"
              >
                <span
                  className={
                    language === "de"
                      ? "font-bold text-orange-500"
                      : "opacity-60"
                  }
                >
                  Deutsch
                </span>
                <span className="opacity-40">|</span>
                <span
                  className={
                    language === "en"
                      ? "font-bold text-orange-500"
                      : "opacity-60"
                  }
                >
                  English
                </span>
              </button>
            </div>
            <a
              href="#kontakt"
              className="block mx-4 mt-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-medium text-center transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.inquire}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
