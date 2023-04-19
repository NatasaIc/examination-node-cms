import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";
import { Mobile } from "../models/mobile";

export class MobileController {
    private client: CMSClient
    constructor(client: CMSClient) {
        this.client = client
    }

    public async getMobiles(req: Request, res: Response) {
        const data = await this.client.getMobiles()
        res.send(data.data)
    }

    public async getMobile(req: Request, res: Response) {
        const id = +req.params.id
        const data = await this.client.getMobile(id)
        res.send(data)
    }

    public async createMobile(req: Request, res: Response) {
        const mobileData: Mobile = req.body
        const data: Mobile = await this.client.createMobile(mobileData)
        res.send(data)
    }

    public async updateMobile(req: Request, res: Response) {
        const id: number = +req.params.id
        const mobileData: Mobile = req.body
        const data: Mobile = await this.client.updateMobile(id, mobileData)
        res.send(data)
    }

    public async deleteMobile(req: Request, res: Response) {
        const id = +req.params.id
        try {
            await this.client.deleteMobile(id)
            res.sendSatus(200)
        } catch (error) {
            res.sendSatus(500)
        }
    }
}