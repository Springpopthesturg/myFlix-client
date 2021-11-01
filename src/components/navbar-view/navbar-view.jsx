import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  }

  render() {
    const { user } = this.props;
    const movies = `/`;
    const profile = `/users/${user}`;

    if (!user) return null;

    return (
      // <Navbar bg="dark" collapseOnSelect fixed='top' expand="lg" variant="dark" >
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />

      //   <Navbar.Collapse id="responsive-navbar-nav">
      //     {/* <Nav className="ml-auto"> */}

      //       <Nav.Link  href={movies} className="link-text">
      //         Movies
      //       </Nav.Link>

      //       <Nav.Link href={profile} className="link-text">
      //         Profile
      //       </Nav.Link>

      //       <Nav.Link to={'/'} onClick={this.onLoggedOut}>
      //         Log Out
      //       </Nav.Link>

      //     {/* </Nav> */}

      //   </Navbar.Collapse>
      // </Navbar>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href={movies}>Movies</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  
    );
  }
}
export default NavBar;