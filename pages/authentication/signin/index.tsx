import { ContainerRow, Form, Button, Input } from "../../../styles/globals"
import { Authentication, StyledLink } from "../style"
import { useRef, FormEvent } from "react"
import { IUserSignedUpResponse } from "../../api/signup"
import { useRouter } from "next/router"
import { signUpURL, apiSignUpUrl } from "../../api/signup"
import { v4 as uuidv4 } from "uuid"
import UserService, { IUser } from "../../../services/user"
import Link from "next/link"
import { apiSignInUrl } from "../../api/signin"

export const signInURL = "/authentication/signin"

export default function SigninComponent() {
  const nameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const avatarRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const signInUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const user: IUser = {
      id: uuidv4(),
      name: nameRef.current!.value,
      password: passwordRef.current!.value,
      avatar: avatarRef.current!.value
    }

    const response = await fetch(apiSignInUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })

    const { signedUp, message} = await response.json()

    if (!signedUp) 
      return router.push(`/authentication/signup/invalid?message=${message}`)

    router.push("/chat") 
  }

  return <Authentication >
    <h1>Sign In</h1>

    <Form onSubmit={ signInUser }>
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
        id="user-password"
        type="password" 
        placeholder="Password" 
        maxLength={ 50 }
        ref={ passwordRef }
      /> 

      <Button type="submit">Sign in</Button>

      <ContainerRow fontSize="small">
        <strong>Don&#8217;t have a Account ? </strong>
        <Link href={ signUpURL } passHref>
          <StyledLink margin="0 0 0 .5rem" fontWeight="bold">
            Sign up
          </StyledLink>
        </Link>
      </ContainerRow>
    </Form>
  </Authentication>
}