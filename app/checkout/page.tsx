"use client";
import React from "react";
import { useCart } from "@/context/cart/cart.context";
import EmptyState from "@/components/EmptyCart";

const formatCurrency = (amount: number, currency: string = "USD") =>
  new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount);
export default function page() {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice, itemCounter } = useCart();

  const isEmpty = items.length === 0;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Checkout</h1>

        {isEmpty ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                <div className="px-6 py-4 border-b border-gray-200 bg-indigo-50">
                  <h2 className="text-lg font-semibold text-indigo-800">Your Cart ({itemCounter})</h2>
                </div>

                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800 truncate">{item.name}</p>
                        <div className="mt-1 text-sm text-gray-500">Price: {formatCurrency(item.price)}</div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          disabled={item.quantity <= 1}
                          className="h-9 w-9 rounded-xl border border-gray-300 bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 active:scale-95 transition"
                          aria-label={`Decrease ${item.name} quantity`}
                          title={item.quantity <= 1 ? "Minimum quantity is 1" : "Decrease"}
                        >
                          −
                        </button>
                        <span className="w-10 text-center font-medium text-gray-800 select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="h-9 w-9 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 active:scale-95 transition"
                          aria-label={`Increase ${item.title} quantity`}
                          title="Increase"
                        >
                          +
                        </button>
                      </div>

                      {/* Line total */}
                      <div className="w-28 text-right font-semibold text-gray-900">
                        {formatCurrency(item.price * item.quantity)}
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-sm text-red-600 hover:text-red-700 hover:underline"
                        aria-label={`Remove ${item.title}`}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <aside className="lg:col-span-1">
              <div className="rounded-2xl bg-white shadow-md p-6 sticky top-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium">{formatCurrency(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span>—</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Tax</span>
                    <span>—</span>
                  </div>
                  <div className="border-t border-gray-200 my-2" />
                  <div className="flex justify-between text-base font-semibold text-gray-900">
                    <span>Total</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-2xl bg-indigo-600 text-white py-3 font-semibold shadow hover:bg-indigo-700 active:scale-[0.99] transition">
                  Continue to Payment
                </button>

                <p className="text-xs text-gray-500 mt-3">
                  By continuing, you agree to our Terms & Conditions.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
