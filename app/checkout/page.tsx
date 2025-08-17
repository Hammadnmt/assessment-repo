"use client";
import React from "react";
import { useCheckout } from "@/hooks/useCheckout";
import EmptyState from "@/components/EmptyCart";
import { CartItemRow } from "@/components/CartItemRow";
import PaymentForm from "@/components/OrderSummary";

export default function CheckoutPage() {
  const { items, totalPrice, itemCounter, isEmpty } = useCheckout();

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(amount);

  if (isEmpty) return <EmptyState />;

  return (
    <div className="min-h-screen bg-black py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Cart */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-black border border-gray-700 shadow-md">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-700 bg-black">
                <h2 className="text-lg font-semibold text-white">Your Cart ({itemCounter})</h2>
              </div>

              {/* Cart Items */}
              <ul className="divide-y divide-gray-700">
                {items.map((item) => (
                  <CartItemRow key={item._id} item={item} formatCurrency={formatCurrency} />
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <PaymentForm />
          </aside>
        </div>
      </div>
    </div>
  );
}
