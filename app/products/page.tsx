"use client";
import React, { useEffect } from "react";
import ProductCard from "@/components/Product";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart/cart.context";
export default function page() {
  const products = [
    {
      id: 1,
      title: "IA Pair Trading on Steroids",
      price: 69,
      image: "https://via.placeholder.com/300x200?text=IA+Pair+Trading",
    },
    {
      id: 2,
      title: "Crypto Arbitrage Mastery",
      price: 85,
      image: "https://via.placeholder.com/300x200?text=Crypto+Arbitrage",
    },
    {
      id: 3,
      title: "AI Market Prediction Pro",
      price: 110,
      image: "https://via.placeholder.com/300x200?text=AI+Prediction",
    },
    {
      id: 4,
      title: "Options Hedging Toolkit",
      price: 55,
      image: "https://via.placeholder.com/300x200?text=Options+Toolkit",
    },
    {
      id: 5,
      title: "Forex Swing Trader",
      price: 65,
      image: "https://via.placeholder.com/300x200?text=Forex+Swing",
    },
    {
      id: 6,
      title: "Commodities Gold Rush",
      price: 99,
      image: "https://via.placeholder.com/300x200?text=Gold+Rush",
    },
    {
      id: 7,
      title: "Volatility Crusher",
      price: 79,
      image: "https://via.placeholder.com/300x200?text=Volatility",
    },
    {
      id: 8,
      title: "ETF Growth Engine",
      price: 75,
      image: "https://via.placeholder.com/300x200?text=ETF+Growth",
    },
    {
      id: 9,
      title: "Penny Stock Radar",
      price: 39,
      image: "https://via.placeholder.com/300x200?text=Penny+Stocks",
    },
    {
      id: 10,
      title: "Tech Sector Alpha",
      price: 99,
      image: "https://via.placeholder.com/300x200?text=Tech+Alpha",
    },
    {
      id: 11,
      title: "Real Estate REITs Mastery",
      price: 89,
      image: "https://via.placeholder.com/300x200?text=REITs+Mastery",
    },
    {
      id: 12,
      title: "Index Fund Booster",
      price: 49,
      image: "https://via.placeholder.com/300x200?text=Index+Booster",
    },
  ];
  const router = useRouter();
  const { items } = useCart();

  useEffect(() => {
    console.log("items", items);
  }, [items]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="grid md:grid-cols-3 grid-cols-1">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <button className="text-2xl text-white" onClick={() => router.push("/checkout")}>
        Proceed
      </button>
    </div>
  );
}
