import { minPasswordLength, minUsernameLength } from "../../authentication/signup"
import { Request, Response } from "express"
import { constants as HTTP_CONTANTS } from "http2"
import UserService, { IUser } from "../../../services/user"

export default async function handler(req: Request, res: Response) {
  const { username, password, avatar }: IUser = req.body as IUser
  const { 
    HTTP_STATUS_OK, 
    HTTP_STATUS_BAD_REQUEST, 
    HTTP_STATUS_INTERNAL_SERVER_ERROR 
  } = HTTP_CONTANTS

  if (
    username?.length < minUsernameLength ||
    password?.length < minPasswordLength
  ) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json({ signedUp: false })
  }

  const userRepository = new UserService("http://localhost:3000/api/users")

  try {
    // await userRepository.signUp({ username, password, avatar })
    res.status(HTTP_STATUS_OK).json({ signedUp: true })
  } catch (exception: any) {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ 
      signedUp: false,
      message: exception.message
    })
  }
}