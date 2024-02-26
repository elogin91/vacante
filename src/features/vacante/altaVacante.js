import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import MyNavBar from '../../components/NavBar/MyNavBar';


const AltaVacante = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [destacado, setDestacado] = useState('');
    const [detalles, setDetalles] = useState('');
    const [salario, setSalario] = useState('');
    const [imagen, setImagen] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8084/vacantes/altaVacante', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({ nombre, descripcion, destacado, detalles, salario, imagen, fecha: Date.now() })
        });

        if (response.ok) {
            window.location.href = '/';
        }
    };

    return (
        <div className='registro'>
            <header>
                <MyNavBar></MyNavBar>
            </header>
            <main className='container'>
                <div className='bg-light p-5 rounded'>
                    <h2>Alta de vacante</h2>
                    <Form onSubmit={handleSubmit} >
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
                            <Form.Check
                                label="Sí"
                                name="destacado"
                                type='radio'
                                id={1}
                                value={destacado} onChange={(e) => setDestacado(0)}
                            />
                            <Form.Check
                                label="No"
                                name="destacado"
                                type='radio'
                                id={2}
                                value={destacado} onChange={(e) => setDestacado(1)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="detalles">
                            <Form.Label>Detalles</Form.Label>
                            <Form.Control type="text" value={detalles} onChange={(e) => setDetalles(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="salario">
                            <Form.Label>Salario</Form.Label>
                            <Form.Control type="number" value={salario} onChange={(e) => setSalario(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" value={imagen} onChange={(e) => setImagen(imagen.name, e.target.files)} />
                        </Form.Group>
                        {/* <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select> */}
                       {/*  <Button type="submit">Crear Vacante</Button> */}
                    </Form>
                </div>
            </main >
        </div >
    );
};

export default AltaVacante;