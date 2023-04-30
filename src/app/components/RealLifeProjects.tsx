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
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between shadow-xl shadow-slate-950/10 rounded-2xl">
            <div className="flex flex-row items-center justify-between align-middle gap-x-4 text-xs w-full">
              <time dateTime={'2020-03-16'} className="text-gray-500 ml-2 mt-2">
                March 16, 2020
              </time>
              <a href="#" className="relative z-10 rounded-full mt-2 bg-gray-50 px-2 py-1 sm:px-3 sm:py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                <p className="w-full block">Mobile & Web development</p>
              </a>
            </div>
            <div className="group relative p-6">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Moesland
                </a>
              </h3>
              <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">
                The organization Moesland is a carnival organization in the Netherlands.
                I was the lead developer in developing their mobile app and CMS using Laravel, React and React Native.
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 p-6">
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Deniz
                  </a>
                </p>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
