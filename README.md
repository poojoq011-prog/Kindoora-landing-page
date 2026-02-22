hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#F8F3EC] min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/tod2.avif"
          alt="Mother and toddler in living room"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
          Because Every Little Step Should Feel Safe
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Gentle Safety for Growing Homes.
        </p>

        <button className="mt-8 bg-[#D38C6A] hover:bg-[#c37a5a] text-white px-8 py-3 rounded-full shadow-md transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
productGallery.tsx
import Image from "next/image";

export default function ProductGallery() {
  return (
    <section className="py-28 bg-[#F8F3EC] px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Products
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          Designed with care. Built for safety. Crafted to blend seamlessly into your home.
        </p>

        {/* Premium Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Product 1 */}
          <div className="group relative overflow-hidden rounded-[32px] shadow-sm hover:shadow-lg transition duration-300 bg-white">
            <div className="relative w-full h-[320px]">
              <Image
                src="/product6.jpg"
                alt="Edge Protector 1"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Product 2 */}
          <div className="group relative overflow-hidden rounded-[32px] shadow-sm hover:shadow-lg transition duration-300 bg-white">
            <div className="relative w-full h-[320px]">
              <Image
                src="/product4.jpg"
                alt="Edge Protector 2"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Product 3 */}
          <div className="group relative overflow-hidden rounded-[32px] shadow-sm hover:shadow-lg transition duration-300 bg-white">
            <div className="relative w-full h-[320px]">
              <Image
                src="/product5.jpg"
                alt="Edge Protector 3"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
problem.tsx
import Image from "next/image";

export default function Problem() {
  return (
    <section className="py-20 bg-[#F4EFE8]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Image
            src="/tod3.webp"
            alt="Sharp furniture corner in home"
            fill
            className="object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Little Explorers, Hidden Risks
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Sharp furniture edges and curious toddlers can turn everyday
            moments into anxious ones. As parents, even a small bump feels overwhelming.
          </p>
        </div>

      </div>
    </section>
  );
}
solution.tsx
import Image from "next/image";

export default function Problem() {
  return (
    <section className="py-20 bg-[#F4EFE8]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Image
            src="/tod3.webp"
            alt="Sharp furniture corner in home"
            fill
            className="object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Little Explorers, Hidden Risks
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Sharp furniture edges and curious toddlers can turn everyday
            moments into anxious ones. As parents, even a small bump feels overwhelming.
          </p>
        </div>

      </div>
    </section>
  );
}
Benefits.tsx
export default function Benefits() {
  return (
    <section className="py-28 bg-[#F8F3EC] px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Designed for Peace of Mind
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Every detail is thoughtfully crafted to protect your little one,
            while keeping your home warm, beautiful, and stress-free.
          </p>
        </div>

        {/* Premium Card Container */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {/* Card 1 */}
          <div className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-[#E9F1EC] rounded-full flex items-center justify-center text-xl">
              🛡️
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Strong & Secure Hold
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Stays firmly in place even when curious little hands tug at it —
              giving you quiet confidence throughout the day.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-[#E9F1EC] rounded-full flex items-center justify-center text-xl">
              🌿
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Non-Toxic & Baby-Safe
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Made from child-safe materials that are gentle for tiny explorers
              and reassuring for caring parents.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-[#E9F1EC] rounded-full flex items-center justify-center text-xl">
              ✨
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Soft Cushion Protection
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Cushions sharp edges beautifully — reducing accidental bumps
              while blending seamlessly into your home.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-[#E9F1EC] rounded-full flex items-center justify-center text-xl">
              🏡
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Quick & Gentle Installation
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Install in minutes — no tools, no stress, no damage to your
              furniture. Just simple protection.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
WhyChoose.tsx
import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="py-28 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image Side */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/tod5.jpeg"
            alt="Mother and toddler smiling in living room"
            fill
            className="object-cover rounded-[32px] shadow-md"
          />
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Why Parents Trust Kindoora
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Because protecting your little one should feel simple,
            reliable, and thoughtfully designed.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E9F1EC] rounded-full flex items-center justify-center text-lg">
                🛡️
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Quality Assured</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Carefully tested for lasting safety and durability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E9F1EC] rounded-full flex items-center justify-center text-lg">
                🤍
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">1-Year Warranty</h3>
                <p className="text-gray-600 text-sm mt-1">
                  A promise that stands with your family’s safety.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E9F1EC] rounded-full flex items-center justify-center text-lg">
                📦
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Premium Packaging</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Thoughtfully packed with care and attention to detail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E9F1EC] rounded-full flex items-center justify-center text-lg">
                🏡
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Easy Installation</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Simple setup designed for busy parents.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
HowItsWork.tsx
export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#E9F1EC] px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Simple Protection in 4 Gentle Steps
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          Designed to be effortless — because safety should never feel complicated.
        </p>

        {/* Steps */}
        <div className="mt-20 grid gap-10 md:grid-cols-4">

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-[28px] shadow-sm text-left">
            <div className="w-10 h-10 bg-[#D38C6A] text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <h3 className="mt-6 font-semibold text-gray-800">
              Clean the Surface
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Gently wipe the furniture surface to remove dust or moisture.
              A clean surface ensures strong adhesion.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-[28px] shadow-sm text-left">
            <div className="w-10 h-10 bg-[#D38C6A] text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <h3 className="mt-6 font-semibold text-gray-800">
              Peel the Protective Film
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Carefully remove the adhesive backing from the edge protector strip.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-[28px] shadow-sm text-left">
            <div className="w-10 h-10 bg-[#D38C6A] text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <h3 className="mt-6 font-semibold text-gray-800">
              Align & Press Firmly
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Position the protector along the sharp edge and press evenly to secure.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-[28px] shadow-sm text-left">
            <div className="w-10 h-10 bg-[#D38C6A] text-white rounded-full flex items-center justify-center font-semibold">
              4
            </div>
            <h3 className="mt-6 font-semibold text-gray-800">
              Safe & Secure
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              That’s it. Your furniture edge is now cushioned and safer for curious little explorers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
Testimonials.tsx
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#F8F3EC] px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          What Parents Are Saying
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          Real stories from families who chose safety with confidence.
        </p>

        {/* Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-[28px] shadow-sm hover:shadow-md transition text-left">
            <p className="text-gray-600 leading-relaxed">
              “I finally feel relaxed when my son runs around the living room.
              It blends beautifully with our furniture.”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/test1.jpeg"
                  alt="Aditi - First Time Mom"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Aditi R.</p>
                <p className="text-gray-500 text-xs">First-Time Mom</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-[28px] shadow-sm hover:shadow-md transition text-left">
            <p className="text-gray-600 leading-relaxed">
              “The installation took just a few minutes, but the peace of mind
              it gives is priceless.”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/test2.jpeg"
                  alt="Neha - Mother"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Neha S.</p>
                <p className="text-gray-500 text-xs">Mom of a 2-Year-Old</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-[28px] shadow-sm hover:shadow-md transition text-left">
            <p className="text-gray-600 leading-relaxed">
              “It feels thoughtfully designed — not bulky, not obvious.
              Just simple, gentle protection.”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/test3.jpeg"
                  alt="Priya - Mother"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Priya M.</p>
                <p className="text-gray-500 text-xs">Mother of a Toddler</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
FAQ.tsx
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
