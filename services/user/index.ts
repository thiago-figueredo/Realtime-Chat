import axios from "axios"

export interface IUser {
  readonly username: string
  readonly password: string
  readonly avatar?: string
}

interface IUserService {
  readonly signUp: (user: IUser) => void
}

interface ISignUpResponse {
  readonly signedUp: boolean
}

interface IAxiosResponse<T> {
  readonly data: T
}

export default class UserService implements IUserService {
  readonly url: string

  constructor(url: string) {
    this.url = url
  }

  async signUp(user: IUser): Promise<ISignUpResponse> {
    const { data } = await axios.post<IUser, IAxiosResponse<ISignUpResponse>>(this.url, user)
    return data
  }
}