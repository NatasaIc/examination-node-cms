import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";
import { Television } from "../models/television";

export class TelevisionController {
    private client: CMSClient
    constructor(client: CMSClient) {
        this.client = client
    }

    public async getTelevisions(req: Request, res: Response) {
        const data = await this.client.getTelevisions()
        res.send(data.data)
    }

    public async getTelevision(req: Request, res: Response) {
        const id = +req.params.id
        const data = await this.client.getTelevision(id)
        res.send(data)
    }

    public async createTelevision(req: Request, res: Response) {
        const televisionData: Television = req.body
        const data: Television = await this.client.createTelevision(televisionData)
        res.send(data)
    }

    public async updateTelevision(req: Request, res: Response) {
        const id: number = +req.params.id
        const televisionData: Television = req.body
        const data: Television = await this.client.updateTelevision(id, televisionData)
        res.send(data)
    }

    public async deleteTelevision(req: Request, res: Response) {
        const id = +req.params.id
        try {
            await this.client.deleteTelevision(id)
            res.sendSatus(200)
        } catch (error) {
            res.sendSatus(500)
        }
    }
}