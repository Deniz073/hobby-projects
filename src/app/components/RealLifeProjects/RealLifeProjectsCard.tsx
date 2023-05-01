
interface Props {
  title: string;
  description: string;
  role: string;
  date: string;
  dateDisplay: string;
  tags: string[];
}


export default function RealLifeProjectsCard({ title, description, role, date, dateDisplay, tags }: Props) {
  return (
    <article className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="shadow-xl shadow-slate-950/10 rounded-2xl bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <time dateTime={date} className="text-gray-500 text-sm mt-2">
            {dateDisplay}
          </time>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="font-semibold text-gray-900">
              Deniz Erdem
            </p>
            <p className="text-gray-600">{role}</p>

            {tags.map((tag, index) => (
              <span key={index} className="inline-block mt-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tag}
              </span>
            ))}

          </div>
        </div>
      </div>
    </article>
  )
}
