"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/shadcn/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/shadcn/dialog";

import { Input } from "@/app/components/shadcn/input";
import { Label } from "@/app/components/shadcn/label";
import { Button } from "@/app/components/shadcn/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

interface Task {
  name: string;
}

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [name, setName] = useState<string>("");
  const [dialogOpen = false, setDialogOpen] = useState<boolean>(false);

  function createTask() {
    const task = { name };
    setTasks((tasks) => [...tasks, task]);
    setName("");
    setDialogOpen(false);
  }

  function deleteTask(task: Task) {
    setTasks((tasks) => tasks.filter((t) => t.name !== task.name));
  }

  return (
    <div className="flex flex-col max-w-6xl mx-auto mt-52">
      <Dialog open={dialogOpen}  >
        <DialogTrigger onClick={() => setDialogOpen(!dialogOpen)} asChild>
          <Button size="sm" variant="default">
            Create task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create task</DialogTitle>
            <DialogDescription>Create a new task here.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={name} onChange={e => setName(e.target.value)} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={createTask}>Save task</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Table>
        <TableCaption>Manage your tasks</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Task</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.name}>
              <TableCell className="font-medium">{task.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
