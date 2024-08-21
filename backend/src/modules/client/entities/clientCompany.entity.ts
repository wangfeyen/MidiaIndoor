import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Client} from "../../../modules/client/entities/client.entity";

@Entity('companyClient')
export class CompanyClient extends Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cnpj:string;

    @Column({type:'simple-array',nullable:true})
    telefones?:string[];
    
    @Column()
    razão_social:string;

    @Column()
    nome_fantasia:string;
}