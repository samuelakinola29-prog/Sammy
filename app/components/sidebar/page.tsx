export default function Sidebar() {
  const categories = [
    "All Collections",
    "Normal Talking Drum",
    "Electric Talking Drum",
    "Wireless Elect. Talking Drum",
    "Professional",
    "Beginners",
    "Studio standard",
    "3 in 1 Multi- function"
  ];

  const brands = ["Normal", "Professional", "Wireless", "Electric","Beginners"];

  return (
    <aside className="hidden md:flex flex-col gap-9">
      {/* Category Block */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4 font-bold">Categories</h3>
        <ul className="space-y-2 text-sm text-gray-500">
          {categories.map((cat, i) => (
            <li 
              key={cat} 
              className={`cursor-pointer transition-colors hover:text-[#bfa15f] ${i === 0 ? "text-[#bfa15f] font-semibold" : ""}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Block */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4 font-bold">Price Range</h3>
        <input 
          type="range" 
          min="0" 
          max="10000" 
          defaultValue="5000" 
          className="w-full accent-[#bfa15f] cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>#0</span>
          <span>#1,000,000+</span>
        </div>
      </div>

      {/* Brands Block */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4 font-bold">Top Brands</h3>
        <div className="space-y-2.5">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2.5 text-sm text-gray-500 cursor-pointer select-none">
              <input 
                type="checkbox" 
                defaultChecked={brand === "Nord"}
                className="w-4 h-4 accent-[#bfa15f] rounded border-gray-300 focus:ring-0" 
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}