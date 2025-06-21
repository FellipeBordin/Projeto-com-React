import { api } from "./api";

export async function getMovie() {
    const {
        data: { results }
  } = await api.get('/movie/popular')

  return results[0]

}


export async function getPopularMovies() {
  try {
    const { data: { results } } = await api.get('/movie/popular');
    return results;
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    return [];
  }
}




export async function getTopMovies() {
    const {
        data: { results }
  } = await api.get('movie/top_rated')

  return results

}



export async function getTopSeries() {
    const {
        data: { results }
  } = await api.get('tv/top_rated')

  return results

}


 export async function getPopularSeries() {
            const {
                data: { results } }
                = await api.get('tv/popular') 

                return results
}


 export async function getTopPeople() {
            const {
                data: { results } }
                = await api.get('person/popular')
                
                return results
}
// Busca um filme pelo ID

export async function getMovieVideos(movieId) {
  const { data } = await api.get(`/movie/${movieId}/videos`);
  return data.results.filter(video => video.site === "YouTube");
}




    export  async function getMovieCredits(movieId) {
     
    const {data }= await api.get(`/movie/${movieId}/credits`);

       return data.cast
    
    }

    export  async function getMovieSimilar(movieId) {
     
    const {
        data: {results}
     } = await api.get(`/movie/${movieId}/similar`);

       return results
    
    }


    export  async function getMovieById(movieId) {
     
    const {data} = await api.get(`/movie/${movieId}`);

       return data
    
    }
