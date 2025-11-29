import { useLanguage } from "../i18n";
import { AnimateOnScroll } from "../hooks/useScrollAnimation";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="ueber-uns" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimateOnScroll
            animation="fade-right"
            duration={800}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
              <img
                src="/images/32173466.JPG"
                alt="livein-wg.de"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Stats overlay */}
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll
            animation="fade-left"
            duration={800}
            delay={200}
            className="order-1 lg:order-2"
          >
            <span className="text-orange-500 font-semibold text-base md:text-lg">
              {t.about.label}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 md:mb-6">
              {t.about.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              {t.about.p3} <strong>{t.about.hotelComfort}</strong>{" "}
              {t.about.p3End}
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start space-x-3 group/item cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-orange-500">
                  <svg
                    className="w-6 h-6 text-orange-500 transition-colors duration-300 group-hover/item:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t.about.friendly}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t.about.friendlyDesc}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group/item cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-orange-500">
                  <svg
                    className="w-6 h-6 text-orange-500 transition-colors duration-300 group-hover/item:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t.about.duration}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t.about.durationDesc}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group/item cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-orange-500">
                  <svg
                    className="w-6 h-6 text-orange-500 transition-colors duration-300 group-hover/item:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t.about.comfort}
                  </h4>
                  <p className="text-gray-600 text-sm">{t.about.comfortDesc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group/item cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:bg-orange-500">
                  <svg
                    className="w-6 h-6 text-orange-500 transition-colors duration-300 group-hover/item:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t.about.appointment}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t.about.appointmentDesc}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
