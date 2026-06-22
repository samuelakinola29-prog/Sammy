export default function CrossSellGrid() {
  const recommendations = [
    { id: 1, title: "Reference 8 Studio Monitors", price: "₦1,150,000.00 / Pair", image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=400" },
    { id: 2, title: "Gold-Link XLR Pro Cable", price: "₦89,000.00", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400" },
    { id: 3, title: "Titan-X Double Brace Stand", price: "₦210,000.00", image: "https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?q=80&w=400" },
    { id: 4, title: "Virtuoso Performance Bench", price: "₦395,000.00", image: "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=400" },
  ];

  return (
    <section>
      <div className="flex justify-between items-baseline border-b border-gray-200 pb-4 mb-8">
        <h2 className="font-serif text-xl md:text-2xl font-medium">Complete Your Studio</h2>
        <span className="text-xs uppercase tracking-wider text-[#bfa15f] font-bold cursor-pointer hover:underline">View All Shop</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-[#f4f4f6] w-full overflow-hidden mb-3 p-4 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 mix-blend-multiply" 
              />
            </div>
            <h3 className="text-xs font-semibold text-[#0b1325] truncate mb-1">{item.title}</h3>
            <span className="text-xs text-[#bfa15f] font-medium">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}