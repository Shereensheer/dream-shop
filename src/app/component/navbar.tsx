'use client'
import { ShoppingCartIcon } from '@heroicons/react/16/solid';  // Import the shopping cart icon
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]); // State to store cart items

  // Mock cart for demonstration purpose. Replace with actual cart management.
  const cartItemCount = cart.length; // Get the number of items in the cart

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 font-extrabold text-3xl text-yellow-950">DREAM.SHOP</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold space-x-6">
          <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <Link href="/component/about" className="hover:text-indigo-400 transition-colors">About</Link>
          <Link href="/component/product" className="hover:text-indigo-400 transition-colors">Product</Link>
          <Link href="/component/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
        </nav>
        {/* Shopping Cart Icon */}
        <div className="relative">
          <Link href="/component/shoppingcart">
            <span className="flex items-center space-x-2">
              <ShoppingCartIcon className="w-6 h-6 text-indigo-600" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white text-xs px-2 py-1">
                  {cartItemCount}
                </span>
              )}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
