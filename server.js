import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
dotenv.config()
import movieRouter from './Routers/movieRouter.js'
import db from './db/dbConfig.js'
import multer from 'multer'
const uploads = multer({ dest: './public/uploads' })



const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use('/', movieRouter)
app.post('/api/uploads', uploads.single("image"), (req, res, next) => {
    console.log(req.file, req.body);
    res.send(req.file)
})


app.listen(port, () => {
    console.log(`server running on 127.0.0.1:${port}`);
    db()
})
