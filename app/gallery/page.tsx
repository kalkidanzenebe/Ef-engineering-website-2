
export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Project Gallery</h1>
        <p className="text-gray-700 mb-4">
          Browse through our collection of project images, showcasing our work and achievements.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Gallery Image {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}