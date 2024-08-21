import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Client} from "../../../modules/client/entities/client.entity";

@Entity('companyClient')
export class CompanyClient extends Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome:string;

    @Column()
    cpf:string;

    @Column({type:'simple-array',nullable:true})
    telefones?:string[];


}