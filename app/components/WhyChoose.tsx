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