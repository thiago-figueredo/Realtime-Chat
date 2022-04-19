import { ContainerRow, Input, Button, Form, Strong, H1 } from "../../../styles/globals"
import { Authentication, StyledLink } from "../style"
import { useRef, FormEvent } from "react"
import { IUserSignedUpResponse } from "../../api/signup"
import { v4 as uuidv4 } from "uuid"
import { apiSignUpUrl } from "../../api/signup"
import { useRouter } from "next/router"
import { signInURL } from "../signin"
import { IUser } from "../../../services/user"
import Link from "next/link"

export default function SignupComponent() {
  const nameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const avatarRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const signUpUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const user: IUser = {
      id: uuidv4(),
      name: nameRef.current!.value,
      password: passwordRef.current!.value,
      avatar: avatarRef.current!.value
    }

    const response = await fetch(apiSignUpUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })

    const { signedUp, message }: IUserSignedUpResponse = await response.json()

    if (!signedUp) 
      return router.push(`/authentication/signup/invalid?message=${message}`)

    router.push("/chat") 
  }

  return <Authentication>
    <Form onSubmit={ signUpUser }>
      <H1>Sign Up</H1>

      <Input 
        padding="0.3rem"
        type="text" 
        id="user-name"
        placeholder="Username" 
        maxLength={ 50 } 
        ref={ nameRef } 
      /> 

      <Input 
        padding="0.3rem"
        ref={ passwordRef } 
        id="user-password"
        type="password" 
        placeholder="Password" 
        maxLength={ 50 }
      /> 

      <Input 
        ref={ avatarRef } 
        id="user-avatar"
        type="text" 
        placeholder="Avatar (Optional)" 
        maxLength={ 50 }
        padding="0.3rem"
      /> 

      <Button type="submit">Sign Up</Button>

      <ContainerRow fontSize="small">
        <Strong>Already Signed up ?</Strong>
        <Link href={ signInURL } passHref>
          <StyledLink margin="0 0 0 .5rem" fontWeight="bold">
            Sign in
          </StyledLink>
        </Link>
      </ContainerRow>
    </Form>
  </Authentication>
}