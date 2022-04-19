import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

export default async function handler(req: Request, res: Response) {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany({
    select: { 
      name: true, 
      avatar: true 
    }
  })

  await prisma.$disconnect()
  res.json(users)
}