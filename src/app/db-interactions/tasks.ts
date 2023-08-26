"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";
import { z } from "zod";

export async function getTasksForUser(userId: string) {
  const result = await prisma.task.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return result;
}

export async function createTaskForUser(formData: FormData) {
  try {
    const parsed = z.object({
      title: z.string().nonempty(),
      status: z.string().nonempty(),
      priority: z.string().nonempty(),
    }).parse({
      title: formData.get("title"),
      status: formData.get("status"),
      priority: formData.get("priority")
    });

    await prisma.task.create({
      data: {
        title: parsed.title,
        status: parsed.status,
        priority: parsed.priority,
        label: "bug",
        userId: "cllqrbz8m0000tkkw5y7m8ia1",
      },
    });

    revalidatePath("/projects/tasks");

    return { success: true };
  } catch (e) {
    return { success: false };
  };

}

export async function deleteTask(id: string): Promise<void> {
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/projects/tasks");
}
