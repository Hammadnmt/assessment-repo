import React from "react";

const PaymentForm: React.FC = () => {
  return (
    <div className="rounded-2xl bg-black border border-gray-700 shadow-md p-6 w-full max-w-md">
      {/* Go Back */}
      <button className="text-sm text-gray-400 hover:text-gray-200 mb-4">← Go Back</button>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-4">Payment Details</h3>
      <p className="text-sm text-gray-400 mb-6">Enter your credit card information</p>

      {/* Card Number */}
      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-1">Card Number</label>
        <div className="flex items-center bg-black border border-gray-600 rounded-lg px-3">
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            className="w-full bg-transparent py-3 text-white placeholder-gray-500 focus:outline-none"
          />
          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-md mr-2">link</span>
          <span className="bg-white text-black px-2 py-1 rounded-md text-xs font-semibold">VISA 4242</span>
        </div>
      </div>

      {/* Expiration + CVC */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-400 text-sm mb-1">Expiration Date</label>
          <input
            type="text"
            placeholder="MM / YY"
            className="w-full bg-black border border-gray-600 rounded-lg px-3 py-3 text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">CVC</label>
          <input
            type="text"
            placeholder="CVC"
            className="w-full bg-black border border-gray-600 rounded-lg px-3 py-3 text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Submit */}
      <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Submit Payment
      </button>
    </div>
  );
};

export default PaymentForm;
