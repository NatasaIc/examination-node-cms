import express from 'express';
import { CMSClient } from '../clients/cms_client';
import { MobileController } from '../controllers/mobileController';

const client = new CMSClient()
const controller = new MobileController(client)

const mobileRouter = express.Router();

mobileRouter.get('/', controller.getMobiles.bind(controller))
.get('/:id', controller.getMobile.bind(controller))
.put('/', controller.createMobile.bind(controller))
.put('/:id', controller.updateMobile.bind(controller))
.delete('/:id', controller.deleteMobile.bind(controller))

export default mobileRouter