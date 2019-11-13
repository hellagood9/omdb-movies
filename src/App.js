import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import { Title } from "./elements/Title";
import { SearchForm } from "./components/SearchForm";

class App extends Component {

  state = {
    results: []
  }

  _handleResults = results => {
    this.setState({
      results
    })
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="searchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
      </div>
    );
  }
}

export default App;
