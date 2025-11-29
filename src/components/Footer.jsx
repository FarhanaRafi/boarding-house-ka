import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* --- LOGO SECTION --- */}
          <div className="sm:col-span-2">
            {/* Reduced gap from gap-3 to gap-2 for tighter spacing */}
            <a
              href="#home"
              className="flex items-center gap-2 mb-6 group w-fit"
            >
              {/* 1. Icon */}
              <div className="text-white transition-all duration-500 transform group-hover:text-orange-500 group-hover:rotate-3">
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
                {/* Top Line */}
                <span className="text-base font-black uppercase tracking-widest leading-none text-white transition-colors duration-300 group-hover:text-gray-200">
                  Boarding House
                </span>

                {/* Bottom Line */}
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-[11px] font-medium italic font-serif text-gray-500 group-hover:text-gray-400 transition-colors">
                    by
                  </span>
                  <span className="font-serif italic font-bold text-2xl text-orange-500 leading-none tracking-wide group-hover:text-orange-400 transition-colors">
                    livein-wg.de
                  </span>
                </div>
              </div>
            </a>

            <p className="text-gray-400 mb-4 md:mb-6 max-w-md leading-relaxed text-sm md:text-base">
              {t.footer.description}
            </p>
          </div>
          {/* --- END LOGO SECTION --- */}

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              {[
                { name: t.nav.home, href: "#home" },
                { name: t.nav.about, href: "#ueber-uns" },
                { name: t.nav.region, href: "#region" },
                { name: t.nav.service, href: "#service" },
                { name: t.nav.gallery, href: "#bilder" },
                { name: t.nav.directions, href: "#anreise" },
                { name: t.nav.contact, href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 block w-fit"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links & Kontakt */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
              {t.footer.linksContact}
            </h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li>
                <a
                  href="https://www.neureut.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300 w-fit block"
                >
                  www.neureut.de
                </a>
              </li>
              <li>
                <a
                  href="https://www.karlsruhe.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300 w-fit block"
                >
                  www.karlsruhe.de
                </a>
              </li>
              <li className="pt-3 md:pt-4 border-t border-gray-800">
                <a
                  href="tel:+4915738754711"
                  className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300 w-fit"
                >
                  <svg
                    className="w-4 h-4 text-orange-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>015738754711</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@boardinghousekarlsruhe.de"
                  className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300 w-fit"
                >
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@boardinghousekarlsruhe.de</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Impressum Info */}
        <div
          id="impressum"
          className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h5 className="text-sm font-semibold text-gray-300 mb-2">
                {t.footer.impressum}
              </h5>
              <p className="text-gray-400 text-xs md:text-sm">
                A. und J. Gatermann
                <br />
                {t.footer.office}: Roennebergstr. 17, 12161 Berlin
                <br />
                {t.footer.taxNumber}: 18/301/02297 Finanzamt Schoeneberg
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-300 mb-2">
                {t.footer.wohnheimLocation}
              </h5>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Pfarrer-Graebener-Straße 1A
                <br />
                76149 Karlsruhe-Neureut
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 md:pt-8 border-t border-gray-800 gap-2">
            <p className="text-gray-500 text-xs md:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} livein-wg.de. {t.footer.allRights}
            </p>
            <p className="text-gray-600 text-xs text-center sm:text-right">
              {t.footer.responsible}: Lavin Pottekkat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
