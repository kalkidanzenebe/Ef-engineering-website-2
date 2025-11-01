import Header from '../../components/Header'

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Our Partners</h1>
        <p className="text-gray-700 mb-4">
          Our strategic partnerships enable us to deliver comprehensive solutions and exceed client expectations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-500 text-sm">Partner Logo</span>
              </div>
              <h2 className="text-xl font-bold text-center text-primary mb-2">Partner {index + 1}</h2>
              <p className="text-gray-700 text-center">
                Industry leader specializing in innovative solutions and technologies.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}