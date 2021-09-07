
let movies = [
  {
    id: 0,
    title: "star wars",
    score: 10
  },
  {
    id: 1,
    title: "star wars 2",
    score: 9
  },
  {
    id: 2,
    title: "star wars 3",
    score: 8
  },
]
export let getMovies = () => movies;

export const getById = (id: any) => {
  const filteredMovie = movies.filter((moviess) => moviess.id === id)
  return filteredMovie[0]
}

export const deleteMovie =( id: any) => {
  const cleanedMovie = movies.filter((movie) => movie.id !== id)
  if(movies.length > cleanedMovie.length) {
    movies = cleanedMovie
    return true
  } else {
    return false
  }
}
export const addMovie = ( title: string, score: number) => {

  const newMovie = {
    id: movies.length + 1,
    title,
    score
  }
  movies.push(newMovie);
  return newMovie
}
