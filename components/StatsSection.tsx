import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-12 bg-primary bg-opacity-10 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
            <p className="text-gray-700">Projects Completed</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">8+</h3>
            <p className="text-gray-700">Years Experience</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
            <p className="text-gray-700">Team Members</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
            <p className="text-gray-700">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;