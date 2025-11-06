"use client"
import { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'

export default function Collaborators() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://api.efengineering-architect.com/api/clients', { cache: 'no-store' })
        const data = await res.json()
        setItems((Array.isArray(data) ? data : data?.data) || [])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Collaborators" />
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {loading ? (
            new Array(10).fill(0).map((_,i)=>(<div key={i} className="h-20 bg-white border border-gray-200 animate-pulse" />))
          ) : items.length ? (
            items.map((it: any, i: number) => (
              <div key={it.id || i} className="bg-white border border-gray-200 p-4 flex items-center justify-center">
                <img src={it.logo || it.image || it.photo || '/assets/img/brand/brand-v1-img1.png'} alt={it.name || 'Collaborator'} className="h-12 object-contain" />
              </div>
            ))
          ) : (
            <div className="text-gray-600">No collaborators to display.</div>
          )}
        </div>
      </main>
    </div>
  )
}