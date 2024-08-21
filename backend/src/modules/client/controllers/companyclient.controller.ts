import { Request, Response } from "express";
import { AppDataSource } from "../../../database/app-data-source";
import { CompanyClient } from "../entities/companyclient.entity";

export const createCompanyClient = async(req:Request,res:Response)=>{
    try {
        const {cnpj,telefones,razaoSocial,nomeFantasia,email,clientId} = req.body;
        // console.log(req.body)
        const companyClient = await AppDataSource.getRepository(CompanyClient).save({
            cnpj:cnpj,
            telefones:telefones,
            razaoSocial:razaoSocial,
            nomeFantasia:nomeFantasia,
            email:email,
            clientId:clientId
        })
        console.log(`Company Client ${companyClient.nomeFantasia} created`)
        res.status(201).json({ok:true, message:"Cliente PJ criado com sucesso"})
    } catch (error) {
        res.status(500).json({ok:false,message:"Não foi possível criar cliente PJ"})
        console.log(error)
    }
}

export const findAllCompanyClients = async(req:Request,res:Response)=>{
    try {
        const companyClients = await AppDataSource.getRepository(CompanyClient).find()
        res.status(200).json(companyClients)
        console.log(companyClients)
    } catch (error) {
        res.status(400).json({ok:false,message:"Não foi encontrado nenhum cliente PJ"})
    }
}

export const updateCompanyClient = async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        res.status(400).json({ok:false,message:"Não foi possível atualizar este cliente PJ"})
    }
}