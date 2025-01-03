import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap -mx-6">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-6 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              Wed love to hear from you! Whether you have questions about our
              products feedback or just want to say hello feel free to reach
              out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="material-icons text-indigo-500 mr-4">
                  location_on
                </span>
                <p className="text-gray-700">
                  123 E-Commerce Street, Suite 456, Cityville, Country
                </p>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-500 mr-4">
                  phone
                </span>
                <p className="text-gray-700">+123 456 7890</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-indigo-500 mr-4">
                  email
                </span>
                <p className="text-gray-700">support@shop.co</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-6">
            <form className="bg-white p-8 shadow-md rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 px-6 rounded-md text-lg hover:bg-indigo-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
