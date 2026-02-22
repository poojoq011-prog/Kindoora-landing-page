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