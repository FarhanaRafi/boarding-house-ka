import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <a
              href="#home"
              className="flex flex-col leading-tight mb-4 md:mb-6 group"
            >
              <span className="text-lg md:text-xl font-bold text-orange-500 transition-colors duration-300 group-hover:text-orange-400">
                Boarding House
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wider text-gray-400">
                KARLSRUHE
              </span>
            </a>
            <p className="text-gray-400 mb-4 md:mb-6 max-w-md leading-relaxed text-sm md:text-base">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#ueber-uns"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#region"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {t.nav.region}
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {t.nav.service}
                </a>
              </li>
              <li>
                <a
                  href="#bilder"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#anreise"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {t.nav.directions}
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Links & Kontakt */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              {t.footer.linksContact}
            </h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li>
                <a
                  href="https://www.neureut.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  www.neureut.de
                </a>
              </li>
              <li>
                <a
                  href="https://www.karlsruhe.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  www.karlsruhe.de
                </a>
              </li>
              <li>
                <a
                  href="https://www.gatermann.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  www.gatermann.ch
                </a>
              </li>
              <li className="pt-3 md:pt-4 border-t border-gray-800">
                <a
                  href="tel:+4915208684401"
                  className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300"
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
                  <span>015208684401</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wohnheimgatermann.de"
                  className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300"
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
                  <span>info@wohnheimgatermann.de</span>
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
              <p className="text-gray-400 text-xs md:text-sm">
                Pfarrer-Graebener-Straße 1A
                <br />
                76149 Karlsruhe-Neureut
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 md:pt-8 border-t border-gray-800 gap-2">
            <p className="text-gray-500 text-xs md:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Wohnheim Gatermann.{" "}
              {t.footer.allRights}
            </p>
            <p className="text-gray-600 text-xs text-center sm:text-right">
              {t.footer.responsible}: A. und J. Gatermann
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
