"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-black to-gray-900">
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Elevate Your Trading Game</h1>
          <p className="text-gray-300 text-lg md:text-2xl mb-8">
            Unlock AI-powered insights, expert strategies, and tools that give you the edge in crypto, stocks,
            and Forex markets.
          </p>
          <button
            onClick={() => router.push("/products")}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-lg font-semibold transition-transform active:scale-[0.98]"
          >
            Explore Products
          </button>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-300">
              Make smarter trades with predictive algorithms and data-driven strategies.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Multi-Market Tools</h3>
            <p className="text-gray-300">
              Access advanced tools for Forex, Crypto, Stocks, and Commodities in one place.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Step-by-Step Guides</h3>
            <p className="text-gray-300">
              Learn actionable strategies with detailed tutorials and real-world examples.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-900 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Trading Smarter Today</h2>
          <p className="text-gray-200 mb-8">
            Join thousands of traders who are leveling up their performance using AI-driven tools.
          </p>
          <button
            onClick={() => router.push("/products")}
            className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-2xl hover:bg-gray-200 transition-transform active:scale-[0.98]"
          >
            Browse Products
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} TradeMaster AI. All rights reserved.
      </footer>
    </div>
  );
}
