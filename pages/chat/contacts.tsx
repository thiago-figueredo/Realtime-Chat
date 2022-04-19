import { useState, useEffect, useCallback, useRef, RefObject, Ref, useContext } from "react"
import { IUser } from "../../services/user"
import { 
  ContainerColumn, 
  ContainerRow, 
  Strong, 
  H2, 
  Img
} from "../../styles/globals"
import ChatContext from "../../context/chat"

export type Contact = IUser

const apiGetUsersUrl = "http://localhost:3000/api/getUsers"

export default function Contacts() {
  const { setChatContact, contactRefs } = useContext(ChatContext)
  const [users, setUsers] = useState<IUser[]>([])
  
  const getUsers = useCallback(async () => {
    const response = await fetch(apiGetUsersUrl)
    const users: IUser[] = await response.json()

    setUsers(users)
  }, [])

  useEffect(() => { getUsers() }, [getUsers])

  return <ContainerColumn position="relative" background="#131324">
    <H2 padding="1rem">Contacts</H2>

    <ContainerColumn gap=".7rem" height="30rem" overflow="auto">
      {
        users.map(({ avatar, name }, index) => 
          <ContainerColumn 
            id={ `${index}` }
            key={ `${name}${avatar}` } 
            background="#0A0A0B"
            columns="repeat(2, 1fr)"
            padding=".5rem 1rem"
            alignItems="start"
            ref={ self => contactRefs.current[index] = self as HTMLElement }
            onClick={ ({ currentTarget }) => {
              const id = currentTarget.id

              setChatContact(users[parseInt(id)])

              contactRefs.current.forEach(ref => {
                ref.id === id ?
                  ref.style.background = "#732AEA" :
                  ref.style.background = "#0A0A0B"
              })
            }}
          >
            { 
              avatar && <Img 
                alt="" 
                src={ avatar } 
                width="70%"
                borderRadius="50%"
              /> 
            }
            <strong>{ name }</strong>
          </ContainerColumn>)
      }

      <ContainerRow 
        background="brown" 
        padding=".5rem" 
        position="absolute" 
        width="91.9%"
        left="0"
        bottom="0"
      >
        <Strong>Admin</Strong>
      </ContainerRow>
    </ContainerColumn>
  </ContainerColumn>
}