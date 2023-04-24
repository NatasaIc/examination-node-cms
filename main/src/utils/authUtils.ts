import { User } from "../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = "secret-phrase" as any;

export const hashPassword = (password: string) => {
    const hashValue = bcrypt.hashSync(password, 8)
    return hashValue
}

export const comparePassword = (password: string, hash: string) => {
    const correct = bcrypt.compareSync(password, hash)
    return correct
}

export const getJWTToken = (account: User) => {
    const userData = { userId: account.id, username: account.username }
    const accessToken = jwt.sign(userData, SECRET_KEY)
    return accessToken
}

export const verifyJWT = (token: string) => {
    return jwt.verify(token, SECRET_KEY)
}

export const decodeJWT = (token: string) => {
    return jwt.decode(token, SECRET_KEY)
}