import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState("true");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://noahs-movie-app.herokuapp.com/login`, {
        Username: username,
        Password: password,
      })
      .then((res) => {
        const data = res.data;
        props.onLoggedIn(data);
      })
      .catch((err) => {
        console.error(`
         Wrong username or password.
        ${err}`
        );
        setIsValid(false);
      });
  };

  return (
    <div className="login-form">
      {isValid ? (
        <Alert variant="danger" show={false}></Alert>
      ) : (
        
        <Alert variant="danger" show={true}>
           Incorrect Username or Password. Please try again.
        </Alert>
      )}
      
      <Form>
        <Form.Group className="info" controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group className="info" controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Button
          className="sub-button"
          variant="success"
          type="submit"
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </Form>
    </div>
  );
}