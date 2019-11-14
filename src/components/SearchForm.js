import React, { Component } from "react";

import MoviesService from "../services/movies"

export class SearchForm extends Component {
  constructor() {
    super()
    this.service = new MoviesService()
  }

  state = {
    inputMovie: ""
  };

  _handleChange = e => {
    this.setState({
      inputMovie: e.target.value
    });
  };

  _handleSubmit = async e => {
    e.preventDefault()
    const movie = await this.service.getMovies(this.state.inputMovie)
    const { Search = [] } = movie

    this.props.onResults(Search)
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this._handleChange}
              className="input"
              type="text"
              placeholder="Search a Movie"
            />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
