import express from 'express';
import { CMSClient } from '../clients/cms_client';
import { TelevisionController } from '../controllers/televisionController

const client = new CMSClient()
const controller = new TelevisionController(client)

const televisionRouter = express.Router();

televisionRouter.get('/', controller.getTelevisions.bind(controller))
.get('/:id', controller.getTelevision.bind(controller))
.put('/', controller.createTelevision.bind(controller))
.put('/:id', controller.updateTelevision.bind(controller))
.delete('/:id', controller.deleteTelevision.bind(controller))

export default televisionRouter