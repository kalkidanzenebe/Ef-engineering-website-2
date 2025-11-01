import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary mb-6">About EF Engineering</h2>
          <p className="text-gray-700 mb-4">
            Established in 2015, EF Engineering began with a vision to revolutionize the architectural and engineering consulting industry. Our founding team brought together decades of experience in their respective fields.
          </p>
          <p className="text-gray-700 mb-4">
            Over the years, we have successfully delivered projects across various sectors including residential, commercial, industrial, and infrastructure development. Our commitment to innovation, quality, and sustainability has earned us recognition as a leading engineering consultancy.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-medium mt-4">
            Learn More About Us
          </button>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Company Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;