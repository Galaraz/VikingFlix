class MovieFetcher {


 /* url da api filmes populares:  https://api.themoviedb.org/3/movie/550?api_key=5a9ac975da01e7ff2c086d9b3076541a */

 /* url da api filmes details:  https://developers.themoviedb.org/3/movies/get-movie-details */
 
    static async getAll() {
      const key = 'api_key=5a9ac975da01e7ff2c086d9b3076541a';
      try {
        const response = await fetch({`https://api.themoviedb.org/3/movie/550?api_key=5a9ac975da01e7ff2c086d9b3076541a`});
        const jsonData = await response.json();
  
        return jsonData;
      } catch (error) { 
        console.error(error);
      }
    }
  }
  
  export default MovieFetcher;