import { Nav, Container, Navbar } from 'react-bootstrap'
import './Navbar.css'
import logo from '/logo.png'
import { Link } from 'react-router-dom'

const Navegacion = () => {
	return (
		<Navbar expand='lg' id='navbar'>
			<Container>
				<Navbar.Brand href='/'><img src={logo} className='imagenLogo'></img></Navbar.Brand>
				<Navbar.Toggle area-aria-controls='basic-navbar-var'></Navbar.Toggle>
				<Navbar.Collapse id='basic-navbar-var'>
					<Nav className='ms-auto'>
						<Link className='mx-3' to="/Admin" >Administrador</Link>
						<Link to='/Login'>Ingresar</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navegacion
