import express from 'express';
import { createTelevision, deleteTelevision, getTelevision, getTelevisions, updateTelevision } from '../service/cmsService';
import { forceAuthorize } from '../middleware/forceAuthorize';


const televisionRouter = express.Router();

televisionRouter
.get('/', getTelevisions)
.get('/:id', getTelevision)
.post('/', forceAuthorize, createTelevision)
.put('/:id', forceAuthorize, updateTelevision)
.delete('/:id', forceAuthorize, deleteTelevision)

export default televisionRouter
 