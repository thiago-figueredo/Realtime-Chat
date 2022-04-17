import { 
  ContainerRow, 
  ContainerColumn, 
  Strong, 
  Button, 
  H2 
} from "../../styles/globals"
import { FaPowerOff, FaSmile, FaPaperPlane } from "react-icons/fa"
import { useState, useRef, Ref } from "react"
import { v4 as uuidv4 } from "uuid"
import { Input } from "../../components/form/style"
import { IUser } from "../../services/user"
import Message from "./message"
import Image from "next/image"

interface IMessage {
  readonly id: string
  readonly content: string
}

export default function ChatComponent() {
  const messageRef = useRef<HTMLInputElement>()
  const chatMessageRef = useRef<HTMLDivElement>()
  const [messages, setMessages] = useState<IMessage[]>([])
  const contacts: IUser[] = [
    { username: "Thiago", avatar: "", password: "" },
    { username: "James", avatar: "", password: "" },
    { username: "Ana", avatar: "", password: "" }
  ] 

  const sendMessage = () => {
    const message = messageRef.current!.value

    setMessages(previousMessages => [
      ...previousMessages, 
      { id: uuidv4(), content: message }
    ])

    messageRef.current!.value = ""
  }

  return <ContainerRow 
    onKeyUp={ ({ key }) => key === "Enter" && sendMessage() }
    background="#140827" 
    width="80%" 
    columns="1fr 3fr"
  >
    <ContainerColumn>
      <H2 padding="1rem">Contacts</H2>

      <ContainerColumn gap="1rem">
        {
          contacts.map(({ avatar, username }) => 
            <ContainerColumn 
              key={ `${username}${avatar}` } 
              background="tomato" 
              padding=".5rem"
              justifyContent="center"
            >
              {/* <Image src={ avatar } alt="" /> */}
              <strong>{ username }</strong>
            </ContainerColumn>)
        }

        <ContainerRow background="brown" padding=".5rem">
          <Strong>Admin</Strong>
        </ContainerRow>
      </ContainerColumn>
    </ContainerColumn>

    <ContainerColumn height="100%" rows="repeat(5, 1fr)">
      <ContainerRow 
        background="blue" 
        justifyContent="space-between"
        gridAutoFlow="column"
        padding=".5rem 2rem"
      >
        <span>Username</span>
        <FaPowerOff />
      </ContainerRow>

      <ContainerColumn 
        background="#0A0A0B"
        height="100%" 
        alignItems="start"
        padding="1rem"
        rows={ `repeat(${messages.length.toString()}, .1fr)` }
        gridRow="2/6"
        ref={ chatMessageRef as Ref<HTMLDivElement> }
      >
        {
          messages.map(({ id, content }, index) => 
            <Message 
              content={ content }
              margin={ index % 2 ? "0 70%" : ".5rem 0%" } 
              key={ id } 
            />)
        }
      </ContainerColumn>

      <ContainerRow 
        gridAutoFlow="column" 
        columns="1fr 10fr" 
        padding="0 2rem"
        gridRow="6/-1"
      >
        <FaSmile className="emoji" />
        <Input 
          ref={ messageRef as Ref<HTMLInputElement> } 
          placeholder="Message" 
          padding=".2rem .5rem" 
        />
        <Button 
          background="#732AEA" 
          padding="0 .5rem" 
          height="100%" 
          cursor="pointer"
          onClick={ sendMessage }
        >
          <FaPaperPlane />
        </Button>
      </ContainerRow>
    </ContainerColumn>
  </ContainerRow>
}