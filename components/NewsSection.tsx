import React from 'react';

const NewsSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">News Image</span>
          </div>
          <div className="p-6">
            <p className="text-gray-500 text-sm mb-2">October 15, 2025</p>
            <h3 className="text-xl font-bold text-gray-800 mb-3">New Office Inauguration</h3>
            <p className="text-gray-700 mb-4">
              We are proud to announce the opening of our new office facility, which will serve as our regional headquarters.
            </p>
            <button className="text-primary font-medium hover:underline">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">News Image</span>
          </div>
          <div className="p-6">
            <p className="text-gray-500 text-sm mb-2">September 28, 2025</p>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Award Recognition</h3>
            <p className="text-gray-700 mb-4">
              EF Engineering has been recognized with the Excellence in Design Award for our innovative approach.
            </p>
            <button className="text-primary font-medium hover:underline">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">News Image</span>
          </div>
          <div className="p-6">
            <p className="text-gray-500 text-sm mb-2">September 10, 2025</p>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability Initiative</h3>
            <p className="text-gray-700 mb-4">
              Our commitment to sustainable construction practices has led to the implementation of new green building standards.
            </p>
            <button className="text-primary font-medium hover:underline">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;