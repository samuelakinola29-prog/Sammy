import { products as rawProducts } from "../page";
import ProductGallery from "@/app/components/productGallery/page";
import ProductTabs from "@/app/components/productTabs/page";
import CrossSellGrid from "@/app/components/crossSellGrid/page";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import { notFound } from "next/navigation";

// Product type definition
interface Product {
  id: number;
  category: string;
  title: string;
  price: string;
  description: string;
  image: string;
  rating?: string;
}

// Proper typing (no casting needed)
const products: Product[] = rawProducts;

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = params;

  const productId = parseInt(id, 10);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#fcfcfc] text-[#0b1325] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-xs text-gray-400 mb-8 flex items-center gap-2 tracking-wide">
          <span className="hover:text-[#bfa15f] cursor-pointer">Shop</span>
          <span>&rsaquo;</span>
          <span className="hover:text-[#bfa15f] cursor-pointer">
            {product.category}
          </span>
          <span>&rsaquo;</span>
          <span className="text-gray-600 font-medium">
            {product.title}
          </span>
        </nav>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery initialImage={product.image} />
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[#bfa15f] text-sm">★★★★★</div>
              <span className="text-xs text-gray-400">
                ({product.rating === "5.0" ? "102" : "48"} Reviews)
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-2">
              {product.title}
            </h1>

            <p className="text-xl font-semibold text-[#bfa15f] mb-6">
              {product.price}
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
              {product.description}
            </p>

            {/* Finish */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-2">
                Finish: Premium Edition
              </span>
              <div className="flex gap-3">
                <button
                  className="w-6 h-6 rounded-full bg-black ring-2 ring-offset-2 ring-[#bfa15f]"
                  aria-label="Black Finish"
                />
                <button
                  className="w-6 h-6 rounded-full bg-[#eaeaea] border border-gray-300"
                  aria-label="Alternative Finish"
                />
              </div>
            </div>

            {/* Cart Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-8">
              <div className="flex items-center justify-between border border-gray-300 rounded px-4 py-2 sm:w-32 bg-white">
                <button className="text-gray-400 hover:text-black font-semibold">
                  &minus;
                </button>
                <span className="text-sm font-medium">1</span>
                <button className="text-gray-400 hover:text-black font-semibold">
                  &#43;
                </button>
              </div>

              <button className="flex-1 bg-[#bfa15f] hover:bg-[#a38546] text-white text-sm font-medium tracking-wider py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors">
                Add To Cart
              </button>
            </div>

            {/* Info */}
            <div className="space-y-3 border-t border-gray-200 pt-6 text-xs text-gray-500">
              <div className="flex items-center gap-2.5">
                <span className="text-[#bfa15f]">🚚</span>
                <span>Complimentary white-glove delivery included.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#bfa15f]">🛡️</span>
                <span>3-Year manufacturer warranty for professionals.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <ProductTabs />

        {/* Cross Sell */}
        <CrossSellGrid />
      </main>

      <Footer />
    </div>
  );
}