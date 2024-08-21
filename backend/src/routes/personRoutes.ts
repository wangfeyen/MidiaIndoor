import express from 'express';
import { findAllPerson } from '../controllers/personController';
import { createPersonClient } from '../modules/client/controllers/personclient.controller';

const router = express.Router();

router.post('/',createPersonClient)
router.get('/', findAllPerson);

export default router;