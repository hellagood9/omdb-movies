import axios from "axios";

export default class SearchService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://www.omdbapi.com/?apikey=" + process.env.REACT_APP_OMDB_API_KEY + "&"
    });
  }

  getMovies = async searchTerm => {
    const movies = await this.service.get(`&s=${searchTerm}`);
    return movies.data;
  };

  getMovie = async movieId => {
    const movie = await this.service.get(`&i=${movieId}`);
    return movie.data;
  };
}
