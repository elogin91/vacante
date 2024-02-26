import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import MyNavBar from '../../components/NavBar/MyNavBar';

const AltaVacante = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [destacado, setDestacado] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 /*  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8084/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ localStorage.getItem('token')
      },
      body: JSON.stringify({ nombre, apellido, username, email, password })
    });

    if (response.ok) {
      window.location.href = '/';
    }
  }; */

  return (
    <div className='registro'>
      <header>
        <MyNavBar></MyNavBar>
      </header>
      <main className='container'>
        <div className='bg-light p-5 rounded'>
          <h2>Alta de vacante</h2>
          <Form /* onSubmit={handleSubmit}*/> 
            <Form.Group className="mb-3" >
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Destacado</Form.Label>
              <Form.Control type="text" value={destacado} onChange={(e) => setDestacado(0)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit">Registrarse</Button>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default AltaVacante;