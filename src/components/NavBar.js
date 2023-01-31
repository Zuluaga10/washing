import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/navStyle.css";

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-color" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/machineRental">Alquiler</Nav.Link>
              <Nav.Link href="/addMachine">Añadir</Nav.Link>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle className="bg-color" id="dropdown-basic">
                <img
                  src="https://www.primefaces.org/primereact/images/avatar/asiyajavayant.png"
                  className="rounded-circle"
                  height="40"
                  alt="Woman"
                  loading="lazy"
                />
              </Dropdown.Toggle>
              {/* <Dropdown.Menu className="bg-color">
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              {/* </Dropdown.Menu> */} 
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
