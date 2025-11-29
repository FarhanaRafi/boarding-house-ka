import { useLanguage } from "../i18n";
import { useState, useEffect } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with existing photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/32162656.JPG"
          alt="Boardinghouse Karlsruhe - livein-wg.de"
          className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
            isLoaded ? "scale-100" : "scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/85 md:via-black/60 md:to-black/40"></div>
      </div>

      {/* Content with smooth animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 pt-28 md:pt-32">
        <div className="max-w-2xl">
          <span
            className={`inline-block bg-orange-500/20 text-orange-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm border border-orange-500/30 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            ✨ {t.hero.welcome}
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {t.hero.title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-1 sm:mt-2">
              {t.hero.subtitle}
            </span>
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4 leading-relaxed max-w-xl transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {t.hero.description1}
          </p>
          <p
            className={`text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-xl transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            {t.hero.description2}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <a
              href="#bilder"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
            >
              {t.hero.cta1}
              <svg
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:border-white"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator - hidden on small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <a
          href="#ueber-uns"
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
            {t.hero.scrollText}
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2 group-hover:border-white/50 transition-colors duration-300">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
