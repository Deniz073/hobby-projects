import HeaderText from './HeaderText'

export default function LandingPageHeader() {

  return (
    <>
      <div className="sm:mb-8 ml-12 mb-5  flex justify-center sm:w-auto w-60">
        <div className="relative rounded-full px-3 justify-center align-middle sm:w-auto py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          My GitHub profile:{' '}
          <a href="https://github.com/Deniz073" target="_blank" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Have a look <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          My personal website for hobby projects
        </h1>
        <HeaderText />
        <div className="mt-10 flex items-center justify-center gap-x-6 mb-5">
          <a href="#realLifeProjects" className="text-sm font-semibold leading-6 text-gray-900">
            Real life projects <span aria-hidden="true">↓</span>
          </a>
          <a href="/deniz-erdem-cv.pdf" target="_blank" rel="no-refferer" className="text-sm font-semibold leading-6 text-gray-900">
            My Curriculum Vitae <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  )
}
