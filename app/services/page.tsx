export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Our Services</h1>
        <p className="text-gray-700 mb-4">
          EF Engineering provides comprehensive architectural and engineering consulting services tailored to meet the unique needs of each project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-primary mb-3">Architectural Design</h2>
            <p className="text-gray-700">
              Innovative architectural solutions for residential, commercial, and industrial projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-primary mb-3">Structural Engineering</h2>
            <p className="text-gray-700">
              Expert structural analysis and design for buildings and infrastructure projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-primary mb-3">Project Management</h2>
            <p className="text-gray-700">
              Comprehensive project management services from conception to completion.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}