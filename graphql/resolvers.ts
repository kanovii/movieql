
import {getMovies} from "./db";

const resolvers = {
  Query: {
    movies: (_: any,{rating, limit}: any) => getMovies(rating, limit),
  }
}


export default resolvers;