"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { generateAPiKeyForUser } from "../actions"
import { useFormStatus } from "react-dom"

export default function ApiKeyForm({ currentApiKey }: { currentApiKey: string | null }) {

  function copyToClipboard() {
    navigator.clipboard.writeText(currentApiKey || "")
  }

  return (
    <Card className="sm:w-fit md:w-2/4">
      <CardHeader>
        <CardTitle>Api Key</CardTitle>
        <CardDescription>Generate your api key here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-1.5 mb-3">
          <Label htmlFor="name">Api key</Label>
          <code className="text-sm sm:text-base inline-flex items-center justify-between space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span className="flex gap-4 text-left">
              <span className="flex-1">
                <span className="text-yellow-500">
                  {currentApiKey ? currentApiKey : "No api key generated yet"}
                </span>
              </span>
            </span>

            <svg
              className="shrink-0 h-5 w-5 text-right transition text-gray-500 hover:text-white hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
              onClick={copyToClipboard}
            >
              <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
              <path
                d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
              </path>
            </svg>
          </code>
        </div>
        <form action={generateAPiKeyForUser}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <SubmitButton currentApiKey={currentApiKey} />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function SubmitButton({ currentApiKey }: { currentApiKey: string | null }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={currentApiKey?.startsWith("de_") || currentApiKey != null || pending}
      className="w-full"
    >
      Generate api key
    </Button>
  );
}
