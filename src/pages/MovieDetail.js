import React, { Component } from "react";
import PropTypes from "prop-types";

import MoviesService from "../services/movies";

export class MovieDetail extends Component {
  constructor() {
    super();
    this.service = new MoviesService();
  }

  static propTypes = {
    id: PropTypes.string
  };

  state = {
    movie: {}
  };

  render() {
    return <p>Hello</p>;
  }
}
