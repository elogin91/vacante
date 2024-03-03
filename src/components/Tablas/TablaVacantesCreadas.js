import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";


const TablaVacantesCreadas = ({ vacantes, categorias }) => {
  const cancelSubmit = async (id) => {
    const response = await fetch('http://localhost:8084/vacantes/cancelar/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    });

    if (response.ok) {
      window.location.reload();
    }
  }
  return (

    <Table striped bordered hover variant="dark" className='m-2'>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Categoria </th>
          <th>Salario</th>
          <th>Estado</th>
          <th>Destacado</th>
          <th>Descripción</th>
          <th>Detalles</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {vacantes.filter((vacante) => vacante.estatus == "CREADA").map((vacante) => {
          const id = vacante.idVacante;
          return (
            <tr key={vacante.idVacante}>
              <td>{vacante.fecha}</td>
              <td>{vacante.nombre}</td>
              <td>{categorias.find((categoria) => categoria.idCategoria === vacante.idCategoria).nombre}</td>
              <td>{vacante.salario}</td>
              <td>{vacante.estatus}</td>
              <td>{vacante.destacado ? 'Si' : 'No'}</td>
              <td>{vacante.descripcion}</td>
              <td>{vacante.detalles}</td>
              <td>
                <ButtonGroup>
                <Button className="mx-1" variant="danger" onClick={() => cancelSubmit(vacante.idVacante)} >Cancelar</Button>

                <Link to={`/modificar/${vacante.idVacante}`}>
                  <Button className="mx-1" variant="primary">Modificar</Button>
                </Link>

                <Link to={`/detalleVacante/${vacante.idVacante}`}>
                  <Button variant="warning" >Detalle</Button>
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

export default TablaVacantesCreadas;