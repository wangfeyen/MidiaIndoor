import { Request, Response } from "express";
import { AppDataSource } from "../../../database/app-data-source";
import { PersonClient } from "../entities/personclient.entity";

export const createPersonClient = async(req:Request,res:Response)=>{
    try {
        const {email,nome,cpf,telefones,clientId} = req.body;
        // console.log(req.body)
        const personClient = await AppDataSource.getRepository(PersonClient).save({
            email:email,
            nome:nome,
            cpf:cpf,
            telefones:telefones,
            clientId:clientId
        })
        console.log(`Person Client ${personClient.nome} created`)
        res.status(201).json({ok:true, message:"Cliente PF criado com sucesso"})
    } catch (error) {
        res.status(500).json({ok:false,message:"Não foi possível criar cliente PF"})
        console.log(error)
    }
}