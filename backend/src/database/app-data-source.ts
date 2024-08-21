import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { Client } from "../modules/client/entities/client.entity"
dotenv.config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities:[Client],
    synchronize:true
})

