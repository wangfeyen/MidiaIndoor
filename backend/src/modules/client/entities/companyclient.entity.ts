import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./client.entity";



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

    @OneToOne(()=>Client, client=>client.companyClient)
    @JoinColumn({name:'id'})
    client:Client;


}
