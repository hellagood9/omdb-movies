import axios from "axios";

const API_KEY = "450616a0";

export default class SearchService {
  constructor() {
    this.service = axios.create({
      baseURL: `http://www.omdbapi.com/?apikey=${API_KEY}&s=`
    });
  }

  getMovies = async searchTerm => {
    const movieSearchResult = await this.service.get(`${searchTerm}`);
    return movieSearchResult.data;
  };

  getMovie = async movieId => {
    const movie = await this.service.get(``)
  }
}
