import Table from "react-bootstrap/esm/Table";
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

const TablaSolicitudesPorVacante = ({id}) => {
    const [solicitudes, setSolicitudes] = useState([ {
        //comentarios : ""
    }
    ]);

    //const [newComentario, setNewComentario] =useState('');

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


    const adjudicarSubmit = async (index) => {

        const response = await fetch('http://localhost:8084/solicitudes/adjudicar/'+index, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),

            },

        });
        if (response.ok) {
            window.location.reload();
          }
    };

    const cancelarSubmit = async (index) => {

        const response = await fetch('http://localhost:8084/solicitudes/cancelar/'+index, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),

            },

        });
        if (response.ok) {
            fetchSolicitudes();
          }
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
                    let estadoSolicitud = "";
                    if (solicitud.estado === 0) {
                      estadoSolicitud = "Pendiente";
                    } else if (solicitud.estado === 1) {
                      estadoSolicitud = "Adjudicada";
                    } else {
                      estadoSolicitud = "Descartado";
                    }
                    return (
                        <tr key={index}>
                            <td>{solicitud.fecha}</td>
                            <td>{solicitud.nombre}</td>
                            <td>{solicitud.archivo}</td>
                            <td>{estadoSolicitud}</td>
                            <td>
                           <textarea key={solicitud.idSolicitud} value={solicitud.comentarios}  /* onChange={(e) => setSolicitudes(((prevState) => {prevState[index].comentarios = e.target.value}))} */ />
                           {/* <Button type="button" onClick={() => handleSubmit(index)}>Guardar</Button> */}
                               
                            </td>
                            <td>
                                <ButtonGroup>
                                    <Button className="mx-1" variant="success" onClick={() => adjudicarSubmit(solicitud.idSolicitud)}>Adjudicar</Button>
                                    <Button className="mx-1" variant="danger"onClick={() => cancelarSubmit(solicitud.idSolicitud)}>Descartar</Button>
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