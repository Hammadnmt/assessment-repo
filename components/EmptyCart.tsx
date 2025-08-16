export default function EmptyState() {
  return (
    <div className="rounded-2xl bg-white p-10 shadow-md text-center">
      <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-indigo-50 flex items-center justify-center text-3xl text-indigo-600">
        🛒
      </div>
      <h2 className="text-xl font-semibold text-gray-900">Your cart is empty</h2>
      <p className="text-gray-600 mt-1">Add items to proceed to checkout.</p>
      <a
        href="/products"
        className="inline-block mt-6 rounded-2xl border border-indigo-600 text-indigo-600 px-5 py-2.5 font-medium hover:bg-indigo-50"
      >
        Browse Products
      </a>
    </div>
  );
}
