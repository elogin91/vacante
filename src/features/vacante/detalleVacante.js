import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import MyNavBar from '../../components/NavBar/MyNavBar';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import Guard from '../../components/Guard/Guard';
import TablaSolicitudesPorVacante from '../../components/Tablas/TablaSolicitudesPorVacante';


const DetalleVacante = () => {
  let { id } = useParams();
  const [vacante, setVacante] = useState([]);
  const [archivo, setArchivo] = useState([]);

  useEffect(() => {
    fetchVacante();
  }, []);

  const fetchVacante = async () => {
    try {
      const response = await fetch("http://localhost:8084/public/verDetalle/" + id);
      const data = await response.json();
      setVacante(data);
    } catch (error) {
      console.error('Error fetching vacantes:', error);
    }
  };

  const submitNuevaSolicitud = async (e) => {
    e.preventDefault();

    const nuevaSolicitud = { archivo, comentario:"NA", estado: 0, fecha: Date.now(), vacante };
    const response = await fetch('http://localhost:8084/solicitudes/alta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(nuevaSolicitud)
    });

    if (response.ok) {
      window.location.href = '/';
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

          <Guard requiredRoles={["Usuario"]}>
            <Form onSubmit={submitNuevaSolicitud} className='w-75'>
              <Form.Group className='mb-2'>
                <Form.Label>URL de tu CV</Form.Label>
                <Form.Control type="text" required placeholder="archivo" value={archivo} onChange={(e) => setArchivo(e.target.value)} />
              </Form.Group>
              <Button type="submit" variant="success">Solicitar Vacante</Button>
            </Form>
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

          <Guard requiredRoles={["Empresa"]}>
            <TablaSolicitudesPorVacante id={id} />
          </Guard>
        </div>
      </main >
    </div >
  );
}

export default DetalleVacante;
