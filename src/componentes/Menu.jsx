import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext/MenuContext';

export function Menu () {
    const {
        rutas,
    } = useContext(MenuContext)
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Link className="navbar-brand" to="/" >Inicio</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {rutas.map((ruta) => (
                    <NavLink className="nav-item nav-link" key={ruta.key} to={ruta.path}>{ruta.nombre}</NavLink> 
                ))}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}