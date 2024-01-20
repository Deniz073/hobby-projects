"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../AuthOptions"
import { generateApiKey } from "@/lib/utils";
import { prisma } from "../db-interactions/db";
import { revalidatePath } from "next/cache";

export async function generateAPiKeyForUser() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return {
      success: false,
      message: "User not authenticated"
    }
  }

  const userId = session.user.id;

  const apiKey = generateApiKey();

  try {
    await prisma.apiKey.create({
      data: {
        userId,
        key: apiKey
      }
    })

  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  revalidatePath("/profile")

  return {
    success: true,
    apiKey
  }
}

type getAPiKeyResult =
  | { success: true, apiKey: string | null }
  | { success: false, message: string }

export async function getApiKeyForUser(): Promise<getAPiKeyResult> {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return {
      success: false,
      message: "User not authenticated"
    }
  }

  const userId = session.user.id;

  const encryptedApiKey = await prisma.apiKey.findFirst({
    where: {
      userId
    }
  })

  const apiKey = encryptedApiKey?.key ? encryptedApiKey.key : null

  return {
    success: true,
    apiKey: apiKey
  }
}