import React from 'react'
// Import Component from Bootstrap
import {Nav, Navbar} from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return(
            <>
                <Navbar variant="light" class='background-color-grey'>
                    <Nav className="mr-auto" style={{'margin':'2px auto'}}>
                        <Nav.Link href="#" className='' style={{'margin':'2px 15px'}}><b>Home</b></Nav.Link>
                        <Nav.Link href="#" className='' style={{'margin':'2px 15px'}}><b>My Github</b></Nav.Link>
                        <Nav.Link href="#" className='' style={{'margin':'2px 15px'}}><b>About Me</b></Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )
    }
}
//<Navbar.Brand href="#home">Welcome to My Web Apps</Navbar.Brand>
export default NavBar