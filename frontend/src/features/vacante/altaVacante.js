import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import MyNavBar from '../../components/NavBar/MyNavBar';


const AltaVacante = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        fetchCategorias();
    }, []);

    const fetchCategorias = async () => {
        try {
            const response = await fetch("http://localhost:8084/categorias/todas", {
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

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [destacado, setDestacado] = useState(0);
    const [detalles, setDetalles] = useState('');
    const [salario, setSalario] = useState('');
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8084/vacantes/altaVacante', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),

            },
            body: JSON.stringify({ nombre, descripcion, destacado, detalles, salario, imagen, fecha: Date.now(), idCategoria:categoria })
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
                            <Form.Label>Nombre*</Form.Label>
                            <Form.Control type="text" required placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Descripción*</Form.Label>
                            <Form.Control type="text" required placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Destacado*</Form.Label>
                            <Form.Check
                                label="Sí"
                                name="destacado"
                                type='radio'
                                id={1}
                                value={destacado} onChange={(e) => setDestacado(1)}
                            />
                            <Form.Check
                                defaultChecked
                                label="No"
                                name="destacado"
                                type='radio'
                                id={2}
                                value={destacado} onChange={(e) => setDestacado(0)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="detalles">
                            <Form.Label>Detalles*</Form.Label>
                            <Form.Control type="text" required value={detalles} onChange={(e) => setDetalles(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="salario">
                            <Form.Label>Salario*</Form.Label>
                            <Form.Control type="number" required value={salario} onChange={(e) => setSalario(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>URL de la Imagen*</Form.Label>
                            {/* <Form.Control type="file" value={imagen} onChange={(e) => setImagen(imagen.name, e.target.files)} /> */}
                            <Form.Control type="text" required placeholder="https://imgur.com/gallery/4TQkUbV" value={imagen} onChange={(e) => setImagen(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Categoria de la vacante*</Form.Label>
                        <Form.Select aria-label="categoria" required defaultValue="" className="mb-3" onChange={(e) => setCategoria(e.target.value)}>
                        <option key='0'  disabled value="">Selecciona una opción</option>
                            {categorias.map((categoria) => {
                                return <option  key={categoria.idCategoria} value={categoria.idCategoria}>{categoria.nombre}</option>
                            })}
                        </Form.Select>
                        </Form.Group>
                        <Button type="submit">Crear Vacante</Button>
                    </Form>
                </div>
            </main >
        </div >
    );
};

export default AltaVacante;