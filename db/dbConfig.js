import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.URI

const connect = async (req, res) => {
    try {
        const connectDB = await mongoose.connect(URI)
        console.log(`Database Connected Successfully ${connectDB.connection.host}:${connectDB.connection.port}/${connectDB.connection.name}`);
    } catch (error) {
        throw new Error('Database connection Failed')
    }

}

export default connect