import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogOutBtn from '../Button/LogoutButton';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Guard from '../Guard/Guard';


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
              <Guard requiredRoles={["Anonymous", "Empresa", "Usuario"]}>
                <Nav.Link className="me-auto" href="/">Home</Nav.Link>
              </Guard>
              <Guard requiredRoles={["Empresa"]}>
                <Nav.Link href="/misVacantes">Modificar Vacantes</Nav.Link>
              </Guard>
              <Guard requiredRoles={["Empresa"]}>
                <Nav.Link href="/altaVacante">CrearVacante</Nav.Link>
              </Guard>
              <Guard requiredRoles={["Usuario"]}>
                <Nav.Link href="/misSolicitudes">Mis Solicitudes</Nav.Link>
              </Guard>
              <Guard requiredRoles={["Empresa", "Usuario"]}>
                <Nav.Link href="/profile" >Mi Perfil</Nav.Link>
              </Guard>
            </Nav>
            <Nav className="justify-content-end">
              <Guard requiredRoles={["Empresa", "Usuario"]}>
                <Navbar.Text className='mx-3'>
                  Signed in as: {localStorage.getItem('userName')}
                </Navbar.Text>
              </Guard>
              <Guard requiredRoles={["Anonymous"]}>
                <Link to={`/login`}>
                  <Button className="mx-1" variant="success">Iniciar Sesión</Button>
                </Link>
              </Guard>
              <Guard requiredRoles={["Anonymous"]}>
                <Link to={`/register`}>
                  <Button className="mx-1" variant="success">Regístrate</Button>
                </Link>
              </Guard>
              <Guard requiredRoles={["Empresa", "Usuario"]}>
                <LogOutBtn ></LogOutBtn>
              </Guard>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar >
    </>)
}

export default MyNavBar;