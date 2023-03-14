import { Outlet,  } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from '../img/Carouselstyle.css';
import Footer from '../components/Footer';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Layout = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Granit Hashani</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="/services">Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Outlet />
      <Footer />

      
    </>
  );
};

export default Layout;
