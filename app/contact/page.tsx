import Navbar from '../components/navbar/page';
import Link from "next/link";
export default function ContactPage() {
  return (
    
        
    <div>
        <Navbar/>
        <main className="min-h-screen bg-white text-[#0b1325] px-6 py-16">
      <section className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#bfa15f]">
            Contact Us
          </span>

          <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            Get In Touch
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions about our instruments? Need help choosing the perfect
            drum? Send us a message and we’ll be happy to help.
          </p>
        </div>


        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-[#0b1325] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-300">

              <div>
                <p className="text-[#bfa15f] text-sm">Address</p>
                <p>Lagos, Nigeria</p>
              </div>

              <div>
                <p className="text-[#bfa15f] text-sm">Phone</p>
                <p>+234 8064075797</p>
              </div>

              <div>
                <p className="text-[#bfa15f] text-sm">Email</p>
                <p>samuelakinola29@gmail.com</p>
              </div>

              <div>
                <p className="text-[#bfa15f] text-sm">Opening Hours</p>
                <p>Mon - Sat: 9AM - 6PM</p>
              </div>

            </div>
          </div>


          {/* Contact Form */}
          <form className="border border-gray-200 rounded-2xl p-8 shadow-sm">

            <div className="mb-5">
              <label className="block text-sm mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#bfa15f]"
              />
            </div>


            <div className="mb-5">
              <label className="block text-sm mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#bfa15f]"
              />
            </div>


            <div className="mb-5">
              <label className="block text-sm mb-2">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#bfa15f]"
              />
            </div>


           <Link
           href="/"
           >
            <button
              className="w-full bg-[#bfa15f] text-white py-3 rounded-lg hover:bg-[#a88d4b] transition"
            >
              Send Message
            </button>
           </Link>

          </form>

        </div>

      </section>
    </main>
    </div>
    
  );
}