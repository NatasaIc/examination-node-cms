import express from "express";
import audioRouter from "./routes/audioRouter";
import computerRouter from "./routes/computerRouter";
import mobileRouter from "./routes/mobileRouter";
import televisionRouter from "./routes/televisionRouter";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/audios', audioRouter)
app.use('/computers', computerRouter)
app.use('/mobiles', mobileRouter)
app.use('/televisions', televisionRouter)

app.get('/', (req: any, res: any) => {
    res.send("Hello")
})

app.listen(8008, () => {
    console.log("http://localhost:8008");
    
})