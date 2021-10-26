import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Figure,
  Card,
  CardGroup,
  Container,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import axios from "axios";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";

export function ProfileView({ movies, onUpdatedUserInfo }) {
  const [user, setUser] = useState("");

  const favoriteMovieList = movies.filter((movies) => {});

  const getUser = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // send a request to the server for authentication
    axios
      .post("https://my-flix-2406.herokuapp.com/login", {
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

  const removeFav = (id) => {};

  const handleUpdate = (e) => {};

  useEffect(() => {}, []);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Body>
              <UserInfo name={user.Username} email={user.Email} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={8}>
          <Card>
            <Card.Body>
              <UpdateUser
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <FavoriteMovies favoriteMovieList={favoriteMovieList} />
    </Container>
  );
}