export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-cream shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-semibold text-textdark">
          Kindoora
        </h1>

        <button className="bg-terracotta text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
          Shop Now
        </button>
      </div>
    </nav>
  );
}