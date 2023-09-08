"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import createShortUrl from "./actions"
import { useState } from "react"
import type { ZodIssue } from "zod"

interface ResultProps {
  success: boolean,
  short?: string,
  issues?: ZodIssue[]
}

export default function Form() {
  const [formResponse, setFormResponse] = useState<ResultProps>()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    formData.append('long', e.currentTarget.long.value)

    const result = await createShortUrl(formData)
    console.log(result)
    setFormResponse(result)
  }


  return (
    <div className="w-full flex flex-col">
      <form onSubmit={handleSubmit} className="w-full items-center gap-y-3 flex flex-col mx-auto">
        <Input type="url" required name="long" className="w-full md:w-1/2" placeholder="Enter url" />
        {formResponse?.issues && <p className="text-sm text-red-500">Please type a valid url</p>}

        <Button className="w-1/2">Create short url</Button>
      </form>
      {formResponse?.short && (
        <div className="w-full flex flex-col items-center mt-4">
          <p className="text-xl">Your short url is:</p>
          <a href={formResponse.short} target="_blank" rel="noopener noreferrer" className="text-blue-500">{formResponse.short}</a>
        </div>
      )}
    </div>
  )
}
