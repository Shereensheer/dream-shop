'use client';

import React, { useState, useEffect } from 'react';

export default function Product({ params }: { params: { products: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.products}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [params.products]);

  const addToCart = () => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        }
        return [...acc, item];
      }, [] as any[])
    );
  };

  if (!product) {
    return <div className="flex justify-center text-2xl mt-72">Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden h-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category.toUpperCase()}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
            <p className="leading-relaxed mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
              <button
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Cart</h3>
              {cart.length > 0 ? (
                <ul>
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-center mb-2">
                      <span>{item.title}</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-700">Qty: {item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-green-500 text-white rounded"
                          onClick={() => addToCart()}
                        >
                          Add
                        </button>
                        <button
                          className="px-2 py-1 bg-red-500 text-white rounded"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
