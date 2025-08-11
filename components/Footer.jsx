import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo atau Nama */}
        <div className="text-lg font-bold">
          Petrus Hendrick Geyu
        </div>

        {/* Navigasi */}
        <div className="flex gap-6">
          <a href="#about" className="hover:text-gray-400 transition">Tentang</a>
          <a href="#projects" className="hover:text-gray-400 transition">Proyek</a>
          <a href="#contact" className="hover:text-gray-400 transition">Kontak</a>
        </div>

        {/* Hak Cipta */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Petrus Hendrick Geyu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
