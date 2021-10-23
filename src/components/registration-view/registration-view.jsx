import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./registration-view.scss";

export function Registration(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, name, dob);
    props.onRegister(username);
  };
  return (
    <div className="registration-form">
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
        
        <Form.Group className="info" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group className="info" controlId="formName">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group className="info" controlId="formDob">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setDob(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          className="sub-button"
          variant="success"
          type="submit"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}