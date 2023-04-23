import { Request, Response } from "express";
import { Mobile, MobileSingle } from "../models/mobile";
import { createMobile, deleteMobile, getMobile, getMobiles, updateMobile } from "../service/cmsService";



   export const getAllMobiles = async (req: Request, res: Response) =>  {
        let data = await getMobiles()
        data ? res.send(data) : res.sendStatus(400);
    }

   export const getOneMobile = async (req: Request, res: Response) => {
        let id = +req.params.id
        if (id) {
            let data = await getMobile(id) 
            data ? res.json(data) : res.sendStatus(500);
        } else {
            res.status(404).json({ message: `Product with id ${id} not found` })
        }
    }

   export const createNewMobile = async (req: Request, res: Response) => {
        const newMobile = req.body as MobileSingle;
        if (!newMobile.data.product_name || !newMobile.data.description || !newMobile.data.manufacturer || !newMobile.data.price || !newMobile.data.screen_type) {
            res.send(400);
        } try {
            await createMobile(newMobile);
            res.status(201);
        } catch (e) {
            res.status(500);
        }
    }

   export const editMobile = async (req: Request, res: Response) => {
        const id: number = +req.params.id
        const updatedMobile = req.body as MobileSingle;
        if (updatedMobile.data.id !== id) {
            res.status(400).json({ message: `Product ID in request body (${updatedMobile.data.id}) does not match product ID in URL (${id})` })
            return;
        } try {
            await updateMobile(id, updatedMobile)
            res.json(id)
        } catch (e) {
            res.status(404).json({ message: `Product with id ${id} not found` })
        }
    }

   export const removeMobile = async (req: Request, res: Response) => {
        const id = +req.params.id
        try {
            await deleteMobile(id)
            res.json({ message: `Product with id ${id} deleted successfully` })
        } catch (e) {
            res.status(500).json({ message: `Product with id ${id} not found` })
        }
    }
