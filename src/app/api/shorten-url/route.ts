import { prisma } from "@/app/db-interactions/db";
import { createShortUrlMapping } from "@/app/db-interactions/url-shortener";
import getAbsoluteUrl from "@/lib/getAbsoluteUrl";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const urlSchema = z.object({
  longUrl: z.string().url(),
})

type PostResult =
  | NextResponse<{ success: true, short: string }>
  | NextResponse<{ success: false, issues: string[] }>
  | undefined


export async function POST(req: NextRequest): Promise<PostResult> {

  const body = await req.json();
  const bearerToken = req.headers.get("authorization")?.split(' ')[1];

  if (!bearerToken) {
    return NextResponse.json({
      success: false,
      issues: ["No bearer token provided"]
    }, {
      status: 401
    })
  }

  const bearerTokenExists = await prisma.apiKey.count({
    where: {
      key: bearerToken
    }
  }) > 0

  if (!bearerTokenExists) {
    return NextResponse.json({
      success: false,
      issues: ["Invalid bearer token"]
    }, {
      status: 401
    })
  }

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  })

  const RATE_LIMIT_TOKENS = bearerToken === process.env.API_KEY ? 1000 : 10

  const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.fixedWindow(RATE_LIMIT_TOKENS, "60 s"),
  });

  const { success, remaining, limit } = await ratelimit.limit(bearerToken);

  const rateLimitHeaders = {
    "X-RateLimit-Limit": limit.toString(),
    "X-RateLimit-Remaining": remaining.toString(),
  }

  if(!success) {
    return NextResponse.json({
      success: false,
      issues: ["Rate limit exceeded"]
    }, {
      status: 429,
      headers: rateLimitHeaders
    })
  }

  try {
    const { longUrl } = urlSchema.parse(body)

    const shortUrl = await createShortUrlMapping(longUrl)
    

    return NextResponse.json({
      success: true,
      short: `${getAbsoluteUrl()}/${shortUrl}`,
    }, {
      status: 201,
      headers: rateLimitHeaders
    })

  } catch (error) {
    if (error instanceof z.ZodError) {

      return NextResponse.json({
        success: false,
        issues: error.issues.map(issue => issue.message),
      }, {
        status: 400,
        headers: rateLimitHeaders
      })
    }
  }

}