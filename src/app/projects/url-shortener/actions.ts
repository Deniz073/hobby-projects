"use server"

import { z } from "zod";

const urlSchema = z.object({
  long: z.string().url(),
})

const baseUrl = "https://ulvis.net/api.php"

export default async function createShortUrl(formData: FormData) {

  try {
    const data = urlSchema.parse(Object.fromEntries(formData.entries()))
    const response = await fetch(`${baseUrl}?url=${data.long}&private=1`, {
      cache: "no-cache",
      method: "POST",
    })
    const result = await response.text()
    console.log("res", result)
    return {
      success: true,
      short: result,
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