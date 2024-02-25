import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import MyNavBar from '../../components/NavBar/MyNavBar';
import AuthItem from '../../components/AuthItem/AuthItem';
import Button from "react-bootstrap/Button";
import NoAuthItem from '../../components/AuthItem/NoAuthItem';
import { Link } from 'react-router-dom';


const DetalleVacante = () => {
  let { id } = useParams();
  const [vacante, setVacante] = useState([]);
  const [comentario, setComentario] = useState([]);

  useEffect(() => {
    fetchVacante();
  }, []);

  const fetchVacante = async () => {
    try {
      const response = await fetch("http://localhost:8084/vacantes/verDetalle/" + id);
      const data = await response.json();
      setVacante(data);
    } catch (error) {
      console.error('Error fetching vacantes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaSolicitud={archivo:"miCv.pdf", comentario, estado:0, fecha:Date.now(), vacante};
    const response = await fetch('http://localhost:8084/solicitudes/alta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ localStorage.getItem('token')
      },
      body: JSON.stringify(nuevaSolicitud)
    });

    if (response.ok) {
      window.location.href = '/';
    } else {
      // Maneja el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

  return (
    <div className="detalleVacante ">

      <header>
        <MyNavBar></MyNavBar>
      </header>
      <main className='container '>
        <div className='bg-light rounded p-2'>
          <h1>{vacante.nombre}</h1>
          <div>
            <span><p>Publicada:{vacante.fecha} ESTADO:{vacante.estatus}</p></span>
          </div>

          <p>{vacante.descripcion}</p>
          <p>{vacante.detalles}</p>
          <p>Salario:{vacante.salario}</p>

          <Form onSubmit={handleSubmit} className='w-75'>
            <Form.Group className='mb-2'>
              <AuthItem><Form.Label>Dejenos un breve comentario de ¿por qué es la persona indicada para este puesto?</Form.Label></AuthItem>
              <AuthItem><Form.Control as="textarea" value={comentario} onChange={(e) => setComentario(e.target.value)} id="comentario" rows={3} /></AuthItem>
            </Form.Group>
            <AuthItem><Button type="submit" variant="success">Solicitar Vacante</Button></AuthItem>
          </Form>

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
        </div>
      </main>
    </div>
  );
}

export default DetalleVacante;
