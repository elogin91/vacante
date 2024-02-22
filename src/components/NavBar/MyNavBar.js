import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Empleo Pro</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Mis vacantes</Nav.Link>
            <Nav.Link href="#pricing">Mis solicitudes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>)
}

export default MyNavBar;