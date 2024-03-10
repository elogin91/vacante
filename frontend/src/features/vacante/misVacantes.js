
import MyNavBar from '../../components/NavBar/MyNavBar';
import React, { useState, useEffect } from 'react';
import TablaVacantesCreadas from '../../components/Tablas/TablaVacantesCreadas';
import TablaVacantesCanceladas from '../../components/Tablas/TablaVacantesCanceladas';

const  MisVacantes  = () => {
    const [categorias, setCategorias] = useState([]);
    const [vacantes, setVacantes] = useState([]);

    useEffect(() => {
        fetchCategorias();
    }, []);
    useEffect(() => {
        fetchVacantes();
      }, []);

    const fetchCategorias = async () => {
        try {
            const response = await fetch(window.location.hostname + ':8084/categorias/todas', {
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
  
    const fetchVacantes = async () => {
      try {
        const response = await fetch(window.location.hostname + ':8084/vacantes/',{
            method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
        const data = await response.json();
        setVacantes(data);
      } catch (error) {
        console.error('Error fetching vacantes:', error);
      }
    };

    return (
        <div className="misVacantes ">
            <header>
                <MyNavBar></MyNavBar>
            </header>
            <main className='container '>
                <h2>Vacantes Pendientes</h2>
                <TablaVacantesCreadas vacantes={vacantes} categorias={categorias}/>
                <h2>Vacantes Eliminadas</h2>
                <TablaVacantesCanceladas vacantes={vacantes} categorias={categorias}/>
            </main>
        </div>
    );
}

export default MisVacantes;