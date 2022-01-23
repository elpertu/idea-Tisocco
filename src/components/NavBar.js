import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
	return(
		<Navbar bg="light" expand="lg">
		  <Container fluid>
			<Navbar.Brand href="#">Casa Marthe</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
			  <Nav
				className="me-auto my-2 my-lg-0"
				style={{ maxHeight: '100px' }}
				navbarScroll
			  >
				<Nav.Link href="#action2">Mesas</Nav.Link>
				<Nav.Link href="#action2">Muebles</Nav.Link>
				<Nav.Link href="#action2">Ceramica</Nav.Link>
				<Nav.Link href="#action2">Tablas y Platos</Nav.Link>
				<Nav.Link href="#action2">Proximos proyectos</Nav.Link>
			  </Nav>
			  <Form className="d-flex">
				<FormControl
				  type="search"
				  placeholder="Buscar"
				  className="me-2"
				  aria-label="Search"
				/>
				<Button variant="outline-success">Buscar</Button>
			  </Form>
			</Navbar.Collapse>
		  </Container>
		</Navbar>
	)
	
}

export default NavBar