import React, { useState, useEffect } from 'react';
import MyNavBar from '../../components/NavBar/MyNavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Profile = ({ authToken }) => {
  const [username, setUsername] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {

        const response = await fetch('http://' + window.location.hostname + ':8084/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username || '');
          setNombre(data.nombre || '');
          setApellidos(data.apellidos || '');
          setEmail(data.email || '');
        }
      } catch (error) {
      }
    };

    fetchUserProfile();
  }, [authToken]);

  const handleSave = async () => {
    try {
      const response = await fetch('http://' + window.location.hostname + ':8084/profile/modificar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({ username, nombre, apellidos, email })
      });
      if (response.ok) {
        // Manejar éxito
      }
    } catch (error) {
      // Manejar errores de red
    }
  };

  return (
    <div className='perfil'>
      <header>
        <MyNavBar></MyNavBar>
      </header>
      <main className='container'>
        <div className='bg-light p-5 rounded'>
          <h2>Editar Perfil de {username}</h2>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" >
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" required placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control type="text" required placeholder="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Button type="submit">Guardar</Button>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Profile;