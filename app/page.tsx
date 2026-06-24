import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export default function HomePage() {
  const products = [
    {
      name: "Professional Talking drum",
      price: "(₦)50,000",
      image: "/drum9.jpg",
    },
    {
      name: "Electric Talking Drum",
      price: "(₦)80,000",
      image: "/drum10.jpg",
    },
    {
      name: "3 in 1 Multi-function",
      price: "(₦)150,000",
      image: "/drum12.jpg",
    },
    {
      name: "Studio & Stage quality",
      price: "(₦)70,000",
      image: "/drum11.jpg",
    },
     {
      name: "Playing Stick",
      price: "(₦)2,000",
      image: "/stick1.jpg",
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
   "url('/stage2.jpg')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-32">
    <div className="max-w-xl text-white">
      <p className="text-sm uppercase tracking-widest text-yellow-400">
        SAMMY T WORLDWIDE
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-4">
        Elevate Your Sound
        <br />
        with Sammy T worldwide
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
                  The Final Burial Ceremony
                </h3>
                <p className="text-gray-600">
                  June 26, 2026
                </p>
              </div>

              <div className="border-b pb-5">
                <h3 className="font-bold">
                  TUG 2026
                </h3>
                <p className="text-gray-600">
                  June 28, 2026
                </p>
              </div>

              <div>
                <h3 className="font-bold">
                  Ilorin Praise Concert
                </h3>
                <p className="text-gray-600">
                  July 26, 2026
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