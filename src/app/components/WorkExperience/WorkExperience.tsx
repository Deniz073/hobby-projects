import data from "./data.json"
import ShareIcons from "./ShareIcons"
import WorkItem from "./WorkItem"

export default function WorkExperience() {

  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400">
        </path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 "></path>
        </svg>
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {data.map((item, index) => (
          <li key={index} className="flex gap-4">
            <WorkItem logo={item.logo} company={item.company} role={item.role} dateFrom={item.dateFrom} dateTo={item.dateTo} />
          </li>
        ))}
      </ol>
      <a className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 group mt-6 w-full"
        href="/deniz-erdem-cv.pdf" download={true}>
        Download CV
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600">
          <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          </path>
        </svg>
      </a>
    </div>
  )
}
