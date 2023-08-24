import express from "express";
const router = express.Router();
import {
    getAllMovies as getAllMovies,
    getSingleMovie as getSingleMovie,
    createMovie as createMovie,
    updateMovie as updateMovie,
    deleteMovie as deleteMovie
} from '../controllers/movieControllers.js'

router.get('', getAllMovies).get('/:id', getSingleMovie).post('', createMovie).patch('/:id', updateMovie).delete('/:id', deleteMovie)



export default router