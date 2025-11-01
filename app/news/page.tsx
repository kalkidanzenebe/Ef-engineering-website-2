import Header from '../../components/Header'

export default function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Latest News</h1>
        <p className="text-gray-700 mb-4">
          Stay updated with the latest news and events from EF Engineering.
        </p>
        <div className="space-y-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-primary mb-2">New Office Inauguration</h2>
            <p className="text-gray-500 text-sm mb-3">Published on: October 15, 2025</p>
            <p className="text-gray-700 mb-4">
              We are proud to announce the opening of our new office facility, which will serve as our regional headquarters...
            </p>
            <button className="text-primary font-medium hover:underline">
              Read More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-primary mb-2">Award Recognition</h2>
            <p className="text-gray-500 text-sm mb-3">Published on: September 28, 2025</p>
            <p className="text-gray-700 mb-4">
              EF Engineering has been recognized with the Excellence in Design Award for our innovative approach...
            </p>
            <button className="text-primary font-medium hover:underline">
              Read More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-primary mb-2">Sustainability Initiative</h2>
            <p className="text-gray-500 text-sm mb-3">Published on: September 10, 2025</p>
            <p className="text-gray-700 mb-4">
              Our commitment to sustainable construction practices has led to the implementation of new green building standards...
            </p>
            <button className="text-primary font-medium hover:underline">
              Read More
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}