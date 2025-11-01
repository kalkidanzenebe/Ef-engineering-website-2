import React from 'react';

const ClientsSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Clients</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-gray-200 h-24 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Client Logo {index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;