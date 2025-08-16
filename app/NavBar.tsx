"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart/cart.context";

export default function Navbar() {
  const { itemCounter } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/checkout", label: "Checkout", showCounter: true },
  ];

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-indigo-500">
          TradeMaster AI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-indigo-400 transition-colors relative"
            >
              {link.label}
              {link.showCounter && itemCounter > 0 && (
                <span className="ml-1 text-xs bg-red-600 text-white rounded-full px-2">{itemCounter}</span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-100 hover:text-indigo-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-3 hover:bg-gray-700 transition-colors relative"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
              {link.showCounter && itemCounter > 0 && (
                <span className="ml-1 text-xs bg-red-600 text-white rounded-full px-2">{itemCounter}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
