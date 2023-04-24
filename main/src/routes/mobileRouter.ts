import express from 'express';
import { forceAuthorize } from '../middleware/forceAuthorize';
import { createNewMobile, editMobile, getAllMobiles, getOneMobile, removeMobile } from '../controllers/mobileController';


const mobileRouter = express.Router();

mobileRouter
.get('/', getAllMobiles)
.get('/:id', getOneMobile)
.post('/', forceAuthorize, createNewMobile)
.put('/:id', forceAuthorize, editMobile)
.delete('/:id', forceAuthorize, removeMobile)

export default mobileRouter
 