import { Response } from "express";


export const forceAuthorize = (req: any, res: Response, next: any) => {
    if (req.user.isLoggedIn) {
            next()
        } else {
            res.sendStatus(401)
        }
}