import { PrismaClient } from "@prisma/client"
import { IUser } from "../services/user"

export default class UserRepository {
  static prisma = new PrismaClient()

  static async create(user: IUser) {
    return await this.prisma.user.create({ data: { ...user } })
  } 

  static findById(id: string) {
    const user = this.prisma.user.findUnique({ where: { id } })
    return user 
  }
}