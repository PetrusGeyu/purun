import Image from "next/image";

export default function About() {
  const plants = [
    {
      name: "Kelapa Sawit",
      description:
        "Kelapa sawit merupakan komoditas utama di Kalimantan Tengah, menjadi sumber penghasilan besar bagi petani dan industri perkebunan. Minyaknya digunakan dalam berbagai produk pangan dan non-pangan.",
      image: "/assets/sawit.png", // ✅ hapus 'public'
    },
    {
      name: "Karet",
      description:
        "Karet adalah salah satu tanaman perkebunan penting yang menghasilkan getah lateks, bahan baku industri ban, sarung tangan, dan berbagai produk karet lainnya.",
      image: "/assets/karet.jpg",
    },
    {
      name: "Kelapa",
      description:
        "Kelapa banyak dimanfaatkan mulai dari airnya yang segar, dagingnya yang kaya gizi, hingga serat sabutnya untuk bahan kerajinan dan industri.",
      image: "/assets/kelapa.jpg",
    },
    {
      name: "Padi",
      description:
        "Padi menjadi tanaman pangan utama yang diusahakan oleh petani, sebagai sumber beras untuk kebutuhan pangan masyarakat Kalimantan Tengah.",
      image: "/assets/padi.jpg",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          Kami adalah platform yang berfokus pada potensi pertanian di Kalimantan Tengah.
          Melalui penelitian, pengalaman, dan wawasan dari para petani, kami ingin memperkenalkan
          keunggulan sumber daya alam daerah ini kepada masyarakat luas, serta mendorong
          pengelolaan yang bijak untuk masa depan yang berkelanjutan.
        </p>
      </div>

      <div className="space-y-16">
        {plants.map((plant, index) => (
          <div
            key={plant.name}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={plant.image}
                alt={plant.name}
                width={600} // ✅ wajib untuk Next/Image
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-80"
              />
            </div>
            <div className="w-full md:w-1/2 md:px-8 mt-6 md:mt-0">
              <h3 className="text-2xl font-bold mb-4 text-green-700">{plant.name}</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {plant.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
