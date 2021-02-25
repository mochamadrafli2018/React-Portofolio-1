import React from 'react'
// Import component from Bootstrap
import {Nav, Navbar} from 'react-bootstrap';
// Import external JavaScript file
import AccordionBootstrap from './Bootstrap-Accordion.js';
import Cardcontainer from './Bootstrap-Card.js';
import Header from './Header.js'
// Import react-router-dom component
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

//Routing must have div inside router element
class SwitchChild extends React.Component{
    render(){
        return(
            <div>
            <Switch>
                <Route exact path="/home"><Home/></Route>
                <Route exact path="/path"><Card/></Route>
                <Route path="/aboutme"><About/></Route>
                <Route path='/github'></Route>
            </Switch>
            </div>
        )
    }
}
class NavBar extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <>
                        <Navbar variant="light" class='background-color-grey'>
                            <Nav className="mr-auto" style={{'margin':'2px auto'}}>
                                <Nav.Link href="#"><Link to='/home' className='navlink'><b>Home</b></Link></Nav.Link>
                                <Nav.Link href="#"><Link to='/path' className='navlink'><b>Path</b></Link></Nav.Link>
                                <Nav.Link href="#"><Link to='/aboutme' className='navlink'><b>About Me</b></Link></Nav.Link>
                                <Nav.Link href="#"><Link to='/github' className='navlink'><b>My Github</b></Link></Nav.Link>
                            </Nav>
                        </Navbar>
                    </>
                    <SwitchChild/>
                </div>
            </Router>
        )
    }
}

//Function to call Cardcontainer and AccordionBootstrap
function Home(){
    return(
        <div>
            <Header/>
        </div>
    )
}
function Card(){
    return(
        <div>
            <Cardcontainer/>
        </div>
    )
}
function About(){
    return(
        <div>
            <AccordionBootstrap/>
        </div>
    )
}
//<Navbar.Brand href="#home">Welcome to My Web Apps</Navbar.Brand>
export default NavBar

