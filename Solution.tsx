import Image from "next/image";

export default function Solution() {
  return (
    <section className="py-20 bg-[#E9F1EC] px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Meet the Kindoora Edge Protector
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Thoughtfully designed to cushion sharp edges and protect
            curious little explorers — without disturbing the beauty of your home.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li>🛡️ Strong adhesive for secure hold</li>
            <li>🌿 Non-toxic and baby-safe material</li>
            <li>✨ Soft cushioning for gentle protection</li>
            <li>🏡 Easy installation in minutes</li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Image
            src="/tod4.jpg"
            alt="Kindoora edge protector installed on table corner"
            fill
            className="object-cover rounded-2xl shadow-md"
          />
        </div>

      </div>
    </section>
  );
}