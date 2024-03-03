import Table from "react-bootstrap/esm/Table";
import { Form, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

const TablaSolicitudesPorVacante = ({id}) => {
    const [solicitudes, setSolicitudes] = useState([ {
        comentarios : ""
    }
    ]);

  useEffect(() => {
    fetchSolicitudes();
  }, []);

  const fetchSolicitudes = async () => {
    try {
      const response = await fetch('http://localhost:8084/solicitudes/porVacante/' +id, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem('token')
        }
      });
      const data = await response.json();
      setSolicitudes(data);
    } catch (error) {
      console.error('Error fetching solicitudes:', error);
    }
  };


    const handleSubmit = async (index) => {

        const response = await fetch('http://localhost:8084/' +  index, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),

            },
            body: JSON.stringify(solicitudes[index].comentarios)
        });
    };

    return (
        <Table striped bordered hover variant="dark" className='m-2'>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Usuario</th>
                    <th>Archivo CV </th>
                    <th>Estado</th>
                    <th>Comentario</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {solicitudes.map((solicitud, index) => {
                    return (
                        <tr key={index}>
                            <td>{solicitud.fecha}</td>
                            <td>{solicitud.nombre}</td>
                            <td>{solicitud.archivo}</td>
                            <td>{solicitud.estado}</td>
                            <td>
                           <textarea key={solicitud.idSolicitud} value={solicitud.comentarios}  /* onChange={(e) => setSolicitudes(((prevState) => {prevState[index].comentarios = e.target.value}))} */ />
                           {/* <Button type="button" onClick={() => handleSubmit(index)}>Guardar</Button> */}
                               
                            </td>
                            <td>
                                <ButtonGroup>
                                    <Button className="mx-1" variant="success">Adjudicar</Button>
                                    <Button className="mx-1" variant="danger">Descartar</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>

    );
}

export default TablaSolicitudesPorVacante;