import { Form, Input, Button } from "../../../components/form/style"
import { useState, useRef, FormEvent } from "react"
import { useRouter } from "next/router"
import { Authentication, StyledLink } from "../../../components/authentication/style"
import { ContainerRow } from "../../../styles/globals"
import { signInURL } from "../signin"
import UserService, { IUser } from "../../../services/user"
import InvalidSignUp from "./invalid"
import Link from "next/link"

export const signUpURL = "/authentication/signup"
export const minUsernameLength = 3
export const minPasswordLength = 10

const initialUser = { username: "", password: "" }

export default function SignupComponent() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const [user, setUser] = useState<IUser>(initialUser)

  const isValidUser = ({ username, password }: IUser): boolean => {
    return username.length > minPasswordLength && password.length > minUsernameLength
  }

  const signUpUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const user: IUser = {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value
    }
    
    const userService = new UserService("/user/create")
    setUser(user)

    try {
      await userService.signUp(user) 
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

      <Button type="submit">Sign Up</Button>

      <ContainerRow>
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