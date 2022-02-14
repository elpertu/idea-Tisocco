import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Carticon from "../icon/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Casa  Marthe</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">           
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/mesas">Mesas</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/sillones"> Sillones </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/otros">Otros</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined}
               to="/cart"><Carticon /></NavLink>
        
      </Container>
    </Navbar>
  )
}

export default NavBar