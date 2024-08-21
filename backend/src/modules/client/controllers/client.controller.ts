import { Request, Response } from "express";
import clientModel from '../../../models/Client';
import { AppDataSource } from "../../../database/app-data-source";
import { Client } from "../entities/client.entity";

export const createClient = async (req: Request, res: Response, next: unknown) => {
    try {

        console.log(req.body); // Adicione isso para verificar o que está sendo recebido
        const {email} = req.body;

        const client = await AppDataSource.getRepository(Client).save({
            email:email
        })
        console.log('Client created')
        res.status(201).json({ ok:true, message: "usuário criado com sucesso"});
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Erro ao criar cliente' });
    }
};

export const findAllClients = async (_req: Request, res: Response) => {
    try {
        const clients = await AppDataSource.getRepository(Client).find();
        if (clients.length === 0) {
            return res.status(404).json({ message: 'Nenhum cliente encontrado' });
        }
        // Retorna todos os clientes encontrados
        res.status(200).json(clients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar clientes' });
    }
};

export const updateClient = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const updated = await clientModel.updateClient(Number(id), req.body);
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar um cliente' });
    }
};

export const deleteClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await clientModel.deleteClient(Number(id));
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: 'Erro ao deletar cliente' });
    }
};