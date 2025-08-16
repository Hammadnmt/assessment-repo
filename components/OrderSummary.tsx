import React from "react";

interface Props {
  totalPrice: number;
  formatCurrency: (amount: number) => string;
}

/**
 * Component to render the order summary section
 */
export const OrderSummary: React.FC<Props> = ({ totalPrice, formatCurrency }) => (
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

    <p className="text-xs text-gray-500 mt-3">By continuing, you agree to our Terms & Conditions.</p>
  </div>
);
