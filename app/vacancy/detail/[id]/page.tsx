import PageHeader from '../../../../components/PageHeader'

export default async function VacancyDetail(props: any) {
  const params = await props.params
  const id = params?.id
  const res = await fetch(`https://api.efengineering-architect.com/api/jobs/${id}`, { cache: 'no-store' })
  const d = await res.json()
  const job = d?.data || d

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title={job?.title || 'Job Details'} />
      <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <div className="bg-white border border-gray-200 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-extrabold">{job?.title}</h1>
            <div className="mt-2 text-sm text-gray-600">Type: {job?.type || '—'}</div>
            <div className="prose max-w-none mt-6" dangerouslySetInnerHTML={{ __html: job?.description || '<p>Details coming soon.</p>' }} />
          </div>
        </article>
        <aside className="lg:col-span-4">
          <div className="bg-white border border-gray-200 p-5">
            <h3 className="text-sm uppercase tracking-[.2em] text-gray-500 mb-3">Apply</h3>
            <a href={`/vacancy/apply/${id}`} className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 font-semibold w-full">Apply Now</a>
          </div>
        </aside>
      </main>
    </div>
  )
}


