import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

class Description extends Component {
  state = {
    movie: {
      title: "",
      rating: 1,
      year: "",
      image: "",
      description: ""
    }
  };
  UNSAFE_componentWillMount() {
    this.setState({
      movie: this.props.movies.filter(
        el => el.id === this.props.match.params.id
      )[0]
    });
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.state.movie.image} />
        <Card.Body>
          <Card.Title>{this.state.movie.title}</Card.Title>
          <Card.Text>{this.state.movie.year}</Card.Text>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.movie.rating}
          />
          <p>{this.state.movie.description}</p>
          <Link to="/">
            <Button variant="light">Home</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.MoviesReducer.movies
  };
};

export default connect(mapStateToProps)(Description);
