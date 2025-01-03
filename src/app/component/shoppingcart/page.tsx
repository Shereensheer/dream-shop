'use client'
import router from 'next/router';
import React, { useState } from 'react';


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  // Mock cart data for demonstration
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 40, quantity: 2 },
  ]);

  

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Remove item from the cart
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto p-5 h-screen ">
      <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Cart Items List */}
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b">
              <div className="flex items-center">
                <p className="mr-4">{item.name}</p>
                <p className="text-gray-500">x{item.quantity}</p>
              </div>
              <p className="text-gray-900">${item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          
          {/* Total Price */}
          <div className="flex justify-between items-center py-4">
            <p className="font-semibold">Total:</p>
            <p className="text-xl">${calculateTotal()}</p>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-end">
            <button
              onClick={() => router.push('/checkout')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
