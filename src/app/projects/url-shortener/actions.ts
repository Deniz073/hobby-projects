"use server"

import { createShortUrlMapping } from "@/app/db-interactions/url-shortener";
import { z } from "zod";

const urlSchema = z.object({
  long: z.string().url(),
})

export default async function createShortUrl(formData: FormData) {

  try {
    const { long } = urlSchema.parse(Object.fromEntries(formData.entries()))
    const shortUrl = await createShortUrlMapping(long)

    return {
      success: true,
      short: shortUrl,
    }
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