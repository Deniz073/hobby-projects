"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import useAsyncEffect from "@/hooks/useAsyncEffect"
import Ably from "ably"
import MessageReceived from "@/app/components/Chat/MessageReceived"
import MessageSent from "@/app/components/Chat/MessageSent"
import { saveChatMessage, getChatMessagesFromLast24Hours } from "@/app/db-interactions/chat"


interface User {
  userId: string
  userImage: string | null
}

interface Message {
  user: User
  message: string
}

interface ChatProps {
  messages: Message[]
}

export default function Chat() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/login?callbackUrl=/projects/chat")
    }
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textInputRef = useRef<HTMLInputElement>(null)
  const [processing, setProcessing] = useState<boolean>(false)
  const [channel, setChannel] = useState<any>(null)
  const [messages, setMessages] = useState<ChatProps>({
    messages: [],
  })
  const [message, setMessage] = useState<string>("")
  const [user, setUser] = useState<User>({
    userId: "",
    userImage: ""
  })

  async function sendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (message === "") return

    setProcessing(true)

    channel.publish('message', { user: user, message: message });

    saveChatMessage(user.userId, message).then(() => {
      setMessage("")
      setProcessing(false)
      textInputRef.current?.focus()
    }).catch((error) => {
      console.log(error)
      channel.publish('message-delete', { user: user, message: message })
      setProcessing(false)
    })

  }


  useAsyncEffect(async () => {

    setUser({
      userId: session?.user?.id as string,
      userImage: session?.user?.image as string
    })

    const ably = new Ably.Realtime.Promise(process.env.NEXT_PUBLIC_ABLY_API_KEY as string);
    await ably.connection.once('connected');

    const channel = ably.channels.get('chat');

    channel.subscribe('message', (message: any) => {
      setMessages(prevState => ({
        messages: [...prevState.messages, message.data]
      }))
    });

    channel.subscribe('message-delete', (message: any) => {
      setMessages(prevState => ({
        messages: prevState.messages.filter((msg) =>
          msg.user.userId !== message.data.user.userId && msg.message !== message.data.message)
      }))
    });

    setChannel(channel)

    getChatMessagesFromLast24Hours().then((messages) => {
      setMessages({
        messages: messages
      })
    })

    return () => {
      channel.unsubscribe()
      ably.close()
    }

  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex-1 p-2 sm:p-6 justify-between overflow-auto flex flex-col min-h-[90vh] mx-auto max-w-[100vh]">
      <div className="flex flex-col sm:items-center text-center justify-center py-3 border-b-2 border-gray-200">
        <h2 className=" font-semibold">Chat app with websockets</h2>
        <p className="text-sm text-gray-500">Messages are removed after 24 hours</p>
      </div>
      <div id="messages" className="flex flex-col space-y-4 p-3 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto ">
        {messages.messages.map((message, index) => (
          message.user.userId !== user.userId ? (
            <MessageReceived key={index} message={message.message} image={message.user.userImage} />
          ) : (
            <MessageSent key={index} message={message.message} image={message.user.userImage} />
          )
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex flex-col sm:flex-row">
          <form onSubmit={sendMessage} className="w-full flex flex-col sm:flex-row">
            <input
              type="text"
              ref={textInputRef}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="..."
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md py-3" />
            <div className="sm:relative sm:flex sm:items-center sm:ml-2 mt-2 sm:mt-0">
              <button disabled={processing} type="submit" className="inline-flex items-center w-full justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none disabled:opacity-50 disabled:cursor-wait">
                <span className="font-bold">Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}
