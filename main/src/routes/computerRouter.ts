import express from 'express';
import { createComputer, deleteComputer, getComputer, getComputers, updateComputer } from '../service/cmsService';
import { forceAuthorize } from '../middleware/forceAuthorize';


const computerRouter = express.Router();

computerRouter
.get('/', getComputers)
.get('/:id', getComputer)
.post('/', forceAuthorize, createComputer)
.put('/:id', forceAuthorize, updateComputer)
.delete('/:id', forceAuthorize, deleteComputer)

export default computerRouter
 