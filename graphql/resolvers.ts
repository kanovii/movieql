
import {getMovies, getById, addMovie } from "./db";


const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_: any, { id }: any) => getById(id)
  },
  Mutation: {
    addMovie: (_: any, { title, score }: any) => addMovie(title, score)
  }
}


export default resolvers;