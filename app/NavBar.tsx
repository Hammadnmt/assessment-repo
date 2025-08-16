"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart/cart.context";

export default function Navbar() {
  const { itemCounter } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-indigo-500">
          TradeMaster AI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-indigo-400 transition-colors">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-indigo-400 transition-colors relative">
            Checkout
            {itemCounter > 0 && (
              <span className="ml-1 text-xs bg-red-600 text-white rounded-full px-2">{itemCounter}</span>
            )}
          </Link>
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
          <Link
            href="/"
            className="block px-6 py-3 hover:bg-gray-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-6 py-3 hover:bg-gray-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/checkout"
            className="block px-6 py-3 hover:bg-gray-700 transition-colors relative"
            onClick={() => setIsOpen(false)}
          >
            Checkout
            {itemCounter > 0 && (
              <span className="ml-1 text-xs bg-red-600 text-white rounded-full px-2">{itemCounter}</span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}
