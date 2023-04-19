import express from 'express';
import { CMSClient } from '../clients/cms_client';
import { AudioController } from '../controllers/audiosController';

const client = new CMSClient()
const controller = new AudioController(client)

const audioRouter = express.Router();

audioRouter.get('/', controller.getAudios.bind(controller))
.get('/:id', controller.getAudio.bind(controller))
.delete('/:id', controller.deleteAudio.bind(controller))

export default audioRouter
 