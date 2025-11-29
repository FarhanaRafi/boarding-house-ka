import { useLanguage } from "../i18n";
import { AnimateOnScroll } from "../hooks/useScrollAnimation";

export default function Apartments() {
  const { t } = useLanguage();

  const apartments = [
    {
      id: 1,
      name: t.apartments.small,
      description: t.apartments.smallDesc,
      image: "/images/32162735.JPG",
      features: [
        t.apartments.persons12,
        t.apartments.shower,
        t.apartments.furnished,
        t.apartments.wifi,
        t.apartments.twoLevels,
      ],
    },
    {
      id: 2,
      name: t.apartments.large,
      description: t.apartments.largeDesc,
      image: "/images/32162845.JPG",
      features: [
        t.apartments.persons2plus,
        t.apartments.showerWC,
        t.apartments.furnished,
        t.apartments.wifi,
        t.apartments.sleepCouch,
      ],
    },
  ];

  return (
    <section
      id="apartments"
      className="py-16 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll
          animation="fade-up"
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-orange-500 font-semibold text-base md:text-lg">
            {t.apartments.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 md:mb-4">
            {t.apartments.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.apartments.description}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {apartments.map((apartment, index) => (
            <AnimateOnScroll
              key={apartment.id}
              animation={index === 0 ? "fade-right" : "fade-left"}
              delay={index * 150}
              duration={700}
            >
              <div className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={apartment.image}
                    alt={apartment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                    {apartment.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                    {apartment.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {apartment.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#kontakt"
                    className="block w-full text-center bg-gray-900 hover:bg-orange-500 text-white py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold transition-colors text-sm md:text-base mt-auto"
                  >
                    {t.apartments.inquire}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
