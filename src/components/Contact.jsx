import { useLanguage } from "../i18n";
import { AnimateOnScroll } from "../hooks/useScrollAnimation";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll
          animation="fade-up"
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-orange-500 font-semibold text-lg">
            {t.contact.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            {t.contact.description1}
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t.contact.description2}
          </p>
        </AnimateOnScroll>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Phone */}
          <AnimateOnScroll animation="fade-up" delay={100} duration={600}>
            <a
              href="tel:+4915208684401"
              className="group block bg-gray-50 hover:bg-orange-500 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-orange-500 group-hover:text-white transition-colors duration-300"
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
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                {t.contact.phone}
              </h4>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                015208684401
              </p>
            </a>
          </AnimateOnScroll>

          {/* Email */}
          <AnimateOnScroll animation="fade-up" delay={200} duration={600}>
            <a
              href="mailto:info@wohnheimgatermann.de"
              className="group block bg-gray-50 hover:bg-orange-500 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-orange-500 group-hover:text-white transition-colors duration-300"
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
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                {t.contact.email}
              </h4>
              <p className="text-gray-600 group-hover:text-white/90 text-sm md:text-base transition-colors duration-300 break-all">
                info@wohnheimgatermann.de
              </p>
            </a>
          </AnimateOnScroll>

          {/* Office Address */}
          <AnimateOnScroll animation="fade-up" delay={300} duration={600}>
            <div className="group bg-gray-50 hover:bg-orange-500 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-orange-500 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                {t.contact.written}
              </h4>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-sm md:text-base">
                Büro Gatermann
                <br />
                Roennebergstr. 17
                <br />
                12161 Berlin
              </p>
            </div>
          </AnimateOnScroll>

          {/* Wohnheim Address */}
          <AnimateOnScroll animation="fade-up" delay={400} duration={600}>
            <div className="group bg-gray-50 hover:bg-orange-500 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-orange-500 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                {t.contact.location}
              </h4>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-sm md:text-base">
                Pfarrer-Graebener-Straße 1A
                <br />
                76149 Karlsruhe-Neureut
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
