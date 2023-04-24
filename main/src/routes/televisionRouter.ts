import express from 'express';
import { forceAuthorize } from '../middleware/forceAuthorize';
import { createNewTelevision, editTelevision, getAllTelevisions, getOneTelevision, removeTelevision } from '../controllers/televisionController';


const televisionRouter = express.Router();

televisionRouter
.get('/', getAllTelevisions)
.get('/:id', getOneTelevision)
.post('/', forceAuthorize, createNewTelevision)
.put('/:id', forceAuthorize, editTelevision)
.delete('/:id', forceAuthorize, removeTelevision)

export default televisionRouter
 