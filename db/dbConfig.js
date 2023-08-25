import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.URI

const connect = async (req, res, next) => {
    try {
        const connectDB = await mongoose.connect(URI)
        console.log(`Database Connected Successfully ${connectDB.connection.host}:${connectDB.connection.port}/${connectDB.connection.name}`);
    } catch (error) {
        next(error)
    }

}

export default connect
