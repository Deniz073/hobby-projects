"use client"

import Link from "next/link"

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center w-auto items-center">
      <h1 className="text-4xl font-bold">Oops! Error</h1>
      <p className="text-2xl">It looks like the website encountered an error.</p>
      <p className="text-xl">If you would like to submit how this error happened, please use the
        <Link className="text-blue-500 hover:underline" href="/contact" > contact form</Link>.
        Thanks!
      </p>
    </div>
  )
}