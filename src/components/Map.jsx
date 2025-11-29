import { useLanguage } from "../i18n";
import { AnimateOnScroll } from "../hooks/useScrollAnimation";

export default function Map() {
  const { t } = useLanguage();

  return (
    <section id="anreise" className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll
          animation="fade-up"
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-orange-500 font-semibold text-base md:text-lg">
            {t.map.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 md:mb-4">
            {t.map.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.map.description}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Address Card */}
          <AnimateOnScroll animation="fade-right" delay={100} duration={700}>
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg h-full">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                {t.map.location}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-orange-500"
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
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {t.map.wohnheimAddress}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Pfarrer-Graebener-Straße 1A
                      <br />
                      76149 Karlsruhe-Neureut
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-orange-500"
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
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {t.map.officeAddress}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Roennebergstr. 17
                      <br />
                      12161 Berlin
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100">
                <a
                  href="https://maps.google.com/maps?q=Pfarrer-Graebener-Stra%C3%9Fe%201A%2C%2076149%20Karlsruhe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300 text-sm md:text-base"
                >
                  {t.map.openMaps}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Map */}
          <AnimateOnScroll
            animation="fade-left"
            delay={200}
            duration={700}
            className="lg:col-span-2"
          >
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto lg:min-h-[400px]">
              <iframe
                title="Wohnheim Gatermann Standort"
                src="https://maps.google.com/maps?z=14&ll=49.04994,8.381650000000036&q=Pfarrer-Graebener-Stra%C3%9Fe%201A%2C%2076149%20Karlsruhe%2C%20Deutschland&iwloc=near&f=q&source=s_q&hl=de&ie=UTF8&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
