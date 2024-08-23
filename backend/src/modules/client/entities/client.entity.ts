import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyClient } from "./companyclient.entity";
import { PersonClient } from "./personclient.entity";

@Entity('client')
export class Client{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    nome:string;

    @Column()
    email:string;

    @CreateDateColumn()
    criado_em:Date;

    @UpdateDateColumn()
    atualizado_em:Date;

    @DeleteDateColumn()
    deletado_em:Date
    
    //Relations
    @OneToOne(()=>CompanyClient, (companyClient)=>companyClient.client)
    companyClient:CompanyClient;

    @OneToOne(()=>PersonClient, (personClient)=>personClient.client)
    personClient:CompanyClient;

    // @Column()
    // endereço:string;

    // @Column()
    // contrato:string;
    
}
