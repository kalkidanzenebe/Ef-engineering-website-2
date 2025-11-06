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
          <div className="h-48 bg-white border border-gray-200 animate-pulse" />
        ) : (
          <div className="bg-white border border-gray-200 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-extrabold">{info?.name || 'EF Engineering & Architect'}</h1>
            <div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: info?.about || '<p>Details coming soon.</p>' }} />
            {info?.vision && (
              <div className="mt-8">
                <h2 className="text-xl font-extrabold">Our Vision</h2>
                <div className="prose max-w-none mt-2" dangerouslySetInnerHTML={{ __html: info.vision }} />
              </div>
            )}
            {info?.mission && (
              <div className="mt-8">
                <h2 className="text-xl font-extrabold">Our Mission</h2>
                <div className="prose max-w-none mt-2" dangerouslySetInnerHTML={{ __html: info.mission }} />
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}