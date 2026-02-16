import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function Pricing() {
  const { lang } = useParams();
  const langPrefix = lang === "en" ? "en" : "de";
  const { t } = useLanguage();

  const pricingPlans = [
    {
      key: "studio",
      name: t.pricingPage.plans.studio.name,
      price: "650",
      period: t.pricingPage.period,
      description: t.pricingPage.plans.studio.description,
      features: t.pricingPage.plans.studio.features,
      popular: false,
    },
    {
      key: "comfort",
      name: t.pricingPage.plans.comfort.name,
      price: "850",
      period: t.pricingPage.period,
      description: t.pricingPage.plans.comfort.description,
      features: t.pricingPage.plans.comfort.features,
      popular: true,
    },
    {
      key: "family",
      name: t.pricingPage.plans.family.name,
      price: "1000",
      period: t.pricingPage.period,
      description: t.pricingPage.plans.family.description,
      features: t.pricingPage.plans.family.features,
      popular: false,
    },
  ];

  return (
    <section id="preise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.pricingPage.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.pricingPage.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.key}
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t.pricingPage.popularBadge}
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    €{plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/${langPrefix}/kontakt`}
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {t.pricingPage.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8">
          {t.pricingPage.note}
        </p>
      </div>
    </section>
  );
}
