import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Project Image</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-2">Commercial Complex</h3>
            <p className="text-gray-700 mb-4">
              A modern commercial complex featuring sustainable design elements and energy-efficient systems.
            </p>
            <button className="text-primary font-medium hover:underline">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Project Image</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-2">Residential Housing</h3>
            <p className="text-gray-700 mb-4">
              Affordable housing project with modern amenities and green spaces for families.
            </p>
            <button className="text-primary font-medium hover:underline">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Project Image</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-2">Industrial Facility</h3>
            <p className="text-gray-700 mb-4">
              State-of-the-art manufacturing facility with advanced infrastructure and safety systems.
            </p>
            <button className="text-primary font-medium hover:underline">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-medium">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;