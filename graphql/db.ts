import axios from "axios";
const API_URL = "https://yts.mx/api/v2/list_movies.json";



export const getMovies = async ( rating: any, limit: any) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get(API_URL, {
    params: {
      limit,
      minimum_rating: rating

    }
  });
  return movies
}

// export const getMovies = (rating: any, limit: any) => {
//   let REGUEST_URL = API_URL
//   if (limit > 0) {
//     REGUEST_URL += `limit=${limit}`
//   }
//   if (rating > 0) {
//     REGUEST_URL += `&minimum_rating=${rating}`  // &는 url 뒤에 붙는 and 같은느낌
//   }
 

  
//   return axios.get(REGUEST_URL)
//     .then(res => {
//     console.log(res.data.data)
//     return res.data.data.movies
//   }).catch(error => {
//     console.log(error)
//   }) 
// }


