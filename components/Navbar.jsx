"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = [
    { url: "Beranda", path: "/" },
    { url: "Tentang", path: "/tentang" },
    { url: "Produk", path: "/produk" },
    { url: "Kontak", path: "/kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center p-6 z-20 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/30 shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">FarGrammer</h1>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        {NavItems.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-lime-400 transition-colors cursor-pointer"
          >
            <Link href={item.path}>{item.url}</Link>
          </li>
        ))}
      </ul>

      {/* Tombol Kontak (Desktop) */}
      <Link
        href="/"
        className="hidden md:flex bg-lime-400 text-black px-5 py-2 rounded-full items-center gap-2 font-medium hover:bg-lime-500 transition-colors"
      >
        <span>Contact Us</span>
        <span>📞</span>
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-current transition-all"></span>
        <span className="block w-6 h-0.5 bg-current transition-all"></span>
        <span className="block w-6 h-0.5 bg-current transition-all"></span>
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full backdrop-blur-md bg-white/80 p-6 md:hidden z-30 shadow-md rounded-b-2xl">
          <ul className="flex flex-col space-y-6 text-lg font-medium text-black">
            {NavItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="block hover:text-lime-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.url}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="mt-6 bg-lime-400 text-black px-5 py-2 rounded-full flex items-center gap-2 hover:bg-lime-500 transition-colors"
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
