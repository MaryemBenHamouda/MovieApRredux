import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { DeleteMovie } from "../actions/Actions";
import StarRatingComponent from "react-star-rating-component";
import EditModale from "./EditModale";
import { Link } from "react-router-dom";

const MovieItem = ({ movie, deleteMovie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.year}</Card.Text>
        <StarRatingComponent name="rate1" starCount={5} value={movie.rating} />
        <Link to={`/movie/${movie.id}`}>
          <Button variant="light">Movie Description</Button>
        </Link>

        <Button variant="danger" onClick={() => deleteMovie(movie.id)}>
          Delete
        </Button>
        <EditModale editMode={true} movieEdit={movie} />
      </Card.Body>
    </Card>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: id => dispatch(DeleteMovie(id))
  };
};
export default connect(null, mapDispatchToProps)(MovieItem);
