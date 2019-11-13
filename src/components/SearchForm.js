import React, { Component } from "react";

export class SearchForm extends Component {
  state = {
    inputMovie: ""
  };

  _handleChange = e => {
    this.setState({
      inputMovie: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.inputMovie);
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
