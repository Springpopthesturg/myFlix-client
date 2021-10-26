import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

export class GenreView extends React.Component {
  render() {
    const { onBackClick, genre } = this.props;
    /* const directorMovies = movie.filter(
      (m) => m.director.name === director.name
    ); */

    return (
      <Container>
        <Row className="genre-view">
          <Col>
            <Card border="warning" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>{genre.Name}</Card.Title>
                <Card.Text>{genre.Description}</Card.Text>
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
      </Container>
    );
  }
}

GenreView.propTypes = {
  movie: PropTypes.shape({
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
    }).isRequired,
  }),
};