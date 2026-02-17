import { useState } from "react";
import { useLanguage } from "../i18n";
import { AnimateOnScroll } from "../hooks/useScrollAnimation";

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
        question: t.faq.q5,
        answer: t.faq.a5,
      },
  ];

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="pt-28 md:pt-32 pb-16 md:pb-20 bg-white border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll
          animation="fade-up"
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-orange-500 font-semibold text-base md:text-lg">
            {t.faq.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 md:mb-4">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.faq.description}
          </p>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimateOnScroll
                key={index}
                animation="fade-up"
                delay={index * 80}
                duration={500}
              >
                <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left"
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                      {item.question}
                    </span>
                    <span className="ml-4 flex-shrink-0 text-orange-500">
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-4 md:pb-5 pt-0">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

