import { 
  useState, 
  useRef, 
  Dispatch, 
  ReactNode,
  MutableRefObject,
  createContext, 
  SetStateAction,
} from "react"
import { Contact } from "../../pages/chat/contacts"

interface IChatContext {
  readonly chatContact: Contact | null
  readonly setChatContact: Dispatch<SetStateAction<Contact | null>>
  readonly contactRefs: MutableRefObject<HTMLElement[]>
}

const ChatContext = createContext<IChatContext>({
  contactRefs: { current: [] },
  chatContact: null,
  setChatContact: () => {}
})

interface IChatContextProviderProps {
  readonly children: ReactNode
}

export function ChatContextProvider({ children }: IChatContextProviderProps) {
  const [contactRefs, setContactsRefs] = useState<MutableRefObject<HTMLElement[]>>({ current: [] })
  const [chatContact, setChatContact] = useState<Contact | null>(null)
  const chatContextValue = { 
    chatContact, 
    setChatContact, 
    contactRefs 
  } as IChatContext

  return <ChatContext.Provider value={ chatContextValue }>
    { children }
  </ChatContext.Provider>
}

export default ChatContext