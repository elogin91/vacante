// Componente para editar perfil
import React, { useState, useEffect } from 'react';

const Profile = ({ authToken }) => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Aquí podrías hacer una solicitud al backend para obtener los datos del perfil del usuario
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://tu-backend.com/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setPhone(data.phone || '');
          setAddress(data.address || '');
        } else {
          // Manejar errores de respuesta
        }
      } catch (error) {
        // Manejar errores de red
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [authToken]);

  const handleSave = async () => {
    // Aquí podrías hacer una solicitud al backend para guardar los datos actualizados del perfil del usuario
    try {
      setIsLoading(true);
      const response = await fetch('http://tu-backend.com/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ phone, address })
      });
      if (response.ok) {
        // Manejar éxito
      } else {
        // Manejar errores de respuesta
      }
    } catch (error) {
      // Manejar errores de red
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSave}>
        <label>
          Teléfono:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Dirección:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type="submit" disabled={isLoading}>Guardar</button>
      </form>
    </div>
  );
};

export default Profile;