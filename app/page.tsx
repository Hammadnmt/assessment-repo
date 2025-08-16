"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Master the Markets <br /> with AI-Powered Strategies
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Learn trading, arbitrage, and investing strategies from experts. Take control of your financial
            future with our actionable courses.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/products")}
              className="px-6 py-3 bg-yellow-500 text-indigo-900 font-semibold rounded-xl hover:bg-yellow-400 transition"
            >
              Explore Courses
            </button>
            <button
              onClick={() => router.push("/checkout")}
              className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-indigo-900 transition"
            >
              Start Learning
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://via.placeholder.com/500x400?text=AI+Trading+Dashboard"
            alt="AI Trading Dashboard"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-indigo-800 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-indigo-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
            <p className="text-gray-200">Get actionable market predictions using AI and machine learning.</p>
          </div>
          <div className="bg-indigo-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Hands-On Courses</h3>
            <p className="text-gray-200">
              Learn by doing with real examples, trading simulations, and exercises.
            </p>
          </div>
          <div className="bg-indigo-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
            <p className="text-gray-200">
              Join a community of traders, share strategies, and learn together.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center bg-indigo-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your trading journey?</h2>
        <p className="text-gray-300 mb-8 max-w-xl">
          Sign up now and gain instant access to all courses, AI tools, and exclusive trading strategies.
        </p>
        <button
          onClick={() => router.push("/products")}
          className="px-8 py-4 bg-yellow-500 text-indigo-900 font-semibold rounded-xl hover:bg-yellow-400 transition"
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-800 text-gray-300 py-6 text-center">
        &copy; 2025 AI Trading Academy. All rights reserved.
      </footer>
    </div>
  );
}
