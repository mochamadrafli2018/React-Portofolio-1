import React from 'react'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Welcome to My Web Apps</Navbar.Brand>
                    <Nav className="mr-auto borderwhite">
                        <Nav.Link href="#home" className='borderwhite link' style={{'margin':'2px'}}>Home</Nav.Link>
                        <Nav.Link href="#features" className='borderwhite link' style={{'margin':'2px'}}>My Github</Nav.Link>
                        <Nav.Link href="#pricing" className='borderwhite link' style={{'margin':'2px'}}>About Me</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )
    }
}
export default NavBar