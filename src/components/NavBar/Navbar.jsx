import Logo from '../../assets/logo.svg';
import React   from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import 'react-floating-whatsapp-button/dist/index.css'

const NavBar =() => {
return (
<>
  <Navbar collapseOnSelect expand="lg">

    <Container>

      <Link to="/">
      <Navbar.Brand>
      <h4><img src={Logo} alt="" className="App-logo" />    ENDOR  </h4>        
      </Navbar.Brand>
      </Link>

      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="navCol" style= {{  borderRadius: "10px", zIndex: "10"}} >
        <Nav className="mx-auto" >
          <Link to="/" className="nav-link "> Inicio</Link>

          <Link to="/History" className="nav-link "> Nosotros</Link>

          
          <NavDropdown title="Productos" id="collasible-nav-dropdown" className="mx-auto">
          
          <NavDropdown.Item>
              <Link to="/all" className="categorias">
              Ver todo
              </Link>
            </NavDropdown.Item>
  
            <NavDropdown.Item>
              <Link to="/category/Mate" className="categorias">
              MATES
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
            <Link to="/category/Termos" className="categorias">
             TERMOS
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
            <Link to="/category/Accesorios" className="categorias">
              ACCESORIOS
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        

      
        <Nav>        
          <Link to="/cart">
            <CartWidget />            
            </Link>            
        </Nav>

        
        
      </Navbar.Collapse>

    

    </Container>
  </Navbar>

</>

)}

export default NavBar