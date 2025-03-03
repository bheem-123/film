import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../component/navbar.css"

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand href="#" className='moive'>Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='moive'>Home</Nav.Link>
            <Nav.Link href="#action2" className='moive'>Contact</Nav.Link>
            <Nav.Link className='moive' href="#" disabled>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;