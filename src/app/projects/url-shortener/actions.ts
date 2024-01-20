"use server"

import getAbsoluteUrl from "@/lib/getAbsoluteUrl";
import { z } from "zod";

const urlSchema = z.object({
  long: z.string().url(),
})

export type ShortUrlApiResult =
  | { success: true, short: string }
  | { success: false, issues: string[] }

export default async function createShortUrl(prevState: any, formData: FormData) {

  try {
    const { long } = urlSchema.parse(Object.fromEntries(formData.entries()))

    const result = await fetch(`${getAbsoluteUrl()}/api/shorten-url`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ longUrl: long }),
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${process.env.API_KEY}`
      },
    })

    const body: ShortUrlApiResult = await result.json()

    if (body.success) {
      return {
        success: body.success,
        short: body.short,
      }
    }

    return {
      success: body.success,
      issues: body.issues,
    }
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        issues: error.issues.map(issue => issue.message),
      }
    }
  }


}