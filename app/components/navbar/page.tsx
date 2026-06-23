"use client";

import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Booking", href: "/booking" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  const getNavLinkClass = (href: string) => {
    const isActive = pathname === href;

    return `relative cursor-pointer transition-colors duration-300 py-2 ${
      isActive
        ? "text-[#8B6A00] font-semibold"
        : "text-[#4A4A4A] hover:text-[#8B6A00]"
    }`;
  };

  return (
   <main className="max-w-7xl mx-auto px-6 py-16 text-[#0b1325]">
      <div className="max-w-7xl mx-auto h-[72px] flex items-center justify-between px-5 md:px-8 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Sammy T Logo"
            className="h-15 w-15 object-cover rounded-full"
          />

          <Link href="/">
            <h1 className="text-[22px] md:text-[30px] font-serif tracking-[4px] text-[#8B6A00]">
              SAMMY T
            </h1>
          </Link>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10 text-[15px] font-medium">

            {navLinks.map((link) => (
              <li key={link.href} className={getNavLinkClass(link.href)}>
                <Link href={link.href}>
                  {link.name}

                  {pathname === link.href && (
                    <span className="absolute left-0 bottom-[-24px] h-[3px] w-full bg-[#C9A227]" />
                  )}
                </Link>
              </li>
            ))}

          </ul>
        </nav>


        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-8">

          <Search
            size={22}
            strokeWidth={1.8}
            className="cursor-pointer text-[#4A4A4A] hover:text-[#8B6A00]"
          />

          <button className="px-7 py-3 rounded-full bg-[#D4AF37] text-[#4D3A00] text-sm font-medium hover:bg-[#c7a32f] transition">
            Book Now
          </button>

        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#8B6A00]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>


      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5">

          <ul className="flex flex-col gap-5 text-[16px]">

            {navLinks.map((link) => (
              <li
                key={link.href}
                className={getNavLinkClass(link.href)}
                onClick={() => setOpen(false)}
              >
                <Link href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>


          <button className="mt-6 w-full px-6 py-3 rounded-full bg-[#D4AF37] text-[#4D3A00]">
            Book Now
          </button>

        </div>
      )}

    </main>
  );
}