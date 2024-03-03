import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './features/home/home';
import Login from './features/user/login';
import Register from './features/user/register';
import Profile from './features/user/perfil';
import DetalleVacante from './features/vacante/detalleVacante';
import MisSolicitudes from './features/solicitud/misSolicitudes';
import AltaVacante from './features/vacante/altaVacante'
import MisVacantes from './features/vacante/misVacantes';
import ModificarVacante from './features/vacante/modificarVacantes';

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
                <Route path="/altaVacante" element={<AltaVacante/>} />
                <Route path='/misVacantes' element={<MisVacantes/>}/>
                <Route path='/modificar/:id' element={<ModificarVacante/>}/>
            </Routes>
        </Router>
    );
};

export default App;
