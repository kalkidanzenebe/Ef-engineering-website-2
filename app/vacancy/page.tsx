"use client"
import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const fmt = (d: string) => new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })

export default function Vacancy() {
  const [jobs, setJobs] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://api.efengineering-architect.com/api/jobs', { cache: 'no-store' })
        const data = await res.json()
        setJobs((Array.isArray(data) ? data : data?.data) || [])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Current Vacancies" />
      <main className="container mx-auto px-4 py-12">
        <Reveal variant="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Join Our Team</h1>
            <p className="text-gray-600 mt-2">Explore exciting career opportunities at EF Engineering.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
            new Array(4).fill(0).map((_,i)=>(<div key={i} className="h-48 bg-white border border-gray-200 animate-pulse" />))
          ) : jobs.length ? (
            jobs.map((job: any, i: number) => (
              <Reveal key={job.id} variant="up" delay={i * 100}>
                <div className="bg-white border border-gray-200 p-6 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-extrabold text-gray-900">{job.title}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Deadline: {job.deadline ? fmt(job.deadline) : '—'}</span>
                  </div>
                  <div className="mt-2">
                    <Link href={`/vacancy/detail/${job.id}`} className="inline-flex items-center font-semibold text-white bg-orange-500 hover:bg-orange-600 px-5 py-2">View Details</Link>
                  </div>
                </div>
              </Reveal>
            ))
          ) : (
            <Reveal variant="up">
              <div className="text-gray-600">No vacancies available at the moment.</div>
            </Reveal>
          )}
        </div>
      </main>
    </div>
  )
}