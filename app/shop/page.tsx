import Link from "next/link";
import Sidebar from "../components/sidebar/page";
import ProductCard from "../components/productCard/page";
import Pagination from "../components/pagination/page";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";

// Export the mock database so your dynamic product page can read from it too
export const products = [
  {
    id: 1,
    title: "Nord Stage 4 88",
    category: "Keyboards",
    rating: "5.0",
    price: "₦4,999,000.00",
    oldPrice: "₦5,499,000.00",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600",
    badge: "NEW",
    description: "Elevate your performance with the definitive stage piano. Crafted for the elite artist, the Nord Stage 4 combines our legendary hammer-action feel with a world-class sound engine."
  },
  {
    id: 2,
    title: "Custom Series Strat",
    category: "Guitars",
    rating: "5.0",
    price: "₦2,850,000.00",
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=600",
    description: "A masterwork of tonal clarity and fluid playability. Built with choice timbers to bring legacy performance straight to modern stages."
  },
  {
    id: 3,
    title: "Elite Stream Interface",
    category: "Audio Gear",
    rating: "4.8",
    price: "₦899,000.00",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600",
    description: "Studio-grade converters featuring ultra-low latency. Capture raw inspiration with crystal clear definitions."
  },
  {
    id: 4,
    title: "Walnut Shell Pack",
    category: "Drums",
    rating: "4.7",
    price: "₦3,200,000.00",
    image: "https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?q=80&w=600",
    description: "Rich, dark, and highly focused tones. This custom-selected premium walnut construction ensures magnificent projection."
  },
  {
    id: 5,
    title: "Reference 8 Studio",
    category: "Audio Gear",
    rating: "4.9",
    price: "₦1,150,000.00",
    image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=600",
    description: "Uncompromised acoustic linear monitoring. Build precise mix environments with pinpoint soundstage tracking."
  },
  {
    id: 6,
    title: "Master Series Grand",
    category: "Pianos",
    rating: "5.0",
    price: "₦85,000,000.00",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=600",
    badge: "TOP RATED",
    description: "The ultimate peak of artisanal concert grand engineering. Timeless resonance constructed for generation-spanning legacy."
  },
];

export default function ShopPage() {
  return (
   <div>
    <Navbar/>
     <main className="max-w-7xl mx-auto px-6 py-16 text-[#0b1325]">
      {/* Hero Header Section */}
      <header className="mb-12">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#bfa15f] block mb-3">
          Boutique Curations
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-5">
          Premium Musical <br /> Instruments & Accessories
        </h1>
        <p className="text-gray-500 max-w-xl text-base md:text-lg font-light">
          Precision-crafted tools for the professional artist. Explore our collection of
          legacy-grade instruments selected for elite artistry and tonal perfection.
        </p>
      </header>

      {/* Utility Toolbar */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8 text-sm">
        <p className="text-gray-500">
          Showing <strong className="text-[#0b1325] font-semibold">24</strong> premium instruments
        </p>
        <div className="text-gray-500">
          Sort by: <strong className="text-[#0b1325] font-semibold cursor-pointer">New Arrivals</strong>
        </div>
      </div>

      {/* Grid Layout Split */}
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10">
        <Sidebar />

        {/* Product Space */}
        <div>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              /* Wrap item with Link referencing the unique dynamic route */
              <Link key={product.id} href={`/shop/${product.id}`} className="block">
                <ProductCard product={product} />
              </Link>
            ))}
          </section>

          <Pagination />
        </div>
      </div>
     </main>
    <Footer/>
   </div>
  );
}