import React, { Component } from "react";
import PropTypes from "prop-types";

import MoviesService from "../services/movies";

import { ButtonBackToHome } from "../elements/ButtonBackToHome";

export class MovieDetail extends Component {
  constructor() {
    super();
    this.service = new MoviesService();
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  };

  state = {
    movie: {}
  };

  render() {
    const {
      Title,
      Year,
      Runtime,
      Genre,
      Director,
      Plot,
      Poster,
      Actors,
      Country,
      Awards,
      Type,
      Ratings
    } = this.state.movie;

    return (
      <>
        <ButtonBackToHome />
        <div className="card-image">
          <figure className="image">
            <img src={Poster} alt={Title} />
          </figure>
        </div>
        <h1 className="title">{Title}</h1>
        <p>
          <span>{Type}</span> <span>{Country}</span>
        </p>
        <p>
          <span>{Year}</span> <span>{Runtime}</span>
        </p>
        <p>
          <span>{Genre}</span>
        </p>

        <p>{Director}</p>
        <p>{Actors}</p>

        {Awards ? <p>{Awards}</p> : null}

        {Plot}
        <ul>
          {Ratings
            ? Ratings.map(rating => (
                <li key={rating.Source}>
                  {rating.Source} {rating.Value}
                </li>
              ))
            : null}
        </ul>
      </>
    );
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const movie = await this.service.getMovie(id);
    this.setState({ movie });
  }
}
