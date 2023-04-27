import { Request, Response } from "express";
import { Computer, ComputerSingle } from "../models/computer";
import { createComputer, deleteComputer, getComputer, getComputers, updateAudio, updateComputer } from "../service/cmsService";

    export const getAllComputers = async (req: Request, res: Response) => {
        let data = await getComputers()
        data ? res.send(data) : res.sendStatus(400);
    }

    export const getOneComputer = async (req: Request, res: Response) => {
        let id = +req.params.id
        if (id) {
            let data = await getComputer(id)
            data ? res.json(data.data) : res.sendStatus(500);
        } else {
            res.status(404).json({ message: `Product with id ${id} not found` })
        }
    }

    export const createNewComputer = async (req: Request, res: Response) => {
        let newComputer = req.body as ComputerSingle;
        if (!newComputer.data.product_name || !newComputer.data.description || !newComputer.data.manufacturer || !newComputer.data.price || !newComputer.data.processor) {
            res.send(400);
            return;
        } try {
            await createComputer(newComputer);
            res.sendStatus(201);
        } catch (e) {
            res.status(500);
        }
        
    }

    export const editComputer = async (req: Request, res: Response) => {
        let id = +req.params.id
        let updatedComputer = req.body as ComputerSingle;
        if (updatedComputer.data.id !== id) {
            res.status(400).json({ message: `Product ID in request body (${updatedComputer.data.id}) does not match product ID in URL (${id})` })
            return;
        } try {
            await updateComputer(id, updatedComputer)
            res.json(id)
        } catch (e) {
            res.status(404).json({ message: `Product with id ${id} not found` })
        }
    }

    export const removeComputer = async (req: Request, res: Response) => {
        const id = +req.params.id
        try {
            await deleteComputer(id)
            res.json({ message: `Product with id ${id} deleted successfully` })
        } catch (e) {
            res.status(500).json({ message: `Product with id ${id} not found` })
        }
    }
