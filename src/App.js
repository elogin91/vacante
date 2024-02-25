import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './features/home/home';
import Login from './features/user/login';
import Register from './features/user/register';
import Profile from './features/user/perfil';
import DetalleVacante from './features/VerDetalles/detalleVacante';
import MisSolicitudes from './features/solicitud/misSolicitudes';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/detalleVacante/:id" element={<DetalleVacante/>} />
                <Route path="/misSolicitudes" element={<MisSolicitudes/>} />
            </Routes>
        </Router>
    );
};

export default App;
