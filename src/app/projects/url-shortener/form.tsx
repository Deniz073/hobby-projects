"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import createShortUrl from "./actions"
import { useState } from "react"
import type { ZodIssue } from "zod"
import QRCode from "react-qr-code";
import getAbsoluteUrl from "@/lib/getAbsoluteUrl"

interface ResultProps {
  success: boolean,
  short?: string,
  issues?: ZodIssue[],
  message?: string
}

export default function Form() {
  const [formResponse, setFormResponse] = useState<ResultProps>()
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)

    const formData = new FormData(e.currentTarget)
    formData.append('long', e.currentTarget.long.value)

    const result = await createShortUrl(formData)
    setFormResponse(result)
    setPending(false)
  }


  return (
    <div className="w-full flex flex-col">
      <form onSubmit={handleSubmit} className="w-full items-center gap-y-3 flex flex-col mx-auto">
        <Input type="url" required inputMode="text" name="long" className="w-full md:w-1/2" placeholder="Enter url" />
        {formResponse?.issues && <p className="text-sm text-red-500">Please type a valid url</p>}
        {formResponse?.message && <p className="text-sm text-red-500">{formResponse.message}</p>}
        <Button disabled={pending} className="w-1/2">{pending ? "Creating url" : "Create short url"}</Button>
      </form>
      {formResponse?.short && (
        <div className="w-full flex flex-col items-center mt-4">
          <p className="text-xl">Your short url is:</p>
          <a href={`${getAbsoluteUrl()}/${formResponse.short}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">{`${getAbsoluteUrl()}/${formResponse.short}`}</a>
          <QRCode className="mt-3" value={`${getAbsoluteUrl()}/${formResponse.short}`} />
        </div>
      )}
    </div>
  )
}
