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