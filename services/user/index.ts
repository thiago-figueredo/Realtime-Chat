import axios from "axios"

export interface IUser {
  readonly username: string
  readonly password: string
}

interface IUserService {
  readonly signUp: (user: IUser) => void
}

interface ISignUpResponse {
  readonly isSignedUp: boolean
}

export default class UserService implements IUserService {
  readonly url: string

  constructor(url: string) {
    this.url = url
  }

  async signUp(user: IUser) {
    const { isSignedUp } = await axios.post<IUser, ISignUpResponse>(this.url, user)
    if (!isSignedUp) throw new Error("User already exists")
  }
}