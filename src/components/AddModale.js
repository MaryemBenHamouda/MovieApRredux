import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button } from "react-bootstrap";
import { AddMovie } from "../actions/Actions";
import { connect } from "react-redux";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      year: "",
      rating: 0,
      image: ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    this.props.addMovie({ ...this.state, id: uuidv4() });
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          <i class="fas fa-plus"></i>
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>ADD NEW MOVIE :D</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" onChange={this.handleChange} name="title" />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" onChange={this.handleChange} name="image" />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" onChange={this.handleChange} name="rating" />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" onChange={this.handleChange} name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.add} variant="primary">
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(AddMovie(movie))
  };
};
export default connect(null, mapDispatchToProps)(AddModal);
