import express  from "express";
import { loginAccount, registerAccount } from "../controllers/userController";

export const adminRouter = express.Router();

adminRouter.post('/register', registerAccount).post('/login', loginAccount);