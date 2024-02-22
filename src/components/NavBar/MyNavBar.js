import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Empleo Pro</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/misVacantes">Mis vacantes</Nav.Link>
            <Nav.Link href="/misSolicitudes">Mis solicitudes</Nav.Link>
            <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
            <Nav.Link href="/register">Registrate</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>)
}

export default MyNavBar;