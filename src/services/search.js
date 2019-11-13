import axios from "axios"

export default class SearchService {
  constructor() {
    this.service = axios.create({
      baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&`
    })
  }
}