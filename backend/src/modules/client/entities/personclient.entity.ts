import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Client} from "./client.entity";

@Entity('personClient')
export class PersonClient extends Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome:string;

    @Column()
    cpf:string;

    @Column({type:'simple-array',nullable:true})
    telefones?:string[];


}