import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'Please The title field is required']
    },
    Year: {
        type: String,
        required: [true, 'Please The year field is required']
    },
    Rated: {
        type: String,
        required: [true, 'Please The rated field is required']
    },
    Released: {
        type: String,
        required: [true, 'Please The release field is required']
    },
    Runtime: {
        type: String,
        required: [true, 'Please The runtime field is required']
    },
    Genre: {
        type: String,
        required: [true, 'Please The genre field is required']
    },
    Director: {
        type: String,
        required: [true, 'Please The director field is required']
    },
    Writer: {
        type: String,
        required: [true, 'Please The writer field is required']
    },
    Actors: {
        type: String,
        required: [true, 'Please The Actors field is required']
    },
    Plot: {
        type: String,
        required: [true, 'Please The plot field is required']
    },
    Language: {
        type: String,
        required: [true, 'Please The language field is required']
    },
    Country: {
        type: String,
        required: [true, 'Please The country field is required']
    },
    Awards: {
        type: String,
        required: [true, 'Please The Awards field is required']
    },
    Type: {
        type: String,
        required: [true, 'Please The type field is required']
    }
})

const Movie = mongoose.model('movies', movieSchema)
export default Movie