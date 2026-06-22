export default function ProductTabs() {
  return (
    <div className="border-t border-gray-200 pt-12 mb-20">
      {/* Tab Selectors */}
      <div className="flex gap-8 border-b border-gray-100 pb-3 mb-10 text-xs uppercase tracking-wider font-bold">
        <button className="text-[#bfa15f] border-b-2 border-[#bfa15f] pb-3 -mb-[14px]">Description</button>
        <button className="text-gray-400 hover:text-black transition-colors pb-3">Specifications</button>
        <button className="text-gray-400 hover:text-black transition-colors pb-3">Reviews (48)</button>
      </div>

      {/* Structured Showcase Layer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-2xl text-[#0b1325] font-medium mb-4">
            Precision Engineering for the Modern Virtuoso
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
            The Pro-Stage 88 represents three years of intensive research into tactile feedback and sonic depth. 
            Every key is individually weighted and graded to provide the authentic feel of a concert grand, while 
            our proprietary SoundCloud-X engine delivers breathtaking resonances that respond to your lightest touch.
          </p>
          <ul className="space-y-3 text-xs text-gray-600 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-[#bfa15f]">✔</span> Next-gen hammer action with ivory and ebony feel.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#bfa15f]">✔</span> High-resolution polyphony (unlimited on select engines).
            </li>
          </ul>
        </div>

        {/* Feature Aesthetic Asset */}
        <div className="aspect-[16/10] bg-[#eaeaea] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800" 
            alt="Interior layout detailing" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
}