import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  Form,
  Button,
  Row,
  Col,
  Card,
  CardGroup,
  Container,
} from "react-bootstrap";

import axios from "axios";
import { Link } from "react-router-dom";

import { RegistrationView } from "/registration-view/registration-view";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // send a request to the server for authentication
    axios
      .post("https://noahs-movie-app.herokuapp.com.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("no such user");
      });
  };

  return (
    <Container className="login-view">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Please Login</Card.Title>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>{" "}
                  <p>New User? Register here</p>
                  <Link to="/register">
                    <Button variant="primary" type="button">
                      Register
                    </Button>
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }).isRequired,
  onLoggedIn: PropTypes.func.isRequired,
};