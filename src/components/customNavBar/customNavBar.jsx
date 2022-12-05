import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#favourites">Favourites</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default CustomNavBar;
