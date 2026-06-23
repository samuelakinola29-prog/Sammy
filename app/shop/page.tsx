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
    title: "Professional Talking Drum",
    category: "Drum",
    rating: "9.0",
    price: "₦40,000.00",
    oldPrice: "₦50,000.00",
    image: "/DRUM1.jpg",
    badge: "NEW",
    description:
      "Elevate your performance with the definitive stage Talking Drum. Crafted for the elite artist with premium sound quality."
  },

  {
    id: 2,
    title: "Electric Talking Drum",
    category: "Drums",
    rating: "10.0",
    price: "₦100,000.00",
    image: "/DRUM2.jpg",
    description:
      "A masterwork of tonal clarity and fluid playability built for modern stages."
  },

  {
    id: 3,
    title: "Perfect Talking Drum",
    category: "Drum",
    rating: "8.0",
    price: "₦35,000.00",
    image: "/DRUM4.jpg",
    description:
      "Studio-grade drum with excellent response and professional performance quality."
  },

  {
    id: 4,
    title: "Wireless Electrical Drum",
    category: "Drums",
    rating: "10.0",
    price: "₦250,000.00",
    image: "/DRUM5.jpg",
    description:
      "Premium construction with rich tones and excellent projection."
  },

  {
    id: 5,
    title: "Studio Quality Drum",
    category: "Drums",
    rating: "7.9",
    price: "₦30,000.00",
    image: "/drum6.jpg",
    description:
      "Designed for studio recordings with accurate sound reproduction."
  },

  {
    id: 6,
    title: "Master Talking Drum",
    category: "Drums",
    rating: "9.0",
    price: "₦50,000.00",
    image: "/drum8.jpg",
    badge: "TOP RATED",
    description:
      "A handcrafted professional talking drum made for stage and studio performance."
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