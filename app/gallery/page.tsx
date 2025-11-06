"use client"
import { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'

export default function Gallery() {
  const [items, setItems] = useState<any[]>([])
  const [filtered, setFiltered] = useState<any[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://api.efengineering-architect.com/api/galleries', { cache: 'no-store' })
        const data = await res.json()
        const list = (Array.isArray(data) ? data : data?.data) || []
        setItems(list)
        setFiltered(list)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const categories = ['All', 'Project', 'Designed', 'Ceremony', 'Certificate']

  const onFilter = (cat: string) => {
    setActiveCategory(cat)
    if (cat === 'All') {
      setFiltered(items)
    } else {
      setFiltered(items.filter((g: any) => (g.category || '').toLowerCase() === cat.toLowerCase()))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Project Gallery" />
      <main className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((c) => (
            <button key={c} onClick={() => onFilter(c)} className={`px-4 py-2 rounded-full border text-sm font-semibold ${activeCategory===c?'bg-orange-500 border-orange-500 text-white':'bg-white border-gray-300 text-gray-800 hover:border-gray-500'}`}>{c === 'Designed' ? 'Designed Projects' : c === 'Ceremony' ? 'Ceremonies' : c}</button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {new Array(9).fill(0).map((_,i)=>(<div key={i} className="h-64 bg-white border border-gray-200 animate-pulse" />))}
          </div>
        ) : filtered.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((g: any, i: number) => (
              <div key={g.id || i} className="bg-white border border-gray-200 shadow-sm">
                <div className="relative overflow-hidden h-64">
                  <img src={g.path || g.image || g.image_url || '/images/hero/home.jpg'} alt={g.title || 'Gallery'} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h5 className="font-bold">{g.title}</h5>
                      {g.description && <p className="text-xs text-white/90 line-clamp-2">{g.description}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-600 text-center">No galleries found for this category.</div>
        )}
      </main>
    </div>
  )
}