import Table from "react-bootstrap/esm/Table";
import React, { useState, useEffect } from 'react';



const  TablaVacantesCanceladas  = ({vacantes, categorias}) => {
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
          </tr>
        </thead>
        <tbody>
          {vacantes.filter((vacante)=> vacante.estatus=="CANCELADA").map((vacante) => {

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
              </tr>
            )
          })}
        </tbody>
      </Table>
  
    );
  }
  
  export default TablaVacantesCanceladas;