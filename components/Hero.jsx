import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/assets/bg.jpeg"
        alt="Background"
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl p-6 text-white">
        <h1 className="text-3xl md:text-5xl font-light leading-tight">
          Potensi Pertanian di Kalimantan Tengah!
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-200">
          Kalimantan Tengah memiliki tanah yang subur dan sumber daya alam
          yang melimpah, menjadikannya salah satu wilayah dengan peluang besar
          di sektor pertanian. Dari padi, kelapa sawit, hingga hortikultura,
          potensi ini dapat menjadi motor penggerak ekonomi daerah dan
          kesejahteraan masyarakat. Mari kita kelola dengan bijak untuk masa
          depan yang berkelanjutan.
        </p>

        <div className="mt-6 flex space-x-4 justify-center">
          <Link
            href="#about"
            className="bg-transparent border border-lime-400 text-lime-400 px-6 py-3 rounded-full hover:bg-lime-500 hover:text-black hover:border-lime-500"
          >
            Telusuri
          </Link>
        </div>
      </div>
    </section>
  );
}
