"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="container mx-auto px-4 md:px-16 py-5">
        <div className="flex items-center justify-between">
          {/* @Logo Navbar */}
          <Image
            src="/images/logo-sporton.svg"
            alt="Sporton Logo"
            width={127}
            height={30}
          />

          {/* @Desktop Menu */}
          <nav className="hidden md:flex items-center gap-12 font-medium">
            <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">
              Home
            </Link>
            <Link href="#">Category</Link>
            <Link href="#">Explore Product</Link>
          </nav>

          {/* @Icons Search & Shopping Bag */}
          <div className="flex items-center gap-5">
            <FiSearch size={22} />

            <div className="relative">
              <FiShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </div>

            {/* @Hamburger menu will appear when mobile mode */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* @The navbar dropdown menu will appear when the hamburger icon is clicked.*/}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-6 font-medium bg-white">
            <Link href="#" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Category
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Explore Product
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}