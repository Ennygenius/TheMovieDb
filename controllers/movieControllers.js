import Movie from '../Models/movieModels.js'



const getAllMovies = async (req, res) => {
    const movies = await Movie.find({})
    res.json({ 'movies': movies })
}


const getSingleMovie = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.json({ 'movie': movie })
    } catch (error) {
        next(error)
    }

}


const createMovie = async (req, res, next) => {
    const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Type } = req.body
    try {
        const movie = await Movie.create({
            Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Type
        })

        const saveMovie = movie.save()
        res.json({ 'movie': movie })
    } catch (error) {
        next(error)
    }

}

const updateMovie = async (req, res, next) => {
    const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Type } = req.body
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, {
            Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Type
        })
        res.json({ 'movie': movie })
    } catch (error) {
        next(error)
    }

}
const deleteMovie = async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id)
    res.json({ 'msg': movie })
}
export {
    getAllMovies as getAllMovies,
    getSingleMovie as getSingleMovie,
    createMovie as createMovie,
    updateMovie as updateMovie,
    deleteMovie as deleteMovie
}