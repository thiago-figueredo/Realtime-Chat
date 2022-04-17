import { Message } from "./style"

interface IMessageComponentPros {
  readonly margin: string
  readonly content: string
}

export default function MessageComponent({ margin, content }: IMessageComponentPros) {
  return <Message margin={ margin }>
    { content } 
  </Message>
}