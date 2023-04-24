"use client"

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import NavLink from './NavLinks/NavLink'
import ResponsiveNavLink from './NavLinks/ResponsiveNavLink'
import ResponsiveDropDownLink from './NavLinks/ResponsiveDropdownLink'
import { Analytics } from '@vercel/analytics/react'

const games = [
  { name: 'Color Memory', description: 'The classic color memory game', href: '/games/color-memory' },
]

const projects = [
  { name: 'Make a choice', description: 'To help you make a choice', href: '/make-a-choice' },
]

const dropdowns = [
  { name: 'Games', items: games, showPanel: false },
  { name: 'Projects', items: projects, showPanel: false }
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }: { children: React.ReactNode }){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showPanel, setShowPanel] = useState(dropdowns)

  const handlePanelVisibility = (index: number, visibility: boolean) => {
    const newShowPanel = [...showPanel]
    newShowPanel.forEach((item, i) => {
      if (i != index) item.showPanel = false
    })
    newShowPanel[index] = { ...newShowPanel[index], showPanel: visibility }
    setShowPanel(newShowPanel)
  }

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
        <link rel='canonical' href='https://deniz-hobby-projects.nl' />
      </head>
      <body className='h-full'>
        <header className="absolute inset-x-0 top-0 z-50 ">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className='text-gray-950 font-semibold flex flex-col text-center' >
                Hobby Projects
                <small className='text-gray-400'>by Deniz Erdem</small>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">

              {
                dropdowns.map((dropdown, index) => (
                  <Popover key={dropdown.name} className="relative">
                    <Popover.Button onClick={() => handlePanelVisibility(index, !showPanel[index].showPanel)} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                      {dropdown.name}
                      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      show={showPanel[index].showPanel}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8  z-50 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {dropdown.items.map((item) => (
                            <Link
                              onClick={() => handlePanelVisibility(index, false)}
                              key={item.name}
                              href={item.href}>
                              {item.name}
                            </Link>

                          ))}
                        </div>

                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ))
              }

              <NavLink href="#" name="Test" />

            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/auth/login" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden z-50" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">

                    {dropdowns.map((dropdown, index) => (
                      <Disclosure key={dropdown.name} as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                              {dropdown.name}
                              <ChevronDownIcon
                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {dropdown.items.map((item) => (
                                <ResponsiveDropDownLink
                                  onClick={() => setMobileMenuOpen(false)}
                                  key={item.name}
                                  href={item.href}
                                  name={item.name}
                                />
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}

                    <ResponsiveNavLink
                      href="#"
                      name="Test"
                    />
                  </div>
                  <div className="py-6">
                    <ResponsiveNavLink
                      onClick={() => setMobileMenuOpen(false)}
                      href="/auth/login"
                      name="Log In"
                    />
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  )

}