import express, { Request, Response } from "express";
import audioRouter from "./routes/audioRouter";
import computerRouter from "./routes/computerRouter";
import mobileRouter from "./routes/mobileRouter";
import televisionRouter from "./routes/televisionRouter";
import { adminRouter } from "./routes/adminRouter";
import { authorization } from "./middleware/setLoginStatus";

const app = express()
const PORT = 8008;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(authorization);
app.use('/admin', adminRouter);
app.use('/audios', audioRouter)
app.use('/computers', computerRouter)
app.use('/mobiles', mobileRouter)
app.use('/televisions', televisionRouter)

app.get('/', (req: any, res:Response) => {
    res.send(req.user)
})

app.listen(PORT, () => {
console.log(`http://localhost:${PORT}`);
})