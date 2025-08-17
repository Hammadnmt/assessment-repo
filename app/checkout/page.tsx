"use client";
import React, { useState } from "react";
import { useCheckout } from "@/hooks/useCheckout";
import EmptyState from "@/components/EmptyCart";
import { CartItemRow } from "@/components/CartItemRow";
import Loading from "../loading";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const { items, itemCounter, totalPrice, isEmpty, loading, clearCart, cartEmpty } = useCheckout();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
  });

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(amount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  if (loading) return <Loading />;
  if (isEmpty) return <EmptyState />;

  return (
    <div className="min-h-screen bg-black py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Section */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-black border border-gray-700 shadow-md">
              <div className="px-6 py-4 border-b border-gray-700 bg-black">
                <h2 className="text-lg font-semibold text-white">Your Cart ({itemCounter})</h2>
              </div>

              <ul className="divide-y divide-gray-700">
                {items.map((item) => (
                  <CartItemRow key={item._id} item={item} formatCurrency={formatCurrency} />
                ))}
              </ul>
            </div>
          </div>

          {/* Checkout Summary + Form */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-black border border-gray-700 shadow-md p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
              <div className="flex justify-between text-sm text-gray-300 mb-4">
                <span>Total</span>
                <span className="font-semibold text-white">{formatCurrency(totalPrice)}</span>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-600 bg-black text-white p-3 placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-600 bg-black text-white p-3 placeholder-gray-400"
                />
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Shipping Address"
                  rows={3}
                  className="w-full rounded-lg border border-gray-600 bg-black text-white p-3 placeholder-gray-400"
                />
                <input
                  type="text"
                  name="payment"
                  value={form.payment}
                  onChange={handleChange}
                  placeholder="Payment Method (Dummy Input)"
                  className="w-full rounded-lg border border-gray-600 bg-black text-white p-3 placeholder-gray-400"
                />

                <button
                  type="submit"
                  className="mt-4 w-full rounded-lg bg-indigo-600 text-white py-3 font-semibold hover:bg-indigo-700 transition"
                  onClick={async () => {
                    toast.success("Order Placed");
                    cartEmpty();
                  }}
                >
                  Complete Checkout
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
