import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Welcome to <span className="text-yellow-600">Dream.shop</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              At <span className="font-bold">Shop.CO</span>, we bring you an innovative and seamless online shopping experience. Our platform offers a curated selection of high-quality products that cater to all your needs. Our goal is to make shopping enjoyable, efficient, and hassle-free for everyone.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Whether you're upgrading your wardrobe furnishing your home or looking for the latest gadgets <span className="font-bold">DREAM.SHOP</span> is your one-stop shop for all things trendy and essential.
            </p>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center justify-start">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                High-quality, handpicked products
              </div>
              <div className="flex items-center justify-start">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Smooth, user-friendly experience
              </div>
              <div className="flex items-center justify-start">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                24/7 dedicated customer support
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src="/download.jpg" // Replace with your new image path
              alt="About Shop.CO"
              height={400}
              width={600}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

