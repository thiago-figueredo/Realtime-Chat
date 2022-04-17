import { Form, Input, Button } from "../../../components/form/style"
import { useRef, FormEvent } from "react"
import { useRouter } from "next/router"
import { Authentication, StyledLink } from "../../../components/authentication/style"
import { ContainerRow } from "../../../styles/globals"
import { signInURL } from "../signin"
import UserService, { IUser } from "../../../services/user"
import Link from "next/link"

export const signUpURL = "/authentication/signup"
export const minUsernameLength = 3
export const minPasswordLength = 10
const apiSignUpUrl = "http://localhost:3000/api/signup"

export default function SignupComponent() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const avatarRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const signUpUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const user: IUser = {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
      avatar: avatarRef.current!.value
    }
    
    const userService = new UserService(apiSignUpUrl)

    try {
      const { signedUp } = await userService.signUp(user) 

      if (!signedUp) return router.push("/authentication/signup/invalid")
      router.push("/chat")
    } catch {
      router.push("/authentication/signup/invalid")
    }
  }

  return <Authentication>
    <Form onSubmit={ signUpUser }>
      <h1>Sign Up</h1>
      <Input 
        type="text" 
        id="user-name"
        placeholder="Username" 
        maxLength={ 50 } 
        ref={ usernameRef } 
      /> 

      <Input 
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
      /> 

      <Button type="submit">Sign Up</Button>

      <ContainerRow fontSize="small">
        <strong>Already Signed up ?</strong>
        <Link href={ signInURL } passHref>
          <StyledLink margin="0 0 0 .5rem" fontWeight="bold">
            Sign in
          </StyledLink>
        </Link>
      </ContainerRow>
    </Form>
  </Authentication>
}