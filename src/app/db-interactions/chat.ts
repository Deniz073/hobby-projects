"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function saveChatMessage(userId: string, content: string){

    const result = await prisma.chatMessage.create({
        data: {
            userId: userId,
            content: content,
        },
    })

    prisma.$disconnect()
    return result
}