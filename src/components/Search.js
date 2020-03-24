import React, { Component } from "react";
import { SearchRating, SearchTitle } from "../actions/Actions";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
class Search extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
      text: ""
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue }, () =>
      this.props.searchRating(this.state.rating)
    );
  }
  handleChange = e => {
    this.setState(
      {
        text: e.target.value
      },
      () => this.props.searchTitle(this.state.text)
    );
  };

  render() {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={this.handleChange}
        />
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchRating: rating => dispatch(SearchRating(rating)),
    searchTitle: keyword => dispatch(SearchTitle(keyword))
  };
};
export default connect(null, mapDispatchToProps)(Search);
