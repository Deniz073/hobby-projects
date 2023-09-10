"use client"

import { useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import Footer from './Footer'
import Provider from './Provider'
import Header from './Header'

const games = [
  { name: 'Color Memory', description: 'The classic color memory game', href: '/games/color-memory' },
  { name: 'Classic Memory', description: 'The classic memory game', href: '/games/memory' },
]

const projects = [
  { name: 'Tasks', description: 'Manage all your tasks in a beautiful data table', href: '/projects/tasks'},
  { name: 'Make a choice', description: 'To help you make a choice', href: '/projects/make-a-choice' },
  { name: 'Draw', description: 'Draw something beautiful', href: '/projects/draw' },
  { name: 'Chat app', description: 'Chat app with websockets', href: '/projects/chat' },
  { name: 'Url shortener', description: 'Url shortener with custom urls', href: '/projects/url-shortener' },
]

const dropdowns = [
  { name: 'Games', items: games, showPanel: false },
  { name: 'Projects', items: projects, showPanel: false }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showPanel, setShowPanel] = useState(dropdowns)

  function closeAllPanels() {
    const newShowPanel = [...showPanel]
    newShowPanel.forEach((item, i) => {
      item.showPanel = false
    })
    setShowPanel(newShowPanel)
  }

  return (
    <html lang="en" className='h-full scroll-smooth' onClick={closeAllPanels}>
      <head>
        <link rel='canonical' href='https://denizerdem.nl' />
        <link rel="apple-touch-icon" href="/images/og-image.jpg" />
      </head>
      <body className='h-full'>
        <Provider>
          
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

            <Header showPanel={showPanel} setShowPanel={setShowPanel} dropdowns={dropdowns} />    

            {children}

            <Footer />

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
          </div>

          <Analytics />
        </Provider>
      </body>
    </html>
  )

}