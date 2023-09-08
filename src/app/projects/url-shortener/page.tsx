import { Metadata } from "next"
import Form from "./form"

export const metadata: Metadata = {
  title: 'Url Shortener',
  description: 'Url shortener with custom urls',
}

export default function UrlShortener() {

  return (
    <div className="min-h-screen flex flex-col justify-center w-auto items-center">
      <h1 className="text-4xl font-bold">Url Shortener</h1>
      <Form />
    </div>
  )
}
