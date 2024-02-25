import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogOutBtn from '../Button/LogoutButton';
import NoAuthItem from '../AuthItem/NoAuthItem'
import { Link } from 'react-router-dom';
import AuthItem from '../AuthItem/AuthItem';
import Button from "react-bootstrap/Button";

function MyNavBar() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">Empleo Pro</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="me-auto" href="/">Home</Nav.Link>
              <Nav.Link href="/">Vacantes</Nav.Link>
              <Nav.Link href="/misVacantes">Mis Vacantes</Nav.Link>
              <Nav.Link href="/crearVacante">CrearVacante</Nav.Link>
              <Nav.Link href="/misSolicitudes">Mis solicitudes</Nav.Link>
              <Nav.Link href="/profile">Mi Perfil</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <AuthItem>
              <Navbar.Text className='mx-3'>
                Signed in as: {localStorage.getItem('userName')}
              </Navbar.Text>
              </AuthItem>
              <Link to={`/login`}>
                <NoAuthItem>
                  <Button className="mx-1" variant="success">Iniciar Sesión</Button>
                </NoAuthItem>
              </Link>
              <Link to={`/register`}>
                <NoAuthItem>
                  <Button className="mx-1" variant="success">Regístrate</Button>
                </NoAuthItem>
              </Link>
              <AuthItem>
                <LogOutBtn ></LogOutBtn>
              </AuthItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
}

export default MyNavBar;