"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function saveChatMessage(userId: string, content: string) {

  const result = await prisma.chatMessage.create({
    data: {
      userId: userId,
      content: content,
    },
  })

  prisma.$disconnect()
  return result
}

export async function getChatMessagesFromLast24Hours() {
  const result = await prisma.chatMessage.findMany({
    where: {
      createdAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
      }
    },
    orderBy: {
      createdAt: 'asc'
    },
    include: {
      user: true
    }
  })


  prisma.$disconnect()
  return result.map((message) => {
    return {
      user: {
        userId: message.userId,
        userImage: message.user.image,
      },
      message: message.content,
    }
  })
}