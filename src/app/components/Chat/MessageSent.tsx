import Image from "next/image"
import MessageInterface from "./MessageInterface"

export default function MessageSent({ message, key }: MessageInterface) {
  return (
    <div key={key} className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message}</span></div>
        </div>
        <Image width={30} height={30} src="/images/nextjs-logo.png" alt="My profile" className="w-6 h-6 rounded-full order-2" />
      </div>
    </div>
  )
}
