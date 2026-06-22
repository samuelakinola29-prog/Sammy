import Link from "next/link";
import {
  Music2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <span className="text-yellow-500 uppercase tracking-widest text-sm">
            Sammy.T Worldwide
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Create Musical Magic Together
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 mt-5">
            From live performances and special events to premium
            musical entertainment, Sammy.T Worldwide delivers
            unforgettable experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-3 rounded-md font-semibold">
              Book Performance
            </button>

            <button className="border border-zinc-600 hover:border-white px-8 py-3 rounded-md transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Music2 className="text-yellow-500" size={28} />
              <h3 className="text-2xl font-bold">
                Sammy.T Worldwide
              </h3>
            </div>

            <p className="text-zinc-400 mt-5 leading-relaxed">
              Elevating lives through music, entertainment,
              inspiration, and unforgettable performances.
            </p>

            {/* Social Icons using Network Images */}
            <div className="flex gap-5 mt-6 items-center">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group">
                <img 
                  src="https://cdn.simpleicons.org/facebook/ffffff/8b6a00" 
                  alt="Facebook" 
                  className="w-5 h-5 transition-colors"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
                <img 
                  src="https://cdn.simpleicons.org/instagram/ffffff/8b6a00" 
                  alt="Instagram" 
                  className="w-5 h-5 transition-colors"
                />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="group">
                <img 
                  src="https://cdn.simpleicons.org/youtube/ffffff/8b6a00" 
                  alt="YouTube" 
                  className="w-5 h-5 transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-5">
              Navigation
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>

              <li>
                <Link href="/events" className="hover:text-white transition-colors">Events</Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>Live Band Performance</li>
              <li>Music Production</li>
              <li>Wedding Entertainment</li>
              <li>Corporate Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-zinc-400">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+234 814 929 7309</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@sammytee.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  Ogbomoso,
                  <br />
                  Oyo State, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Sammy.T Worldwide.
            All Rights Reserved.
          </p>

          <p className="text-zinc-500 text-sm mt-3 md:mt-0">
            Designed with ❤️ for Music Lovers
          </p>
        </div>
      </div>
    </footer>
  );
}