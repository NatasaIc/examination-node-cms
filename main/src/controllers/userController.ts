import express, { Response, Request }  from "express";
import { User } from "../models/user";
import { comparePassword, getJWTToken, hashPassword } from "../utils/authUtils";
import { getAccountByUsername, registerUser } from "../service/db";

export const registerAccount = (req: Request, res: Response) => {
    const newUser = req.body as User;
    const hashedPassword = hashPassword(newUser.password);
    registerUser(newUser.username, hashedPassword, (err:Error) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.sendStatus(200);
        }
    })
};

export const loginAccount = (req: Request, res: Response) => {
    const newUser = req.body as User;

    getAccountByUsername(newUser.username, (err: Error, account: any) => {
        if (err) {
            res.status(500).send(err)
        } else if (account) {
            const hashedPassword = account.hashedPassword
            const correctPassword = comparePassword(newUser.password, hashedPassword)
            if (correctPassword) {
                const jwtToken = getJWTToken(account)
                res.send(jwtToken)
            } else {
                res.sendStatus(404)
            }
        }
    })
};
