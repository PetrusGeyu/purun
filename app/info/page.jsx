import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-center gap-10 p-8 bg-green-50">
      {/* Gambar Profil */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <Image
            src="/assets/profil.jpg"
            alt="Profil"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
          {/* Hiasan Background */}
          <div className="absolute -top-4 -left-4 w-full h-full border-4 border-green-300 rounded-2xl -z-10"></div>
        </div>
      </div>

      {/* Teks Profil */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-green-700 mb-6">
          Tentang Saya
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Halo, saya <span className="font-semibold text-green-700">Petrus Hendrick Geyu</span>.
          Seorang mahasiswa Agroteknologi yang memiliki ketertarikan besar di
          bidang teknologi dan pengembangan web. Saya senang mempelajari hal-hal baru,
          khususnya di bidang AI, desain, dan pemrograman.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed text-lg">
          Tujuan saya adalah menggabungkan teknologi dengan dunia pertanian untuk
          menciptakan inovasi yang bermanfaat bagi masyarakat luas.
        </p>

        {/* Tombol CTA */}
        <div className="mt-6">
          <a
            href="#contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
