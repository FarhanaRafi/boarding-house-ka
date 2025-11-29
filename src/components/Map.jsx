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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* Address Card */}
          <AnimateOnScroll animation="fade-right" delay={100} duration={700}>
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg h-full flex flex-col justify-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  {t.map.location}
                </h3>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-orange-500"
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
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {t.map.wohnheimAddress}
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Pfarrer-Graebener-Straße 1A
                      <br />
                      76149 Karlsruhe-Neureut
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pfarrer-Graebener-Straße+1A+76149+Karlsruhe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-bold tracking-wide transition-colors duration-300"
                >
                  {t.map.openMaps}
                  <svg
                    className="w-5 h-5 ml-2"
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
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px]">
              <iframe
                title="Boardinghouse Karlsruhe - livein-wg.de"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.467825368366!2d8.38459427685955!3d49.02073997135439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797089457635c03%3A0x6758604771485671!2sPfarrer-Graebener-Stra%C3%9Fe%201A%2C%2076149%20Karlsruhe!5e0!3m2!1sen!2sde!4v1709400000000!5m2!1sen!2sde"
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
