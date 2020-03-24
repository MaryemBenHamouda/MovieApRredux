import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { EditMovie, AddMovie } from "../actions/Actions";
import { connect } from "react-redux";

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: this.props.editMode ? this.props.movieEdit.title : "",
      year: this.props.editMode ? this.props.movieEdit.year : "",
      rating: this.props.editMode ? this.props.movieEdit.rating : "",
      image: this.props.editMode ? this.props.movieEdit.image : ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addToEdit = () => {
    if (this.props.editMode) {
      this.props.editMovie(this.props.movieEdit.id, this.state);
      this.setState({ show: false });
    } else {
      this.props.addMovie({ ...this.state, id: uuidv4() });
      this.setState({ show: false });
    }
  };

  render() {
    return (
      <div>
        <Button variant="success" onClick={this.handleShow}>
          {this.props.editMode ? "Edit" : "Add"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Edit & Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  value={this.state.title}
                  name="title"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Image:</label>
                <input
                  type="text"
                  value={this.state.image}
                  name="image"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Rating:</label>
                <input
                  type="text"
                  value={this.state.rating}
                  name="rating"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Year:</label>
                <input
                  type="text"
                  value={this.state.year}
                  name="year"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addToEdit}>
              {this.props.editMode ? "Edit" : "Add Movie"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editMovie: (id, updatemovie) => dispatch(EditMovie(id, updatemovie)),
    addMovie: newmovie => dispatch(AddMovie(newmovie))
  };
};
export default connect(null, mapDispatchToProps)(EditModal);
