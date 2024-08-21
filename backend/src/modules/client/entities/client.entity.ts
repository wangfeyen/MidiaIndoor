import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('clients')
export class Client{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email:string;

 

    // @Column()
    // endereço:string;

    // @Column()
    // contrato:string;

    @CreateDateColumn()
    criado_em:Date;

    @UpdateDateColumn()
    atualizado_em:Date;

    @DeleteDateColumn()
    deletado_em:Date
    
}
