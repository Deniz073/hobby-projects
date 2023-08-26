"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "../AuthOptions";
import { redirect } from "next/navigation";

const taskSchema = z.object({
  title: z.string().nonempty(),
  status: z.string().nonempty(),
  priority: z.string().nonempty(),
})

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

  const session = await getServerSession(authOptions)

  if(!session) redirect("auth/login")

  try {
    const parsed = taskSchema.parse({
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
        userId: session.user?.id as string
      },
    });

    revalidatePath("/projects/tasks");

    return { success: true };
  } catch (e) {
    return { success: false };
  };

}

export async function editTask(formData: FormData) {

  const session = await getServerSession(authOptions)

  if(!session) redirect("auth/login")
  const userId = session.user?.id as string
  const taskId = formData.get("id") as string

  try {
    const parsed = taskSchema.parse({
      title: formData.get("title"),
      status: formData.get("status"),
      priority: formData.get("priority")
    });

    //check if task userId is the same as session userId
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (task?.userId !== userId) {
      return { success: false };
    }

    await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        title: parsed.title,
        status: parsed.status,
        priority: parsed.priority,
      },
    });

    revalidatePath("/projects/tasks");

    return { success: true };
  } catch (e) {
    return { success: false };
  };

}

export async function deleteTask(id: string): Promise<void> {
  const session = await getServerSession(authOptions)

  if (!session) redirect("auth/login")

  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/projects/tasks");
}
