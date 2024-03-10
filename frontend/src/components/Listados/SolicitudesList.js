import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SolicitudesList({ solicitudes }) {

  const cancelarSubmit = async (index) => {

    const response = await fetch('http://' + window.location.hostname + ':8084/solicitudes/cancelar/'+index, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),

        },

    });
};


  return (
    <Table striped bordered hover variant="dark" className='m-2'>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Estado de la solicitud</th>
          <th>Nombre de la vacante </th>
          <th>Estado de la vacante</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {solicitudes.map((solicitud) => {
          let estadoSolicitud = "";
          if (solicitud.estado === 0) {
            estadoSolicitud = "Pendiente";
          } else if (solicitud.estado === 1) {
            estadoSolicitud = "Adjudicada";
          } else {
            estadoSolicitud = "Solicitud cancelada o descartada";
          }
          return (
            <tr key={solicitud.idSolicitud}>
              <td>{solicitud.fecha}</td>
              <td>{estadoSolicitud}</td>
              <td>{solicitud.vacante.nombre}</td>
              <td>{solicitud.vacante.estatus}</td>
              <td>
               <ButtonGroup aria-label="Basic example">
              <Link to={`/solicitudes/cancelar/${solicitud.idSolicitud}`}>
                  <Button className="mx-1" variant="danger" onClick={() => cancelarSubmit(solicitud.idSolicitud)}>Cancelar</Button>
              </Link>
              <Link to={`/detalleVacante/${solicitud.vacante.idVacante}`}>
                  <Button className="mx-1" variant="primary">Detalle Vacante</Button>
              </Link>
              </ButtonGroup> 
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>

  );
}

export default SolicitudesList;