"use client"

import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export default function SignOutButton() {
  return (
    <Button onClick={() => signOut()} className="w-full">Sign out</Button>
  )
}
