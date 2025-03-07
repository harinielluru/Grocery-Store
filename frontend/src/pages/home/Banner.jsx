import React, { useState, useEffect } from 'react';
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Set animation to start after component mounts
    setIsInView(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 overflow-hidden mb-12">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-100 opacity-60"></div>
        <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-yellow-100 opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-green-100 opacity-50"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content area */}
          <div className={`transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Fresh Groceries Daily
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Fresh Food, <span className="text-blue-600">Quick Delivery</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              ShopSmart delivers premium groceries straight to your doorstep. Enjoy farm-fresh produce, artisanal goods, and everyday essentials with just a few taps.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Now
              </button>
              
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                View Categories
              </button>
            </div> */}
            
            {/* Stats section */}
            {/* <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2k+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">15k+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">24h</p>
                <p className="text-sm text-gray-500">Fast Delivery</p>
              </div>
            </div> */}
          </div>
          
          {/* Right image area with floating elements */}
          <div className={`relative transition-all duration-700 delay-300 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main image with decorative border */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2">
                <img 
                  src={bannerImg} 
                  alt="Fresh groceries and produce" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating badge 1 */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 transform rotate-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Organic</p>
                    <p className="text-xs text-gray-500">Certified</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge 2 */}
              <div className="absolute -bottom-8 -left-8 bg-white p-3 rounded-lg shadow-lg z-20 transform -rotate-3">
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-600">30%</p>
                  <p className="text-xs font-medium">First Order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;