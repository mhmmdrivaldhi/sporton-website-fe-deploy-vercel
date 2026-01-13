"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useCartStore } from "@/app/hooks/use-cart-store";

export default function Header() {
  const {items} = useCartStore();
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="z-50 fixed w-full backdrop-blur-3xl bg-white/70">
      <div className="container mx-auto px-4 md:px-16 py-5">
        <div className="flex items-center justify-between">
          {/* @Logo Navbar */}
          <Link href="/">
            <Image
              src="/images/logo-sporton.svg"
              alt="Sporton Logo"
              width={127}
              height={30}
            />
          </Link>

          {/* @Desktop Menu */}
          <nav className="hidden md:flex items-center gap-12 font-medium">
            <Link href="#hero-section" className="relative after:content-[''] after:block after:bg-primary after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">
              Home
            </Link>
            <Link href="#category-section">Category</Link>
            <Link href="#products-section">Explore Product</Link>
          </nav>

          {/* @Icons Search & Shopping Bag */}
          <div className="flex items-center gap-5">
            <FiSearch size={22} />

            <div className="relative hover:bg-primary-light cursor-pointer hover:rounded-full p-2" onClick={() => setOpenCart(!openCart)}>
              <FiShoppingBag size={22} className="cursor-pointer" />
              {
                items.length ? (
                  <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                ) : (
                <></>
                )}
            </div>
            {
             openCart  && <CartPopup/> 
            }

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
            <Link href="#hero-section" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#category-section" onClick={() => setOpen(false)}>
              Category
            </Link>
            <Link href="#prodct-section" onClick={() => setOpen(false)}>
              Explore Product
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}