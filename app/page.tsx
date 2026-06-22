import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export default function HomePage() {
  const products = [
    {
      name: "Classic Guitar",
      price: "$299",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Digital Keyboard",
      price: "$499",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mixer Console",
      price: "$399",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Studio Microphone",
      price: "$199",
      image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main>
      {/* Hero Section */}

      <Navbar/>
      <section
  className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
  "url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-32">
    <div className="max-w-xl text-white">
      <p className="text-sm uppercase tracking-widest text-yellow-400">
        SAMMY TEE
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-4">
        Elevate Your Sound
        <br />
        with Sammy Tee
      </h1>

      <p className="mt-6 text-lg text-gray-200">
        Professional musical entertainment, live performances,
        premium instruments and unforgettable experiences.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-yellow-600 hover:bg-yellow-700 transition px-6 py-3 rounded-lg font-semibold">
          Book Now
        </button>

        <button className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Little Musical Engagements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Live Performances",
              "Music Production",
              "Private Lessons",
            ].map((item) => (
              <div
                key={item}
                className="p-8 border rounded-xl hover:shadow-lg"
              >
                <h3 className="font-bold text-xl mb-4">{item}</h3>
                <p className="text-gray-600">
                  Professional musical solutions tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between mb-10">
            <h2 className="text-4xl font-bold">
              Premium Instruments
            </h2>

            <button className="text-yellow-600 font-semibold">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-xl overflow-hidden shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-yellow-600 font-bold mt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Upcoming Performances
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img
                src="/images/concert.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <div className="border-b pb-5">
                <h3 className="font-bold">
                  The Melody Symphony Gala
                </h3>
                <p className="text-gray-600">
                  July 20, 2026
                </p>
              </div>

              <div className="border-b pb-5">
                <h3 className="font-bold">
                  Acoustic Night Live
                </h3>
                <p className="text-gray-600">
                  August 10, 2026
                </p>
              </div>

              <div>
                <h3 className="font-bold">
                  Jazz Evening Experience
                </h3>
                <p className="text-gray-600">
                  September 15, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Client Stories
          </h2>

          <div className="bg-white p-10 rounded-xl shadow">
            <p className="italic text-lg text-gray-700">
              "Sammy Tee transformed our event into a memorable
              musical experience. Highly recommended."
            </p>

            <h4 className="font-bold mt-6">
              — Michael Johnson
            </h4>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Contact for Artistry
              </h2>

              <p className="text-gray-600">
                Let's discuss your next event or musical project.
              </p>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full border p-3 rounded-lg"
              />

              <button
                className="w-full bg-yellow-600 text-white py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer/>
    </main>
  );
}