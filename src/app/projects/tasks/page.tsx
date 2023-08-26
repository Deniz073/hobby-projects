import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import { getTasksForUser } from "@/app/db-interactions/tasks"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
import CreateTaskSheet from "./components/create-task-sheet"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/projects/tasks/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
  const tasks = await getTasksForUser("cllqrbz8m0000tkkw5y7m8ia1");

  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
              {tasks.length}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CreateTaskSheet />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  )
}
