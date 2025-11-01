
export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Company Profile</h1>
        <p className="text-gray-700 mb-4">
          Learn more about EF Engineering's history, vision, and commitment to excellence.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Established in 2015, EF Engineering began with a vision to revolutionize the architectural and engineering 
            consulting industry in Ethiopia. Our founding team of young, ambitious professionals brought together 
            decades of experience in their respective fields.
          </p>
          <p className="text-gray-700 mb-4">
            Over the years, we have successfully delivered projects across various sectors including residential, 
            commercial, industrial, and infrastructure development. Our commitment to innovation, quality, and 
            sustainability has earned us recognition as a leading engineering consultancy in the region.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            To be the premier engineering and architectural consultancy firm in East Africa, recognized for our 
            innovative solutions, ethical practices, and contribution to sustainable development.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To provide exceptional architectural and engineering services that exceed client expectations while 
            contributing to the sustainable development of our communities and environment.
          </p>
        </div>
      </main>
    </div>
  )
}