import Link from "next/link"

export default function NotFound() {

  return (
    <div className="min-h-screen flex flex-col justify-center w-auto items-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl">The page you are looking for could not be found.</p>
      <p className="text-xl">If you would like to submit an idea, please use the
        <Link className="text-blue-500 hover:underline" href="/contact" > contact form</Link>
      </p>
    </div>
  )
}