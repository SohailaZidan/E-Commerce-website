import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart2, MoonFill, Search } from "react-bootstrap-icons";
import { NavLink } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';
export default function MyNavbar() {
  const {dark,ToggleDarkMode}=useContext(DarkModeContext);
  const handleClick =() =>{
    ToggleDarkMode();
  }

  const {totalItems } = useCart();
  
  return (
    <Navbar expand="lg" sticky="top"  className={dark? 'bg-dark text-white bg-body-tertiary bg-gradient gradient-bottom shadow-sm':' bg-body-tertiary bg-white bg-gradient gradient-bottom shadow-sm'}>
      <Container fluid className='row row-cols-3'>
        <Navbar.Brand href="#" className={dark?'text-white fw-bold':'text-black'}  style={{fontSize:"30px",fontWeight:'bolder'}}>Fashion</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-4 fw-bolder"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <NavLink to='/home' className={dark?'text-white fw-bold':'text-black'} style={{textDecoration:'none'}}>Home</NavLink>
            <NavLink to='/products'className={dark?'text-white fw-bold':'text-black'}style={{textDecoration:'none'}}>Shop</NavLink>
            <NavLink to='/products/:id'className={dark?'text-white fw-bold':'text-black'}style={{textDecoration:'none'}}>Page</NavLink>            
            <NavLink to='/user' className={dark?'text-white fw-bold':'text-black'} style={{textDecoration:'none'}}>Users</NavLink>
            <NavLink to='/login'className={dark?'text-white fw-bold':'text-black'} style={{textDecoration:'none'}}>Login</NavLink>     
          </Nav>
          <Nav className='gap-4 '>
        <NavLink to='/products' className={dark?'text-white fw-bold':'text-black'} style={{textDecoration:'none'}}><Search/></NavLink>
        <NavLink to='/cart'className={dark?'text-white fw-bold':'text-black'} style={{textDecoration:'none'}}><Cart2/><Badge bg='secondary '><span>{totalItems}</span></Badge></NavLink>
        <NavLink className={dark?'text-white fw-bold':'text-black'} style={{textDecoration:'none'}} onClick={handleClick}><MoonFill/></NavLink>
        </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

