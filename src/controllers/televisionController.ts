import { Request, Response, json } from "express";
import { Television, TelevisonSingle } from "../models/television";
import { createTelevision, deleteTelevision, getTelevision, getTelevisions, updateTelevision } from "../service/cmsService";


    export const getAllTelevisions = async (req: Request, res: Response) => {
        let data = await getTelevisions()
        data ? res.send(data) : res.sendStatus(400);
    }

    export const getOneTelevision = async (req: Request, res: Response) => {
        let id = +req.params.id
        if (id) {
            let data = await getTelevision(id)
            data ? res.json(data.data) : res.sendStatus(500);
        } else {
            res.status(404).json({ message: `Product with id ${id} not found` })
        }
    }

    export const createNewTelevision = async (req: Request, res: Response) => {
        let newTelevision = req.body as TelevisonSingle;
        if (!newTelevision.data.product_name || !newTelevision.data.description || !newTelevision.data.manufacturer || !newTelevision.data.price || !newTelevision.data.screen_size) {
            res.send(400);
            return;
        } try {
            await createTelevision(newTelevision);
            res.sendStatus(201);
        } catch (e) {
            res.status(500)
        }
    }

    export const editTelevision = async (req: Request, res: Response) => {
        let id = +req.params.id
        let updatedTelevision = req.body as TelevisonSingle;
        if (updatedTelevision.data.id !== id) {
            res.status(400).json({ message: `Product ID in request body (${updatedTelevision.data.id}) does not match product ID in URL (${id})` })
            return;
        } try {
            await updateTelevision(id, updatedTelevision)
            res.json(id)
        } catch (e) {
            res.status(404).json({ message: `Product with id ${id} not found` })
        }
    }

    export const removeTelevision = async (req: Request, res: Response) => {
        const id = +req.params.id
        try {
            await deleteTelevision(id)
            res.json({ message: `Product with id ${id} deleted successfully` })
        } catch (e) {
            res.status(500).json({ message: `Product with id ${id} not found` })
        }
    }
