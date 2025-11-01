import Header from '../../components/Header'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Our Projects</h1>
        <p className="text-gray-700 mb-4">
          Explore our portfolio of successfully completed projects across various sectors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary mb-2">Commercial Complex</h2>
              <p className="text-gray-700 mb-4">
                A modern commercial complex featuring sustainable design elements.
              </p>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary mb-2">Residential Housing</h2>
              <p className="text-gray-700 mb-4">
                Affordable housing project with modern amenities and green spaces.
              </p>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary mb-2">Industrial Facility</h2>
              <p className="text-gray-700 mb-4">
                State-of-the-art manufacturing facility with advanced infrastructure.
              </p>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}