"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import createShortUrl from "./actions"
import QRCode from "react-qr-code";
import { useFormState, useFormStatus } from "react-dom"


export default function Form() {
  const [state, formAction] = useFormState(createShortUrl, null)

  return (
    <div className="w-full flex flex-col">
      <form action={formAction} className="w-full items-center gap-y-3 flex flex-col mx-auto">
        <Input type="url" required inputMode="text" name="long" className="w-full md:w-1/2" placeholder="Enter url" />
        {state?.issues && (
          <div className="w-full flex flex-col items-center">
            {state.issues.map((issue, i) => (
              <p key={i} className="text-red-500">{issue}</p>
            ))}
          </div>
        )}
        <SubmitButton />
      </form>
      {state?.short && (
        <div className="w-full flex flex-col items-center mt-4">
          <p className="text-xl">Your short url is:</p>
          <a href={`${state.short}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">{`${state.short}`}</a>
          <QRCode className="mt-3" value={`${state.short}`} />
        </div>
      )}
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-1/2">{pending ? "Creating url" : "Create short url"}</Button>
  );
}