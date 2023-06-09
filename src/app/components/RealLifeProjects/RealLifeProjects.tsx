import RealLifeProjectsCard from './RealLifeProjectsCard'
import data from './data.json'

export default function RealLifeProjects() {
  return (
    <div id="realLifeProjects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real life projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Projects i worked on for real customers
          </p>
        </div>
        <div
          className="flex overflow-x-scroll pb-10 scrollbar-thumb-"
      >
        <div
          className="flex flex-nowrap gap-4 ml-1 "
        >
          {data.map((project, index) => (
            <RealLifeProjectsCard key={index} {...project} />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}
