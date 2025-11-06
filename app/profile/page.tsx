"use client"
import { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'

export default function Profile() {
  const [info, setInfo] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://api.efengineering-architect.com/api/company-info', { cache: 'no-store' })
        const data = await res.json()
        setInfo(data?.data || data)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Company Profile" />
      <main className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 h-80 bg-white border border-gray-200 animate-pulse" />
            <div className="lg:col-span-5 h-80 bg-white border border-gray-200 animate-pulse" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: About content */}
            <section className="lg:col-span-7">
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <h1 className="text-3xl font-extrabold text-gray-900">{info?.name || 'EF Engineering & Architect'}</h1>
                <p className="text-gray-600 mt-2">Building with certainty. Designing with purpose.</p>
                <div className="prose max-w-none mt-6" dangerouslySetInnerHTML={{ __html: info?.about || '<p>Details coming soon.</p>' }} />
              </div>
            </section>

            {/* Right: Quick facts & contact cta */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 md:p-8">
                <h3 className="text-xl font-extrabold">Why clients choose us</h3>
                <ul className="mt-4 space-y-2 text-white/95 text-sm">
                  <li className="flex items-start gap-2"><span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-white" /> Proven delivery across sectors</li>
                  <li className="flex items-start gap-2"><span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-white" /> Safety and quality-first mindset</li>
                  <li className="flex items-start gap-2"><span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-white" /> Transparent budgets and timelines</li>
                </ul>
                <a href="/contact" className="mt-6 inline-flex items-center justify-center bg-white text-orange-600 font-semibold px-5 py-3">Talk to our team</a>
              </div>

              {info?.vision && (
                <div className="bg-white border border-gray-200 p-6">
                  <h4 className="text-lg font-extrabold text-gray-900">Our Vision</h4>
                  <div className="prose max-w-none mt-3" dangerouslySetInnerHTML={{ __html: info.vision }} />
                </div>
              )}

              {info?.mission && (
                <div className="bg-white border border-gray-200 p-6">
                  <h4 className="text-lg font-extrabold text-gray-900">Our Mission</h4>
                  <div className="prose max-w-none mt-3" dangerouslySetInnerHTML={{ __html: info.mission }} />
                </div>
              )}
            </aside>
          </div>
        )}
      </main>
    </div>
  )
}