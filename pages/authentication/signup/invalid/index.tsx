import { ContainerColumn, H1 } from "../../../../styles/globals"
import { useRouter } from "next/router"
import { IUser } from "../../../../services/user"

type InvalidUserComponent = {
  readonly user: IUser
}

export default function InvalidUserComponent({ user }: InvalidUserComponent) {
  const { query } = useRouter()
  const { message } = query

  console.log(query)
  return <ContainerColumn padding="2rem">
    <H1 margin="0 0 1rem 0">Could not sign up user { JSON.stringify(user) }</H1>
    <span>{ message }</span>
    {/* <span>Username must be at least {minUsernameLength} characters long</span>
    <span>Password must be at least {minPasswordLength} characters long</span> */}
  </ContainerColumn>
}