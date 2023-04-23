import { Request, Response } from "express";
import { Audio, AudioSingle } from "../models/audio";
import { getAudios, getAudio, createAudio, deleteAudio, updateAudio} from "../service/cmsService"


    export const getAllAudios = async (req: Request, res: Response) => {
        let data = await getAudios()
        data ? res.send(data) : res.sendStatus(400);
    }

    export const getOneAudio = async (req: Request, res: Response) => {
        let id = +req.params.id
        if (id) {
            let data = await getAudio(id)
            data ? res.json(data.data) : res.sendStatus(500);
        } else  {
            res.status(404).json({ message: `Product with id ${id} not found` })
        }
    }

    export const createNewAudio = async (req: Request, res: Response) => {
        let newAudio = req.body as AudioSingle;
        if (!newAudio.data.product_name || !newAudio.data.description || !newAudio.data.manufacturer || !newAudio.data.price) {
          res.send(400);
          return;   
        } try {
            await createAudio(newAudio);
            res.sendStatus(201);
        } catch (e) {
            res.status(500);
        }
    }


    export const editAudio = async (req: Request, res: Response) => {
        let id = +req.params.id
        let updatedAudio = req.body as AudioSingle;
        if (updatedAudio.data.id !== id) {
            res.status(400).json({ message: `Product ID in request body (${updatedAudio.data.id}) does not match product ID in URL (${id})` });
            return;
        } try {
            await updateAudio(id, updatedAudio)
            res.json(id)
        } catch (e) {
            res.status(404).json({ message: `Product with id ${id} not found` })
        }
    }

    export const removeAudio = async (req: Request, res: Response) => {
        const id = +req.params.id
        try {
            await deleteAudio(id)
            res.json({ message: `Product with id ${id} deleted successfully` })
        } catch (e) {
            res.status(500).json({ message: `Product with id ${id} not found` })
        }
    }
