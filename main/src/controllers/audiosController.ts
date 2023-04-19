import { Request, Response } from 'express';
import { CMSClient } from "../clients/cms_client";

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