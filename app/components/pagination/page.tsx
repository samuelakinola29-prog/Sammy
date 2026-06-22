export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2">
      <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-[#bfa15f] hover:text-white transition-colors">
        &lsaquo;
      </button>
      <button className="w-9 h-9 flex items-center justify-center rounded-full border border-[#bfa15f] bg-[#bfa15f] text-white text-sm font-medium">
        1
      </button>
      <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-[#bfa15f] hover:text-white transition-colors text-sm">
        2
      </button>
      <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-[#bfa15f] hover:text-white transition-colors text-sm">
        3
      </button>
      <span className="text-gray-400 px-1 text-sm">...</span>
      <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-[#bfa15f] hover:text-white transition-colors text-sm">
        12
      </button>
      <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-[#bfa15f] hover:text-white transition-colors">
        &rsaquo;
      </button>
    </div>
  );
}