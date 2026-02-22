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