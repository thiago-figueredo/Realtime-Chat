import { Request, Response } from "express"
import { constants as HTTP_CONTANTS } from "http2"
import UserService, { IUser } from "../../../services/user"
import UserRepository from "../../../repositories/user"

export interface IUserSignedUpResponse {
  readonly signedUp: boolean
  readonly message?: string
}


export const signUpURL = "/authentication/signup"
export const minNameLength = 3
export const minPasswordLength = 10
export const apiSignUpUrl = "http://localhost:3000/api/signup"

export default async function handler(req: Request, res: Response) {
  const user: IUser = req.body as IUser
  const { 
    HTTP_STATUS_OK, 
    HTTP_STATUS_BAD_REQUEST, 
    HTTP_STATUS_INTERNAL_SERVER_ERROR 
  } = HTTP_CONTANTS

  const userValidated = UserService.validate(user) 

  if (!userValidated) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json({ 
      signedUp: false,
      message: `
        Invalid Body!
        Name must be at least ${minNameLength} characters long.
        Password must be at least ${minPasswordLength} characters long.
      `
    })
  }

  try {
    await UserRepository.create(user)
    res.status(HTTP_STATUS_OK).json({ signedUp: true })
  } catch (exception: any) {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ 
      signedUp: false,
      message: exception.message
    })
  }
}