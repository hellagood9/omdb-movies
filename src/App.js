import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import { Title } from "./elements/Title";
import { SearchForm } from "./components/SearchForm";

class App extends Component {
  state = {
    results: []
  };

  _handleResults = results => {
    this.setState({
      results
    });
  };

  _renderResults = () => {
    const { results } = this.state;
    return results.map(movie => <p>{movie.Title}</p>);
  };

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="searchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {
          this.state.results.length === 0
          ? <p>No results</p>
          : this._renderResults()
        }
      </div>
    );
  }
}

export default App;
