import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

export class DirectorView extends React.Component {
  render() {
    const { director, movie, onBackClick } = this.props;

    return (
      <Container>
        <Row className="director-view">
          <Col>
            <Card border="warning" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>{director.Name}</Card.Title>
                <Card.Text>{director.Bio}</Card.Text>
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

DirectorView.propTypes = {
  movie: PropTypes.shape({
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
    }).isRequired,
  }),
};