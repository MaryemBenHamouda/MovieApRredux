import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        {this.props.data.movies
          .filter(
            el =>
              el.rating >= this.props.data.rating &&
              el.title
                .toUpperCase()
                .includes(this.props.data.keyword.trim().toUpperCase())
          )
          .map(el => (
            <MovieItem movie={el} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.MoviesReducer
  };
};
export default connect(mapStateToProps)(MovieList);
