import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { Client } from "../modules/client/entities/client.entity"
import { CompanyClient } from "../modules/client/entities/companyclient.entity"
import { PersonClient } from "../modules/client/entities/personclient.entity"
dotenv.config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities:[
        process.env.NODE_ENV ==="production"
            ?"dist/src/modules/**/*.entity.js"
            :"src/modules/**/*.entity.ts",
    ],
    synchronize:true
})

