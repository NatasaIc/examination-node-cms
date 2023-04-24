import express from 'express';
import { getAudio, getAudios, createAudio, updateAudio, deleteAudio } from '../service/cmsService';
import { forceAuthorize } from '../middleware/forceAuthorize';
import { createNewAudio, editAudio, removeAudio } from '../controllers/audioController';


const audioRouter = express.Router();

audioRouter
.get('/', getAudios)
.get('/:id', getAudio)
.post('/', forceAuthorize, createNewAudio)
.put('/:id', forceAuthorize, editAudio)
.delete('/:id', forceAuthorize, removeAudio)

export default audioRouter
 