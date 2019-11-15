import axios from "axios";

const API_KEY = "450616a0";

export default class SearchService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://www.omdbapi.com/?apikey=" + API_KEY + "&"
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
