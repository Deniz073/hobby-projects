"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const socket = io("https://hobby-projects-server.vercel.app")

interface User {
  name: string
}

interface Message {
  user: User
  message: string
}

interface ChatProps {
  messages: Message[]
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatProps>({
    messages: [],
  })
  const [message, setMessage] = useState<string>("")
  const [user, setUser] = useState<User>({
    name: "",
  })

  function sendMessage() {
    socket.emit("send-message", {
      user: user,
      message: message,
    })
  }


  useEffect(() => {

    setUser({
      name: prompt("What is your name?", "Harry Potter") as string
    })

    socket.on("connect", () => {
      console.log("connected")
    })
    socket.on("disconnect", () => {
      console.log("disconnected")
    })

    socket.on("receive-message", ({ user, message }) => {
      console.log(user.name, message)
      console.log('message received')

      setMessages((prevState) => ({
        messages: [...prevState.messages, { user, message }],
      }))

    })

    return () => {
      socket.off("connect")
      socket.off("disconnect")
      socket.off("receive-message")
    }

  }, [])

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between overflow-auto flex flex-col min-h-screen mx-auto max-w-[100vh]">
      <div className="flex flex-col sm:items-center text-center justify-center py-3 border-b-2 border-gray-200">
        <h2 className=" font-semibold">Chat app with socket.io</h2>
        <p className="text-red-600">this is a work in progress</p>
      </div>
      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

        {messages.messages.map((message, index) => (
          <>
            {
              message.user.name !== user.name ? (
                <div key={index} className="chat-message">
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                      <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message.message}</span></div>
                    </div>
                    <Image width={30} height={30} src="/images/nextjs-logo.png" alt="My profile" className="w-6 h-6 rounded-full order-1" />
                  </div>
                </div>
              ) : (
                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message.message}</span></div>
                      </div>
                      <Image width={30} height={30} src="/images/nextjs-logo.png" alt="My profile" className="w-6 h-6 rounded-full order-2" />
                    </div>
                  </div>
              )
            }
          </>

        ))}
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3" />

          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button onClick={sendMessage} type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
              <span className="font-bold">Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
