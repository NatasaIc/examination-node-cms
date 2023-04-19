import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";
import { Audio } from "../models/audio";

export class AudioController {
    private client: CMSClient
    constructor(client: CMSClient) {
        this.client = client
    }

    public async getAudios(req: Request, res: Response) {
        const data = await this.client.getAudios()
        res.send(data)
    }

    public async getAudio(req: Request, res: Response) {
        const id = +req.params.id
        const data = await this.client.getAudio(id)
        res.send(data)
    }

    public async createAudio(req: Request, res: Response) {
        const audioData: Audio = req.body
        const data: Audio = await this.client.createAudio(audioData)
        res.send(data)
    }

    public async updateAudio(req: Request, res: Response) {
        const id: number = +req.params.id
        const audioData: Audio = req.body
        const data: Audio = await this.client.updateAudio(id, audioData)
        res.send(data)
    }

    public async deleteAudio(req: Request, res: Response) {
        const id = +req.params.id
        try {
            await this.client.deleteAudio(id)
            res.sendSatus(200)
        } catch (error) {
            res.sendSatus(500)
        }
    }

}