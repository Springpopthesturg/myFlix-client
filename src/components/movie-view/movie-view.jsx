import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import "./movie-view.scss";

export class MovieView extends React.Component {
  /*   keypressCallback(event) {
        console.log(event.key);
    } */

  componentDidMount() {
    document.addEventListener("keypress", (event) => {
      console.log(event.key);
    });
  }

  render() {
    const { movie, onBackClick } = this.props;
    return (
      <Row className="justify-content-md-center">
        <Col xs={12} md={8} className="justify-content-md-center">
          <Card border="warning" style={{ width: "25rem" }}>
            <Card.Img
              crossOrigin="https://imgur.com"
              variant="top"
              src={movie.ImagePath}
            />

            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Link to={`/directors/${movie.Director.Name}`}>
                <Button variant="outline-danger">Director</Button>
              </Link>{" "}
              <Link to={`/genres/${movie.Genre.Name}`}>
                <Button variant="outline-danger">Genre</Button>
              </Link>
            </Card.Body>
          </Card>
          <Button
            variant="warning"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
        </Col>
      </Row>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
    }),
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};