import Header from '../../components/Header'

export default function Vacancy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Career Opportunities</h1>
        <p className="text-gray-700 mb-4">
          Join our team of professionals and be part of innovative engineering projects.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Current Openings</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Senior Structural Engineer</h3>
                  <p className="text-gray-600">Full-time | Addis Ababa</p>
                </div>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">New</span>
              </div>
              <p className="text-gray-700 mt-3">
                We are looking for an experienced structural engineer to lead complex infrastructure projects.
              </p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
                Apply Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Project Manager</h3>
              <p className="text-gray-600">Full-time | Addis Ababa</p>
              <p className="text-gray-700 mt-3">
                Seeking a skilled project manager to oversee commercial and residential construction projects.
              </p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
                Apply Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Architectural Designer</h3>
              <p className="text-gray-600">Full-time | Remote</p>
              <p className="text-gray-700 mt-3">
                Creative architect with 3+ years of experience in residential and commercial design.
              </p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}