import { minUsernameLength, minPasswordLength } from "../../signup"
import { ContainerColumn } from "../../../../styles/globals"
import { IUser } from "../../../../services/user"

type InvalidUserComponent = {
  readonly user: IUser
}

export default function InvalidUserComponent({ user }: InvalidUserComponent) {
  return <ContainerColumn>
    <h1>Could not sign up user { JSON.stringify(user) }</h1>
    <span>Username must be at least {minUsernameLength} characters long</span>
    <span>Password must be at least {minPasswordLength} characters long</span>
  </ContainerColumn>
}