
import Button from "react-bootstrap/Button";
import React from 'react';


const LogoutButton = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    window.location.href = '/';
  };


  return <Button variant="danger" onClick={handleLogout}>Cerrar sesión</Button>;

};

export default LogoutButton;
