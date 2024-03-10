import React, { useState } from 'react';
import MyNavBar from '../../components/NavBar/MyNavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8084/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (response.ok) {
      const { accessToken, username, perfil } = await response.json();
      localStorage.setItem('token', accessToken);
      localStorage.setItem('userName', username);
      localStorage.setItem('perfil', perfil)
      window.location.href = '/';
    }
  };

  return (

    <div className='login'>
      <header>
        <MyNavBar></MyNavBar>
      </header>
      <main className='container'>
        <div className='bg-light p-5 rounded'>
          <h2>Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit">Entrar</Button>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Login;
