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