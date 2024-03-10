import VacantesList from "../../components/Listados/VacantesList";
import React, { useState, useEffect } from 'react';
import MyNavBar from "../../components/NavBar/MyNavBar";
import Form from 'react-bootstrap/Form';


const Home = () => {

  const [vacantes, setVacantes] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    try {
      const response = await fetch('http://' + window.location.hostname + ":8084/categorias/todas", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      });
      const data = await response.json();
      setCategorias(data);
    } catch (error) {
      console.error('Error fetching categoria:', error);
    }
  };


  useEffect(() => {
    fetchVacantes();
  }, []);

  const fetchVacantes = async (categoria = '') => {
    try {
      const response = await fetch('http://' + window.location.hostname + ':8084/vacantes/' + (categoria ? "buscar/"+categoria : ''));
      const data = await response.json();
      setVacantes(data);
    } catch (error) {
      console.error('Error fetching vacantes:', error);
    }
  };

  return (
    <div className="Home">

      <header className="mb-3">
        <MyNavBar></MyNavBar>
      </header>
      <main>
        <div className="d-flex justify-content-center">
          <Form.Group>
            <Form.Label>Buscar vacantes por ccategorias</Form.Label>
            <Form.Select aria-label="categoria" required defaultValue="" className="mb-3 " onChange={(e) => fetchVacantes(e.target.value)}>
              <option key='0' value="">Todas</option>
              {categorias.map((categoria) => {
                return <option key={categoria.idCategoria} value={categoria.idCategoria}>{categoria.nombre}</option>
              })}
            </Form.Select>
          </Form.Group>
        </div>
        <div>
          <VacantesList vacantes={vacantes}></VacantesList>
        </div>
      </main>
    </div>
  );
}

export default Home;
