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
    <Card className="w-full sm:w-[30rem] md:w-[40rem] lg:w-[50rem]">
      <CardHeader>
        <CardTitle>Api Key</CardTitle>
        <CardDescription>Generate your api key here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full mx-auto bg-gray-900 px-4 rounded-md shadow-lg relative mb-2">
          <div className="flex justify-between items-center py-4 rounded-t-lg">
            <span className="text-sm font-semibold text-gray-400">.env</span>
            <svg
              className="shrink-0 h-5 w-5 text-right transition text-gray-500 text-sm hover:text-white hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
              onClick={copyToClipboard}
            >
              <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
              <path
                d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
              </path>
            </svg>
          </div>
          <pre className="text-md text-white overflow-x-auto pb-3">
            <code id="codeBlock" className="block">
              <span className="text-yellow-500"><span className="text-white">API_KEY=</span>{currentApiKey ? currentApiKey : "No api key generated yet"}</span>
            </code>
          </pre>
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
