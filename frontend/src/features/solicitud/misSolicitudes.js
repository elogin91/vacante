
import MyNavBar from '../../components/NavBar/MyNavBar';
import React, { useState, useEffect } from 'react';
import SolicitudesList from '../../components/Listados/SolicitudesList';

const  MisSolicitudes  = () => {

    const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    fetchSolicitudes();
  }, []);

  const fetchSolicitudes = async () => {
    try {
      const response = await fetch('http://' + window.location.hostname + ':8084/solicitudes/verTodas', {
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

    return (
        <div className="misSolicitudes ">
            <header>
                <MyNavBar></MyNavBar>
            </header>
            <main className='container '>
                <SolicitudesList solicitudes={solicitudes} />
            </main>
        </div>
    );
}

export default MisSolicitudes;