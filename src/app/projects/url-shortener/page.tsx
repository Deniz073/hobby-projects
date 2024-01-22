import { Metadata } from "next"
import Form from "./form"

export const metadata: Metadata = {
  title: 'Url Shortener',
  description: 'Url shortener with custom urls',
}

export default function UrlShortener() {

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center w-auto items-center">
        <h1 className="text-4xl font-bold">Url Shortener</h1>
        <Form />

        <h2 className="text-2xl font-bold mt-4">Example post request</h2>
        <p className="text-sm text-red-500">To avoid spam, this api endpoint has a rate limit of 10 requests per minute</p>

        <pre className="mt-2 p-4 bg-gray-800 text-white rounded-md overflow-auto max-w-full">
          <code className="language-javascript">
            {`fetch('https://denizerdem.nl/api/shorten-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer <your_api_key>'
    },
    body: JSON.stringify({
      longUrl: 'https://denizerdem.nl',
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });`}
          </code>
        </pre>
      </div>


    </>
  )
}
