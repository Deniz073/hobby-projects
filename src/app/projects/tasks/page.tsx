import { Metadata } from "next"
import { getTasksForUser } from "@/app/db-interactions/tasks"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import CreateTaskDialog from "./components/create-task-dialog"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/AuthOptions"
import { redirect} from "next/navigation"


export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

export default async function TaskPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/login")
  }

  const tasks = await getTasksForUser(session.user?.id as string);

  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CreateTaskDialog />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  )
}
