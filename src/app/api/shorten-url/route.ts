import { createShortUrlMapping } from "@/app/db-interactions/url-shortener";
import getAbsoluteUrl from "@/lib/getAbsoluteUrl";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const urlSchema = z.object({
  longUrl: z.string().url(),
})

export async function POST(req: NextRequest) {

  console.log("hoi")
  const body = await req.json();

  try {
    const { longUrl } = urlSchema.parse(body)

    console.log("longUrl", longUrl)

    const shortUrl = await createShortUrlMapping(longUrl)

    return NextResponse.json({
      success: true,
      short: `${getAbsoluteUrl()}/${shortUrl}`,
    }, {
      status: 200
    })

  } catch (error) {
    if (error instanceof z.ZodError) {

      return NextResponse.json({
        success: false,
        issues: error.issues.map(issue => issue.message),
      }, {
        status: 400
      })
    }
  }

}