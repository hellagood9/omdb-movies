import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

// import { Title } from "./elements/Title";

// import { MovieDetail } from "./pages/MovieDetail"

// import { SearchForm } from "./components/SearchForm";
// import { MoviesList } from "./components"

import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";

class App extends Component {
  render() {
    return <div className="App">
      <Home />
    </div>;
  }
}

export default App;
