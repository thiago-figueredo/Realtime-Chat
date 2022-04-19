import { Request, Response } from "express"
import { constants as HTTP_CONTANTS } from "http2"
import UserService, { IUser } from "../../../services/user"

export const apiSignInUrl = "http://localhost:3000/api/signin"

export default async function handler({ body }: Request, res: Response) {
  const user = body as IUser
  const { HTTP_STATUS_BAD_REQUEST } = HTTP_CONTANTS

  const userValidate = await UserService.validate(user)

  if (!userValidate) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json({
      signedUp: false,
      message: `user ${user.name} is not signed up`
    })
  }

  res.json({ signedUp: true })
}