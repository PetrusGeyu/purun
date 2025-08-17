"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = [
    { url: "Beranda", path: "/" },
    { url: "Tentang", path: "/tentang" },
    { url: "Produk", path: "/produk" },
    { url: "Kontak", path: "/kontak" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent flex justify-between items-center p-6 z-10 text-white ">
      {/* Logo */}
      <h1 className="text-lg font-semibold">FarGrammer</h1>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-6 text-sm">
        {NavItems.map((item, idx) => (
          <li key={idx}>
            <Link href={item.path}>{item.url}</Link>
          </li>
        ))}
      </ul>

      {/* Tombol Kontak (Desktop) */}
      <Link
        href="/contact"
        className="hidden md:flex bg-lime-400 text-black px-4 py-2 rounded-full items-center space-x-2 hover:bg-lime-500"
      >
        <span>Contact Us</span>
        <span>📞</span>
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 md:hidden">
          <ul className="flex flex-col space-y-4">
            {NavItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.url}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-4 bg-lime-400 text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-lime-500"
            onClick={() => setIsOpen(false)}
          >
            <span>Contact Us</span>
            <span>📞</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
