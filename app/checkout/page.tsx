"use client";
import React from "react";
import { useCheckout } from "@/hooks/useCheckout";
import EmptyState from "@/components/EmptyCart";
import { CartItemRow } from "@/components/CartItemRow";
import { OrderSummary } from "@/components/OrderSummary";

export default function CheckoutPage() {
  const { items, totalPrice, itemCounter, isEmpty } = useCheckout();

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(amount);

  if (isEmpty) return <EmptyState />;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-md">
              <div className="px-6 py-4 border-b border-gray-200 bg-indigo-50">
                <h2 className="text-lg font-semibold text-indigo-800">Your Cart ({itemCounter})</h2>
              </div>
              <ul className="divide-y divide-gray-200">
                {items.map((item) => (
                  <CartItemRow key={item._id} item={item} formatCurrency={formatCurrency} />
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <OrderSummary totalPrice={totalPrice} formatCurrency={formatCurrency} />
          </aside>
        </div>
      </div>
    </div>
  );
}
