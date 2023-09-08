"use server"

import { z } from "zod";

const urlSchema = z.object({
  long: z.string().url(),
})

const baseUrl = "https://urlbae.com/api/url/add"

export default async function createShortUrl(formData: FormData) {

  try {
    const data = urlSchema.parse(Object.fromEntries(formData.entries()))
    const response = await fetch(`${baseUrl}`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.URLBAE_APIKEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: data.long,
      })
    })

    const result = await response.json()

    return {
      success: true,
      short: result.shorturl,
    };
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        issues: error.issues,
      }
    }
  }


}