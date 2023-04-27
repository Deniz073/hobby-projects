import Image from "next/image"

interface WorkItemProps {
  logo: string;
  company: string;
  role: string;
  dateFrom: string;
  dateTo: string;
}

export default function WorkItem({ logo, company, role, dateFrom, dateTo }: WorkItemProps) {
  return (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        <Image title="LiveWall Logo" loading="eager" alt="livewall logo" width="28" height="28" className="h-7 w-7" src={logo} />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex text-sm font-medium text-zinc-900">{company}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500">{role}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400" aria-label="2008 until 2011">
          <time dateTime={dateFrom}>{dateFrom}</time>
          <span aria-hidden="true">—</span>
          <time dateTime={dateTo}>{dateTo}</time>
        </dd>
      </dl>
    </>
  )
}
