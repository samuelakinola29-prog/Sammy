"use client"
import { useState } from "react";

interface ProductGalleryProps {
  initialImage: string;
}

export default function ProductGallery({ initialImage }: ProductGalleryProps) {
  const thumbnails = [
    initialImage,
    "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=600",
    "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600",
    "https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=600",
  ];

  const [activeImage, setActiveImage] = useState(initialImage);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-[#f2f2f4] to-[#e6e6e9] w-full flex items-center justify-center p-8 group overflow-hidden">
        
        {/* Floating Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Add to wishlist"
          >
            ♥
          </button>

          <button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-black transition-colors"
            aria-label="Zoom image"
          >
            🔍
          </button>
        </div>

        <img
          src={activeImage}
          alt="Product"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {thumbnails.map((src, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(src)}
            className={`aspect-square w-full bg-[#f4f4f6] p-1 overflow-hidden transition-all ${
              activeImage === src
                ? "ring-2 ring-[#bfa15f]"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={src}
              alt={`View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}