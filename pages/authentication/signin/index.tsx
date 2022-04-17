import { Form, Input, Button } from "../../../components/form/style"
import { Authentication, StyledLink } from "../../../components/authentication/style"
import { ContainerRow } from "../../../styles/globals"
import { signUpURL } from "../signup"
import Link from "next/link"

export const signInURL = "/authentication/signin"

export default function SigninComponent() {
  return <Authentication>
    <h1>Sign In</h1>

    <Form>
      <Input 
        type="text" 
        id="user-name"
        placeholder="Username" 
        maxLength={ 50 } 
      /> 

      <Input 
        id="user-password"
        type="password" 
        placeholder="Password" 
        maxLength={ 50 }
      /> 

      <Button type="submit">Sign in</Button>

      <ContainerRow>
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