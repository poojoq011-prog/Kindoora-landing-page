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