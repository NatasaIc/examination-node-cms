import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";
import { Computer } from "../models/computer";

export class ComputerController {
    private client: CMSClient
    constructor(client: CMSClient) {
        this.client = client
    }

    public async getComputers(req: Request, res: Response) {
        const data = await this.client.getComputers()
        res.send(data.data)
    }

    public async getComputer(req: Request, res: Response) {
        const id = +req.params.id
        const data = await this.client.getComputer(id)
        res.send(data)
    }

    public async createComputer(req: Request, res: Response) {
        const computerData: Computer = req.body
        const data: Computer = await this.client.createComputer(computerData)
        res.send(data)
    }

    public async updateComputer(req: Request, res: Response) {
        const id: number = +req.params.id
        const computerData: Computer = req.body
        const data: Computer = await this.client.updateComputer(id, computerData)
        res.send(data)
    }

    public async deleteComputer(req: Request, res: Response) {
        const id = +req.params.id
        try {
            await this.client.deleteComputer(id)
            res.sendSatus(200)
        } catch (error) {
            res.sendSatus(500)
        }
    }
}