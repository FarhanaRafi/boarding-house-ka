import { useLanguage } from "../i18n";
import { AnimateOnScroll } from "../hooks/useScrollAnimation";

export default function Region() {
  const { t } = useLanguage();

  return (
    <section id="region" className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <AnimateOnScroll animation="fade-right" duration={800}>
            <span className="text-orange-500 font-semibold text-lg">
              {t.region.label}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              {t.region.title}
            </h2>
            <div className="space-y-4 text-gray-600 text-base sm:text-lg">
              <p>{t.region.p1}</p>
              <p>{t.region.p2}</p>
              <p>{t.region.p3}</p>
            </div>
          </AnimateOnScroll>

          {/* Features Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 - Freizeit */}
            <AnimateOnScroll animation="fade-up" delay={100} duration={600}>
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t.region.leisure}
                </h3>
                <p className="text-gray-600 text-sm">{t.region.leisureDesc}</p>
              </div>
            </AnimateOnScroll>

            {/* Card 2 - Anbindung */}
            <AnimateOnScroll animation="fade-up" delay={200} duration={600}>
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
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
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t.region.transport}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t.region.transportDesc}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Card 3 - Nahversorgung */}
            <AnimateOnScroll animation="fade-up" delay={300} duration={600}>
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t.region.amenities}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t.region.amenitiesDesc}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Card 4 - Autobahn */}
            <AnimateOnScroll animation="fade-up" delay={400} duration={600}>
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
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
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t.region.highway}
                </h3>
                <p className="text-gray-600 text-sm">{t.region.highwayDesc}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Additional Info */}
        <AnimateOnScroll animation="fade-up" delay={200} duration={700}>
          <div className="mt-12 md:mt-16 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {t.region.additionalInfo}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
