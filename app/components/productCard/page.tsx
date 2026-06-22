import Image from "next/image";

interface ProductCardProps {
  product?: {
    id: number;
    title: string;
    category: string;
    rating: string;
    price: string;
    oldPrice?: string;
    image: string;
    badge?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  if (!product) return null;

  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-square w-full bg-[#f9f9fb] overflow-hidden mb-4">
        {product?.badge && (
          <span
            className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2 py-1 tracking-wider ${
              product.badge === "NEW"
                ? "bg-[#bfa15f] text-white"
                : "bg-[#0b1325] text-white"
            }`}
          >
            {product.badge}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div>
        <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
          <span>{product.category}</span>
          <span>★ {product.rating}</span>
        </div>

        <h2 className="font-serif text-lg text-[#0b1325] font-medium mb-1 group-hover:text-[#bfa15f] transition-colors">
          {product.title}
        </h2>

        <div className="flex gap-2 items-center text-sm font-semibold">
          <span className="text-[#bfa15f]">{product.price}</span>

          {product.oldPrice && (
            <span className="text-gray-400 text-xs line-through font-normal">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}