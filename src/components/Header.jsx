import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function Header({ forceScrolled = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const langPrefix = lang === "en" ? "en" : "de";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const isHome =
    location.pathname === `/${langPrefix}` ||
    location.pathname === `/${langPrefix}/`;
  const showScrolledStyle =
    isScrolled || forceScrolled || !isHome || isMenuOpen;

  const navLinks = [
    { name: t.nav.home, to: `/${langPrefix}` },
    { name: t.nav.about, to: `/${langPrefix}/ueber-uns` },
    { name: t.nav.region, to: `/${langPrefix}/region` },
    { name: t.nav.service, to: `/${langPrefix}/service` },
    { name: t.nav.pricing, to: `/${langPrefix}/preise` },
    { name: t.nav.gallery, to: `/${langPrefix}/bilder` },
    { name: t.nav.directions, to: `/${langPrefix}/anreise` },
    { name: t.nav.contact, to: `/${langPrefix}/kontakt` },
  ];

  const switchLanguage = () => {
    const newLang = language === "de" ? "en" : "de";
    const newPrefix = newLang === "en" ? "en" : "de";
    const current = location.pathname;

    const remainder = current.startsWith(`/${langPrefix}`)
      ? current.slice(`/${langPrefix}`.length)
      : current;
    const rawNextPath = `/${newPrefix}${remainder || ""}`;
    const nextPath =
      rawNextPath === `/${newPrefix}/` ? `/${newPrefix}` : rawNextPath;
    navigate(nextPath);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        showScrolledStyle
          ? "bg-white/95 shadow-sm border-gray-100 py-3"
          : "bg-transparent border-transparent py-5"
      } ${showScrolledStyle && !isMenuOpen ? "backdrop-blur-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* --- LOGO START --- */}
          <Link
            to={`/${langPrefix}`}
            className="flex items-center gap-1.5 md:gap-2 group"
          >
            {/* 1. Icon */}
            <div
              className={`transition-all duration-500 transform group-hover:rotate-3 ${
                showScrolledStyle ? "text-orange-500" : "text-white"
              }`}
            >
              <svg
                className="w-10 h-10 md:w-11 md:h-11 drop-shadow-sm"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18 11v8h-2v-6H8v6H6v-8l6-5.16z" />
                <path
                  d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* 2. Text Stack */}
            <div className="flex flex-col justify-center">
              <h1
                className={`text-sm md:text-base font-black uppercase tracking-widest leading-none transition-colors duration-300 ${
                  showScrolledStyle ? "text-gray-800" : "text-white/95"
                }`}
              >
                Boarding House
              </h1>

              <div className="flex items-baseline gap-2 mt-1">
                <span
                  className={`text-[11px] font-medium italic font-serif ${
                    showScrolledStyle ? "text-gray-400" : "text-white/60"
                  }`}
                >
                  by
                </span>
                <span className="font-serif italic font-bold text-xl md:text-2xl text-orange-500 leading-none tracking-wide hover:text-orange-400 transition-colors">
                  livein-wg.de
                </span>
              </div>
            </div>
          </Link>
          {/* --- LOGO END --- */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-orange-500 relative group/link ${
                    isActive
                      ? "text-orange-500"
                      : showScrolledStyle
                        ? "text-gray-600"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover/link:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}

            <div
              className={`h-5 w-px ${
                showScrolledStyle ? "bg-gray-200" : "bg-white/20"
              }`}
            ></div>

            {/* Language Toggle */}
            <button
              onClick={switchLanguage}
              className={`flex items-center gap-2 text-xs font-bold transition-colors duration-300 ${
                showScrolledStyle
                  ? "text-gray-500 hover:text-orange-500"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span
                className={
                  language === "de"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "hover:text-current"
                }
              >
                DE
              </span>
              <span
                className={
                  language === "en"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "hover:text-current"
                }
              >
                EN
              </span>
            </button>

            <Link
              to={`/${langPrefix}/kontakt`}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              {t.nav.inquire}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 relative z-50 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 flex flex-col items-end gap-1.5 transition-all duration-300 ${
                isMenuOpen ? "gap-0" : ""
              }`}
            >
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${
                  showScrolledStyle || isMenuOpen
                    ? "text-gray-900"
                    : "text-white"
                } ${
                  isMenuOpen
                    ? "rotate-45 translate-y-0.5"
                    : "group-hover:w-3/4"
                }`}
              />
              <span
                className={`h-0.5 w-3/4 bg-current transition-all duration-300 ${
                  showScrolledStyle || isMenuOpen
                    ? "text-gray-900"
                    : "text-white"
                } ${isMenuOpen ? "opacity-0" : "group-hover:w-full"}`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${
                  showScrolledStyle || isMenuOpen
                    ? "text-gray-900"
                    : "text-white"
                } ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "group-hover:w-3/4"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-y-auto ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-center items-center min-h-full gap-6 px-6 py-24">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-2xl font-black uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:text-orange-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="w-16 h-px bg-gray-200 my-4"></div>

            {/* Mobile Language */}
            <button
              onClick={switchLanguage}
              className="flex items-center gap-8 text-xl"
            >
              <span
                className={
                  language === "de"
                    ? "font-bold text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500"
                }
              >
                DE
              </span>
              <span
                className={
                  language === "en"
                    ? "font-bold text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500"
                }
              >
                EN
              </span>
            </button>

            <Link
              to={`/${langPrefix}/kontakt`}
              className="mt-6 w-full max-w-xs bg-orange-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-center shadow-xl shadow-orange-500/20 active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.inquire}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
