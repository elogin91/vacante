import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:8084/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellido, username, email, password })
    });

    if (response.ok) {
      window.location.href = '/login';
    } else {
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" placeholder="Apellidos" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
    </div>
  );
};

export default Register;