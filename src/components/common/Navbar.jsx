import { Nav, Container, Navbar } from 'react-bootstrap'
import './Navbar.css'
import logo from '/logo.jpg'

const Navegacion = () => {
	return (
		<Navbar expand='lg' id='navbar'>
			<Container>
				<Navbar.Brand href='#'><img src={logo} className='imagenLogo'></img></Navbar.Brand>
				<Navbar.Toggle area-aria-controls='basic-navbar-var'></Navbar.Toggle>
				<Navbar.Collapse id='basic-navbar-var'>
					<Nav className='ms-auto'>
						<Nav.Link href='#'>Administrador</Nav.Link>
						<Nav.Link href='#'>Ingresar</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navegacion