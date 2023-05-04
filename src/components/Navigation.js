import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './Navigation.scss';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navigation = ({ handleCreateAccount }) => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Link to='./'>
          <img src={logo} height={30} className='d-inline-block align-top' alt='Magbank logo' />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Cartão</Nav.Link>
            <Nav.Link href="#action2">Quem somos</Nav.Link>
            <Nav.Link href="#action3">FAQ</Nav.Link>
          </Nav>

          <ButtonGroup>
            <Button variant="outline-light">
              <NavDropdown title="Acessar a minha conta" id="basic-nav-dropdown">
                <NavDropdown.Item >
                <Link className='dropDownColor' to='./Login'>Pessoa Física</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                <Link className='dropDownColor' to='./Login'>Pessoa Jurídica</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Button>

            <Button variant="outline-light" onClick={() => handleCreateAccount()}>
              Abra sua conta
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;