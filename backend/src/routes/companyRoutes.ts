import express from 'express';
import { createCompanyClient, findAllCompanyClients } from '../modules/client/controllers/companyclient.controller';

const router = express.Router();
router.post('/', createCompanyClient);
router.get('/', findAllCompanyClients);
// router.put('/:id', updateCompanyClient)
// router.delete('/:id', deleteCompanyClient);


export default router;