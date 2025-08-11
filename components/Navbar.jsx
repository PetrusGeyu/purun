import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const NavItems = [
    { url: 'Beranda', path: '/' },
    { url: 'Tentang', path: '/tentang' },
    { url: 'Produk', path: '/produk' },
    { url: 'Kontak', path: '/kontak' }
  ];

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10 text-white">
            <ul className="flex space-x-6 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Info</Link></li>
            </ul>
            <h1 className="text-lg font-semibold">FarGrammer</h1>
            <Link
              href="/contact"
              className="bg-lime-400 text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-lime-500"
            >
              <span>Contact Us</span>
              <span>📞</span>
            </Link>
          </nav>
    
  );
};

export default Navbar;
