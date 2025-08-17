"use client";
import React from "react";
import ProductCard from "@/components/Product";
import { useProducts } from "@/hooks/useProduct";
import { useRouter } from "next/navigation";
import Loading from "../loading";

export default function ProductPage() {
  const { products, loading, error } = useProducts();
  const router = useRouter();

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 flex justify-center items-center min-h-screen">{error}</p>;

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 flex-1">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id.toString()}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {/* Desktop Proceed Button */}
        <div className="hidden md:block md:sticky md:top-24 md:self-start">
          <button
            className="w-full md:w-auto px-6 py-3 rounded-lg bg-sky-400 text-black text-base font-semibold shadow hover:bg-sky-300 active:scale-[0.98] transition-transform"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Mobile Proceed Button */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden p-4 bg-black border-t border-gray-700 shadow-lg">
        <button
          className="w-full px-6 py-3 rounded-lg bg-sky-400 text-black text-base font-semibold shadow hover:bg-sky-300 active:scale-[0.98] transition-transform"
          onClick={() => router.push("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
