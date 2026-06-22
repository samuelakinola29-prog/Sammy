"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Helper function to dynamically calculate text colors and active indicator lines
  const getNavLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `relative cursor-pointer transition-colors duration-300 py-2 ${
      isActive 
        ? "text-[#8B6A00] font-semibold" 
        : "text-[#4A4A4A] hover:text-[#8B6A00]"
    }`;
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 static top-0 z-50">
      <div className="max-w-7xl mx-auto h-[72px] flex items-center justify-between px-8 lg:px-12">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-[28px] md:text-[36px] font-serif tracking-[4px] text-[#8B6A00] transition-opacity hover:opacity-90">
            SAMMY TEE
          </h1>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10 text-[15px] font-medium">
            
            {/* Home */}
            <Link href="/">
              <li className={getNavLinkClass("/")}>
                Home
                {pathname === "/" && (
                  <span className="absolute left-0 bottom-[-24px] h-[3px] w-full bg-[#C9A227]" />
                )}
              </li>
            </Link>
            
            {/* About */}
            <Link href="/about">
              <li className={getNavLinkClass("/about")}>
                About
                {pathname === "/about" && (
                  <span className="absolute left-0 bottom-[-24px] h-[3px] w-full bg-[#C9A227]" />
                )}
              </li>
            </Link>

            {/* Booking */}
            <Link href="/booking">
              <li className={getNavLinkClass("/booking")}>
                Booking
                {pathname === "/booking" && (
                  <span className="absolute left-0 bottom-[-24px] h-[3px] w-full bg-[#C9A227]" />
                )}
              </li>
            </Link>

            {/* Shop */}
            <Link href="/shop">
              <li className={getNavLinkClass("/shop")}>
                Shop
                {pathname === "/shop" && (
                  <span className="absolute left-0 bottom-[-24px] h-[3px] w-full bg-[#C9A227]" />
                )}
              </li>
            </Link>

            {/* Contact */}
            <Link href="/contact">
              <li className={getNavLinkClass("/contact")}>
                Contact
                {pathname === "/contact" && (
                  <span className="absolute left-0 bottom-[-24px] h-[3px] w-full bg-[#C9A227]" />
                )}
              </li>
            </Link>

          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          <Search
            size={22}
            strokeWidth={1.8}
            className="cursor-pointer text-[#4A4A4A] hover:text-[#8B6A00] transition-colors"
          />

          <button className="px-8 py-3 rounded-full bg-[#D4AF37] text-[#4D3A00] text-sm font-medium hover:bg-[#c7a32f] hover:shadow-md transition">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}