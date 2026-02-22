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