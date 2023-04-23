import express from 'express';
import { getAudio, getAudios, createAudio, updateAudio, deleteAudio } from '../service/cmsService';
import { forceAuthorize } from '../middleware/forceAuthorize';


const audioRouter = express.Router();

audioRouter
.get('/', getAudios)
.get('/:id', getAudio)
.post('/', forceAuthorize, createAudio)
.put('/:id', forceAuthorize, updateAudio)
.delete('/:id', forceAuthorize, deleteAudio)

export default audioRouter
 