"use client"

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'


export default function Login() {
  const { data: session } = useSession()

  if (session) {
    redirect('/')
  }

  async function Login(provider: string) {
    //sign in then add user to database with prisma
    const data = await signIn(provider)

  }

  return (
    <>
      <div className="flex min-h-[40vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <button
              onClick={() => Login("google")}
              className="flex disabled:cursor-wait disabled:opacity-50 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  )
}