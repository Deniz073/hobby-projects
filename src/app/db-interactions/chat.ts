"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function saveChatMessage(userEmail: string, content: string){
    const user = await prisma.user.findUnique({
        where: {
            email: userEmail,
        },
    })

    if(!user) throw new Error("User not found")

    const userId = user.id

    const result = await prisma.chatMessage.create({
        data: {
            userId: userId,
            content: content,
        },
    })

    prisma.$disconnect()
    return result
}