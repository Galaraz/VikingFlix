class MovieFetcher {
    static async getAll() {
      try {
        const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const jsonData = await response.json();
  
        return jsonData;
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  export default MovieFetcher;