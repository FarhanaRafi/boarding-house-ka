import { useLanguage } from "../i18n";
import { AnimateOnScroll } from "../hooks/useScrollAnimation";

// Icon components (static, don't need translation)
const icons = {
  cleaning: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  ),
  internet: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
      />
    </svg>
  ),
  phone: (
    <svg
      className="w-8 h-8"
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
  ),
  tv: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  safe: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  common: (
    <svg
      className="w-8 h-8"
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
  ),
};

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: icons.cleaning,
      title: t.features.cleaning,
      description: t.features.cleaningDesc,
    },
    {
      icon: icons.internet,
      title: t.features.internet,
      description: t.features.internetDesc,
    },
    {
      icon: icons.phone,
      title: t.features.phone,
      description: t.features.phoneDesc,
    },
    { icon: icons.tv, title: t.features.tv, description: t.features.tvDesc },
    {
      icon: icons.safe,
      title: t.features.safe,
      description: t.features.safeDesc,
    },
    {
      icon: icons.common,
      title: t.features.common,
      description: t.features.commonDesc,
    },
  ];

  return (
    <section id="service" className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll
          animation="fade-up"
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-orange-500 font-semibold text-base md:text-lg">
            {t.features.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 md:mb-4">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.description}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll
              key={index}
              animation="fade-up"
              delay={index * 100}
              duration={600}
            >
              <div className="group bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-lg md:rounded-xl flex items-center justify-center text-orange-500 mb-4 md:mb-6 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
