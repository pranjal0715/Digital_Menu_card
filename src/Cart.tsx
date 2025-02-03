import React from "react";
import { ShoppingCart as Cart, Trash2 } from "lucide-react";

function CartPage({ cart, setCart, setCartCount }) {
  const handleRemove = (category, id) => {
    setCart((prev) => {
      const updatedCategory = { ...prev[category] };
      delete updatedCategory[id];
      return { ...prev, [category]: updatedCategory };
    });

    let totalItems = 0;
    Object.values(cart).forEach((category) => {
      Object.values(category).forEach((count) => {
        totalItems += count;
      });
    });
    setCartCount(totalItems);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center">
        <Cart className="w-6 h-6 mr-2" /> Shopping Cart
      </h2>

      {Object.keys(cart).every((category) => Object.keys(cart[category]).length === 0) ? (
        <p className="mt-4 text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(cart).map((category) =>
            Object.entries(cart[category]).map(([id, quantity]) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 p-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {`Item ID: ${id}`}
                  </h3>
                  <span className="text-orange-600 font-bold">Quantity: {quantity}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleRemove(category, id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default CartPage;
