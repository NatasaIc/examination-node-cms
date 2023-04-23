import express from 'express';
import { createMobile, deleteMobile, getMobile, getMobiles, updateMobile } from '../service/cmsService';
import { forceAuthorize } from '../middleware/forceAuthorize';


const mobileRouter = express.Router();

mobileRouter
.get('/', getMobiles)
.get('/:id', getMobile)
.post('/', forceAuthorize, createMobile)
.put('/:id', forceAuthorize, updateMobile)
.delete('/:id', forceAuthorize, deleteMobile)

export default mobileRouter
 