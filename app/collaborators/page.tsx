
export default function Collaborators() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Our Collaborators</h1>
        <p className="text-gray-700 mb-4">
          We work with a network of trusted partners and clients to deliver exceptional projects.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-500 text-sm">Logo</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Partner Company {index + 1}</h3>
                  <p className="text-gray-600">Industry Partner</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Major Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-500 text-sm">Logo</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Client Company {index + 1}</h3>
                  <p className="text-gray-600">Government/Corporate</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}