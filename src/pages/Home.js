import React, { Component } from "react";

import { Title } from "../elements/Title";
import { SearchForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";

export class Home extends Component {
  state = {
    results: [],
    usedSearch: false
  };

  _handleResults = results => {
    this.setState({
      results,
      usedSearch: true
    });
  };

  _renderResults = () => {
    return this.state.results.length === 0 ? (
      <p>No results</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  };

  render() {
    return (
      <>
        <Title>Search Movies</Title>
        <div className="searchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>

        {this.state.usedSearch ? this._renderResults() : null}
      </>
    );
  }
}
