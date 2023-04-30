"use client"

import Image from "next/image"
import { useState } from "react"
import useAsyncEffect from "@/hooks/useAsyncEffect"
import Ably from "ably"

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
  const [channel, setChannel] = useState<any>(null)
  const [messages, setMessages] = useState<ChatProps>({
    messages: [],
  })
  const [message, setMessage] = useState<string>("")
  const [user, setUser] = useState<User>({
    name: "",
  })

  function sendMessage() {

    channel.publish('message', { user: user, message: message });
    setMessage("")
  }


  useAsyncEffect(async () => {

    // setUser({
    //   name: prompt("What is your name?", "Harry Potter") as string
    // })

    const ably = new Ably.Realtime.Promise(process.env.NEXT_PUBLIC_ABLY_API_KEY as string);
    await ably.connection.once('connected');
    console.log('Connected to Ably!');

    const channel = ably.channels.get('chat');

    channel.subscribe('message', (message: any) => {
      console.log('message received', message)
      setMessages(prevState => ({
        messages: [...prevState.messages, message.data]
      }))
    });

    setChannel(channel)

  }, [])

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between overflow-auto flex flex-col min-h-screen mx-auto max-w-[100vh]">
      <div className="flex flex-col sm:items-center text-center justify-center py-3 border-b-2 border-gray-200">
        <h2 className=" font-semibold">Chat app with socket.io</h2>
        <p className="text-red-600">this is a work in progress</p>
      </div>
      <div id="messages" className="flex flex-col space-y-4 p-3 max-h-[80vh] overflow-y-auto ">

        {messages.messages.map((message, index) => (
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
            <div key={index} className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message.message}</span></div>
                </div>
                <Image width={30} height={30} src="/images/nextjs-logo.png" alt="My profile" className="w-6 h-6 rounded-full order-2" />
              </div>
            </div>
          )
        ))}
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex flex-col sm:flex-row">
          <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md py-3" />
          <div className="sm:relative sm:flex sm:items-center sm:ml-2 mt-2 sm:mt-0">
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
