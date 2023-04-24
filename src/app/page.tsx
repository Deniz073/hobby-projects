"use client"

export default function Home() {

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
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
            I am Deniz Erdem, a {new Date().getFullYear() - 2002} year old turkish software developer from the Netherlands.
            I am interested in all things software development related, but I am especially interested in back end stuff.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#realLifeProjects" className="text-sm font-semibold leading-6 text-gray-900">
              Real life projects <span aria-hidden="true">↓</span>
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              My Curriculum Vitae <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
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
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                </path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                </svg>
                <span className="ml-3">Work</span>
              </h2>
              <ol className="mt-6 space-y-4">
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" style={{ color: "transparent" }} src="/_next/static/media/planetaria.ecd81ade.svg" />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Planetaria</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">CEO</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2019 until Present">
                      <time dateTime="2019">2019</time>
                      <span aria-hidden="true">—</span>
                      <time dateTime="2023">Present</time>
                    </dd></dl></li>
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7" style={{ color: "transparent" }} src="/_next/static/media/airbnb.b4000690.svg" /></div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Airbnb</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">Product Designer</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2014 until 2019">
                      <time dateTime="2014">2014</time> <span aria-hidden="true">—</span>
                      <time dateTime="2019">2019</time></dd>
                  </dl></li>
                <li className="flex gap-4"><div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7" style={{ color: "transparent " }} src="/_next/static/media/facebook.dd9e7d48.svg" /></div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Facebook</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">iOS Software Engineer</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2011 until 2014">
                      <time dateTime="2011">2011</time> <span aria-hidden="true">—</span>
                      <time dateTime="2014">2014</time></dd></dl></li><li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7" style={{ color: "transparent" }} src="/_next/static/media/starbucks.4a5bd050.svg" /></div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Starbucks</dd>
                    <dt className="sr-only">Role</dt><dd className="text-xs text-zinc-500 dark:text-zinc-400">Shift Supervisor</dd>
                    <dt className="sr-only">Date</dt><dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2008 until 2011">
                      <time dateTime="2008">2008</time> <span aria-hidden="true">—</span>
                      <time dateTime="2011">2011</time></dd>
                  </dl></li></ol>
              <a className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full" href="/#">Download CV
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                  <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round">
                  </path></svg></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

