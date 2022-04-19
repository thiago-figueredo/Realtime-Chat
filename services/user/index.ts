import { minNameLength, minPasswordLength } from "../../pages/api/signup"
import UserRepository from "../../repositories/user"

export interface IUser {
  readonly id: string
  readonly name: string
  readonly password: string
  readonly avatar?: string 
}

export default class UserService {
  static validate({ name, password }: IUser): boolean {
    return name.length > minNameLength && password.length > minPasswordLength
  }

  static findById(id: string) {
    return UserRepository.findById(id)
  }
}