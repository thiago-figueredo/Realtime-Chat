import { useState, useRef, Ref, Dispatch, SetStateAction, useContext } from "react"
import { ContainerColumn, ContainerRow, Button, Input, Span, Img } from "../../styles/globals"
import { AiOutlineClose } from "react-icons/ai"
import { FaPaperPlane } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import dynamic from "next/dynamic"
import Message from "./message"
import ChatContext from "../../context/chat"

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false })

export type Message = string

interface IChatMessageProps {
  readonly messages: Message[]
  readonly sendMessage: () => void
  readonly message: Message
  readonly setMessage: Dispatch<SetStateAction<Message>>
}

export default function ChatMessage({ 
  message, messages, sendMessage, setMessage
}: IChatMessageProps) {
  const { chatContact, setChatContact, contactRefs } = useContext(ChatContext)
  const chatMessageRef = useRef<HTMLDivElement>()
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false)

  return <ContainerColumn height="100%" rows="repeat(5, 1fr)">
    <ContainerRow 
      background="#131324"
      justifyItems="space-between"
      alignSelf="start"
      gridAutoFlow="column"
      padding=".5rem"
      height="68%"
    >
      <ContainerRow 
        columns="repeat(3, .7fr)" 
        justifyItems="start" 
        width="50%"
        padding="0 .5rem"
      >
        <Img src={ chatContact?.avatar } alt="" width="35" borderRadius="50%" />
        <Span>{ chatContact?.name }</Span>
      </ContainerRow>

      {
        chatContact && <AiOutlineClose  
          style={{ 
            padding: ".3rem", 
            background: "#732AEA", 
            border: "none", 
            borderRadius: "50%",
            fontSize: "1.5rem",
            opacity: ".8"
          }} 

          onClick={ ({ currentTarget }) => { 
            const contactName = currentTarget.previousSibling?.childNodes[1].textContent

            setChatContact(null) 
            contactRefs.current.find(ref => 
              ref.childNodes[1].textContent === contactName && 
                (ref.style.background = "#0A0A0B"))
          }}
        />
      }
    </ContainerRow>

    <ContainerColumn 
      background="#0A0A0B"
      height="100%" 
      alignItems="start"
      padding="1rem"
      gridRow="2/6"
      rows={ `repeat(${messages.length.toString()}, .1fr)` }
      ref={ chatMessageRef as Ref<HTMLDivElement> }
    >
      {
        messages.map((message, index) => 
          <Message 
            content={ message }
            margin={ index % 2 ? "0 70%" : ".5rem 0%" } 
            key={ uuidv4() } 
          />)
      }
    </ContainerColumn>

    <ContainerRow 
      gridAutoFlow="column" 
      columns="1fr 10fr" 
      gridRow="6/-1"
    >
      <ContainerColumn 
        height="100%"
        cursor="pointer"
        onClick={ () => setOpenEmojiPicker(!openEmojiPicker) }
      >
        🙂 

        {
          openEmojiPicker && <EmojiPicker 
            onEmojiClick={ (event, { emoji }) => {
              setMessage(message + emoji)
              setOpenEmojiPicker(false)
            }} 
          />
        }
      </ContainerColumn>

      <Input 
        placeholder="Type your message here" 
        padding=".5rem" 
        background="#131324"
        color="snow"
        onChange={ ({ target }) => setMessage(target.value) }
        value={ message }
      />

      <Button 
        background="#732AEA" 
        padding="0 .5rem" 
        borderRadius=".2rem"
        height="100%" 
        cursor="pointer"
        onClick={ sendMessage }
      >
        <FaPaperPlane />
      </Button>
    </ContainerRow>
  </ContainerColumn>
}