import { ChatContextProvider } from "../../context/chat"
import { ContainerRow } from "../../styles/globals"
import { useState } from "react"
import { Message } from "./chatMessage"
import ChatMessage from "./chatMessage"
import Contacts from "./contacts"


export default function ChatComponent() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = () => {
    setMessages(previousMessages => [...previousMessages, message])
    setMessage("")
  }

  const chatMessageProps = {
    messages,
    setMessages,
    message,
    setMessage,
    sendMessage
  }

  return <ChatContextProvider>
    <ContainerRow 
      onKeyUp={ ({ key }) => key === "Enter" && sendMessage() }
      // backgroundImage="linear-gradient(to right top, #0a0a0b, #181c42, #26287a, #442fb3, #732aea);"
      background="#0A0A0B"
      width="70%" 
      maxWidth="48.5rem"
      columns="1.5fr 3.5fr"
      position="relative"
    >
      <Contacts />
      <ChatMessage { ...chatMessageProps } />
    </ContainerRow>
  </ChatContextProvider>
}