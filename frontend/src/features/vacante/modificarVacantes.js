import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import MyNavBar from '../../components/NavBar/MyNavBar';
import { useParams } from 'react-router-dom';


const ModificarVacante = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        fetchCategorias();
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

    let { id } = useParams();
    const [vacante, setVacante] = useState({
        nombre: '',
        descripcion: '',
        destacado:'',
        detalles:'',
        salario: 0,
        imagen:'',
        idCategoria: '',
    });


    useEffect(() => {
        fetchVacante();
    }, []);


    const fetchVacante = async () => {
        try {
            const response = await fetch(window.location.hostname + ':8084/vacantes/verDetalle/' + id);
            const data = await response.json();
            setVacante(data);
        } catch (error) {
            console.error('Error fetching vacantes:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(window.location.hostname + ':8084/vacantes/modificandoVacante', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),

            },
            body: JSON.stringify(vacante)
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
                    <h2>Modificar</h2>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" >
                            <Form.Label>Nombre*</Form.Label>
                            <Form.Control type="text" required placeholder="Nombre" value={vacante.nombre} onChange={(e) => setVacante((prevState) => ({
                                ...prevState,
                                nombre: e.target.value
                            }))} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Descripción*</Form.Label>
                            <Form.Control type="text" required placeholder="Descripcion" value={vacante.descripcion} onChange={(e) => setVacante((prevState) => ({
                                ...prevState,
                                descripcion: e.target.value
                            }))} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Destacado*</Form.Label>
                            <Form.Check
                                checked={vacante.destacado == 1}
                                label="Sí"
                                name="destacado"
                                type='radio'
                                id={1}
                                value={vacante.destacado} onChange={(e) => setVacante((prevState) => ({
                                    ...prevState,
                                    destacado: 1
                                }))}
                            />
                            <Form.Check
                                checked={vacante.destacado == 0}
                                label="No"
                                name="destacado"
                                type='radio'
                                id={2}
                                value={vacante.destacado} onChange={(e) => setVacante((prevState) => ({
                                    ...prevState,
                                    destacado: 0
                                }))}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="detalles">
                            <Form.Label>Detalles*</Form.Label>
                            <Form.Control type="text" required value={vacante.detalles} onChange={(e) => setVacante((prevState) => ({
                                ...prevState,
                                detalles: e.target.value
                            }))} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="salario">
                            <Form.Label>Salario*</Form.Label>
                            <Form.Control type="number" required value={vacante.salario} onChange={(e) => setVacante((prevState) => ({
                                ...prevState,
                                salario: e.target.value
                            }))} />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>URL de la Imagen*</Form.Label>
                            <Form.Control type="text" required placeholder="https://imgur.com/gallery/4TQkUbV" value={vacante.imagen} onChange={(e) => setVacante((prevState) => ({
                                ...prevState,
                                imagen: e.target.value
                            }))} />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Categoria de la vacante*</Form.Label>
                        <Form.Select aria-label="categoria" required value={vacante.idCategoria} className="mb-3" onChange={(e) => setVacante((prevState) => ({
                                ...prevState,
                                idCategoria: e.target.value
                            }))}>
                            {categorias.map((categoria) => {
                                return <option  key={categoria.idCategoria} value={categoria.idCategoria}>{categoria.nombre}</option>
                            })}
                        </Form.Select>
                        </Form.Group>
                        <Button type="submit">Modificar Vacante</Button>
                    </Form>
                </div>
            </main >
        </div >
    );
};

export default ModificarVacante;