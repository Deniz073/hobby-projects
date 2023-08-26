"use server"

import { prisma } from "./db"


export async function saveChatMessage(userId: string, content: string) {

  const result = await prisma.chatMessage.create({
    data: {
      userId: userId,
      content: content,
    },
  })

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