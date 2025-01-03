import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer >
      <div className="container mx-auto py-10 px-5 font-semibold bg-slate-50">
        <div className="flex flex-wrap md:justify-between">
          {/* Logo and About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
             
              <span className="ml-3 text-3xl font-extrabold">Dream.shop</span>
            </Link>
            <p className="text-sm text-1xl">
              Dream.shop is your one-stop destination for all your shopping needs.<br/>
              Explore our latest collections and enjoy seamless online shopping.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className=" text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/component/about" className="hover:text-indigo-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/component/product" className="hover:text-indigo-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/component/contact" className="hover:text-indigo-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-white text-lg mb-4">Contact Us</h3>
            <p className="text-sm mb-2">
              Email: <a href="mailto:support@shop.co" className="hover:text-indigo-400">support@shop.co</a>
            </p>
            <p className="text-sm mb-2">
              Phone: <a href="tel:+1234567890" className="hover:text-indigo-400">+1 234 567 890</a>
            </p>
            <p className="text-sm">
              Address: 1234 Shopping Lane, Market City, CA
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm">&copy; 2025 Shop.CO. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.362 5.637a9 9 0 11-12.725 12.726 9 9 0 0112.725-12.726z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.9 4.1a9 9 0 00-7.8 7.8"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.362 5.637a9 9 0 11-12.725 12.726 9 9 0 0112.725-12.726z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.9 4.1a9 9 0 00-7.8 7.8"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.362 5.637a9 9 0 11-12.725 12.726 9 9 0 0112.725-12.726z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.9 4.1a9 9 0 00-7.8 7.8"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
