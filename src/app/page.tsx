"use client"

import WorkExperience from "./components/WorkExperience/WorkExperience"

export default function Home() {

  function getAge(): number {
    const today = new Date()
    const birthDate = new Date('2002-09-15')
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <>
      <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56 pb-24 sm:pb-40 lg:pb-44">
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
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I am Deniz Erdem, a {getAge()} year old turkish software developer from the Netherlands.
            I am interested in all things software development related, but I am especially interested in back end stuff.
            This is my personal website where I will be posting my hobby projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 mb-5">
            <a href="#realLifeProjects" className="text-sm font-semibold leading-6 text-gray-900">
              Real life projects <span aria-hidden="true">↓</span>
            </a>
            <a href="/deniz-erdem-cv.pdf" target="_blank" rel="no-refferer" className="text-sm font-semibold leading-6 text-gray-900">
              My Curriculum Vitae <span aria-hidden="true">→</span>
            </a>
          </div>
          <WorkExperience />
        </div>
      </div>

      <div id="realLifeProjects">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real life projects</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Projects i worked on for real customers
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article key={1} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={'2020-03-16'} className="text-gray-500">
                  March 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Mobile & Web development
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Moesland
                  </a>
                </h3>
                <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">
                  The organization Moesland is a carnival organization in the Netherlands.
                  I was the lead developer in developing their mobile app and CMS using Laravel, React and React Native.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0" />
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
    </>
  )
}

