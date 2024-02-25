import VacantesList from "../../components/Listados/VacantesList";
import React, { useState, useEffect } from 'react';
import MyNavBar from "../../components/NavBar/MyNavBar";


const Home = () => {
  
  const [vacantes, setVacantes] = useState([]);
  const [selectedVacante, setSelectedVacante] = useState(null);

  useEffect(() => {
    fetchVacantes();
  }, []);

  const fetchVacantes = async () => {
    try {
      const response = await fetch('http://localhost:8084/vacantes/');
      const data = await response.json();
      setVacantes(data);
    } catch (error) {
      console.error('Error fetching vacantes:', error);
    }
  };

  return (
    <div className="Home">
    
      <header>
        <MyNavBar></MyNavBar>
      </header>
      <main>
        <div>
          <VacantesList vacantes={vacantes}></VacantesList>
        </div>
      </main>
    </div>
  );
}

export default Home;
