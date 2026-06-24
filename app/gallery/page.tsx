import Navbar from "../components/navbar/page";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/crowd1.jpg",
    "/crowd2.jpg",
    "/stage.jpg",
    "/stage1.jpg",
    "/stage2.jpg",
    "/stage3.jpg",
    "/stage4.jpg",
    "/stage5.jpg",
    "/stage6.jpg",
    "/stage7.jpg",
    "/stage8.jpg",
    "/gallery.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
  ];

  return (
    
  <div>
    <Navbar/>  
    <main className="min-h-screen bg-white px-6 py-16">

      <section className="max-w-7xl mx-auto">

        <h1 className="text-5xl text-center font-serif text-[#0b1325] mb-10">
          Our Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">

              <Image
                src={image}
                alt="Gallery"
                width={400}
                height={400}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />

            </div>
          ))}

        </div>

      </section>

    </main>
  </div>
  );
}