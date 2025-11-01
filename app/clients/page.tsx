
export default function Clients() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Our Clients</h1>
        <p className="text-gray-700 mb-4">
          We have had the privilege of working with a diverse range of clients across various industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-500 text-sm">Client Logo</span>
              </div>
              <h2 className="text-xl font-bold text-center text-primary mb-2">Client {index + 1}</h2>
              <p className="text-gray-700 text-center">
                Leading organization in their respective field, committed to excellence and innovation.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}