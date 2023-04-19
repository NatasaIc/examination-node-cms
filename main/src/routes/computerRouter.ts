import express from 'express';
import { CMSClient } from '../clients/cms_client';
import { ComputerController } from '../controllers/computerController';

const client = new CMSClient()
const controller = new ComputerController(client)

const computerRouter = express.Router();

computerRouter.get('/', controller.getComputers.bind(controller))
.get('/:id', controller.getComputer.bind(controller))
.put('/', controller.createComputer.bind(controller))
.put('/:id', controller.updateComputer.bind(controller))
.delete('/:id', controller.deleteComputer.bind(controller))

export default computerRouter