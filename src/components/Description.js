import React,{Component} from "react";
import { connect } from "react-redux";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

class Description extends Component {
    state = {  }
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
                <Card.Img variant="top" src={movie.image} />
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.year}</Card.Text>
                <StarRatingComponent name="rate1" starCount={5} value={movie.rating} />
                <Link to="/">
                    <Button variant="light">Home</Button>
                </Link>

                
                </Card.Body>
            </Card>
            );
        };
        );
    }
}
 
export default ;