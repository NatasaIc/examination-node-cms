import express from 'express';
import { forceAuthorize } from '../middleware/forceAuthorize';
import { createNewAudio, editAudio, getAllAudios, getOneAudio, removeAudio } from '../controllers/audioController';


const audioRouter = express.Router();

audioRouter
.get('/', getAllAudios)
.get('/:id', getOneAudio)
.post('/', forceAuthorize, createNewAudio)
.put('/:id', forceAuthorize, editAudio)
.delete('/:id', forceAuthorize, removeAudio)

export default audioRouter
 