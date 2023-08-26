"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";

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

export async function createTaskForUser(taskData: FormData) {
  const title = taskData.get("title")?.toString();
  const status = taskData.get("status")?.toString();
  const priority = taskData.get("priority")?.toString();
  const label = "placeholder";

  console.log("hier")

  if(!title || !status || !priority) throw new Error("Missing required fields");

   await prisma.task.create({
    data: {
      title,
      status,
      priority,
      label,
      userId : "cllqrbz8m0000tkkw5y7m8ia1",
    },
  });

  revalidatePath("/projects/tasks");
}

export async function deleteTask(id: string) {
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/projects/tasks");
}
