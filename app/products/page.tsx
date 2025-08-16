"use client";
import React from "react";
import ProductCard from "@/components/Product";
import { useProducts } from "@/hooks/useProduct";
import { useRouter } from "next/navigation";
import Loading from "../loading";

export default function ProductPage() {
  const { products, loading, error } = useProducts();
  const router = useRouter();

  // Show loader while fetching products
  if (loading) return <Loading />;

  // Show error if fetching fails
  if (error) return <p className="text-red-500 flex justify-center items-center min-h-screen">{error}</p>;

  return (
    <div className="min-h-screen bg-black p-4">
      {/* Grid container */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {/* Product Grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 flex-1">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {/* Desktop Proceed Button */}
        <div className="hidden md:block md:sticky md:top-24 md:self-start">
          <button
            className="w-full md:w-auto px-6 py-3 rounded-2xl bg-indigo-600 text-white text-lg font-semibold shadow hover:bg-indigo-700 active:scale-[0.98] transition-transform"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Mobile Proceed Button */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden p-4 bg-black shadow-lg">
        <button
          className="w-full px-6 py-3 rounded-2xl bg-indigo-600 text-white text-lg font-semibold shadow hover:bg-indigo-700 active:scale-[0.98] transition-transform"
          onClick={() => router.push("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
