import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {Client} from "./client.entity";

@Entity('personClient')
export class PersonClient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome:string;

    @Column()
    cpf:string;

    @Column({type:'simple-array',nullable:true})
    telefones?:string[];

    @OneToOne(()=>Client, client=>client.personClient)
    @JoinColumn({name:'id'})
    client:Client;


}