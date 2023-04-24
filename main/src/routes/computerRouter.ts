import express from 'express';
import { forceAuthorize } from '../middleware/forceAuthorize';
import { createNewComputer, editComputer, getAllComputers, getOneComputer, removeComputer } from '../controllers/computerController';



const computerRouter = express.Router();

computerRouter
.get('/', getAllComputers)
.get('/:id', getOneComputer)
.post('/', forceAuthorize, createNewComputer)
.put('/:id', forceAuthorize, editComputer)
.delete('/:id', forceAuthorize, removeComputer)

export default computerRouter
 