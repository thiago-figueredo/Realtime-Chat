import { Sequelize } from "sequelize"
import { IUser } from "../services/user"

export default class UserRepository {
  private readonly user: IUser

  constructor(user: IUser) {
    this.user = user
  }

  async create(user: IUser) {
    const { DB_NAME  } = process.env
    console.log(DB_NAME)
    // const sequelize = new Sequelize(

    //   // "realtime_chat_users",
    //   // "postgres",
    //   // "thiagolindoflamengo010",
    //   {
    //     dialect: "postgres",
    //     host: "localhost",
    //     port: 5432
    //   }
    // )
  } 
}