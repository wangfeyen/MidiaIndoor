import { AfterInsert, AfterUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./client.entity";
import { AppDataSource } from "../../../database/app-data-source";



@Entity('companyClient')
export class CompanyClient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cnpj:string;

    @Column({type:'simple-array',nullable:true})
    telefones?:string[];
    
    @Column()
    razaoSocial:string;

    @Column()
    nomeFantasia:string;

    @Column()
    clientId:number

    @OneToOne(() => Client, (client)=>client.companyClient)
    @JoinColumn({name:"clientId"})
    client:Client;


}
