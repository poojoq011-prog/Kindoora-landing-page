"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Will the edge protector damage my furniture?",
    answer:
      "No. The adhesive is strong yet designed to be removable without leaving residue when taken off carefully.",
  },
  {
    question: "Is the material safe for babies?",
    answer:
      "Yes. Kindoora Edge Protectors are made from non-toxic, child-safe materials that are gentle for growing families.",
  },
  {
    question: "How long does the adhesive last?",
    answer:
      "Under normal indoor conditions, the adhesive is designed to provide long-lasting hold and reliable protection.",
  },
  {
    question: "Can I use it on glass or marble tables?",
    answer:
      "Yes. It works effectively on wood, glass, marble, and metal surfaces when applied to a clean, dry area.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-[#F8F3EC] px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-gray-600">
            Everything you need to know to feel confident about your choice.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-[#D38C6A] text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}