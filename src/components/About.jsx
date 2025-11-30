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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
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
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-1.9 3.8a2 2 0 00.342 2.34l3.5 3.5m-7-10V5a2 2 0 012-2h.085a2 2 0 011.736.97l1.9 3.8a2 2 0 01-.342 2.34l-3.5 3.5"
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
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
