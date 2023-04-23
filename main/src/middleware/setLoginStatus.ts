import { Response } from "express";
import { decodeJWT, verifyJWT } from "../utils/authUtils";

export const authorization = (req: any, res: Response, next: any) => {
    const token = req.headers.authorization;

    if (token && verifyJWT(token)) {
        const tokenData = decodeJWT(token)
        req.user = tokenData;
        req.user = { isLoggedIn: true }
    } else {
        req.user = { isLoggedIn: false }
    }
    next()
}
