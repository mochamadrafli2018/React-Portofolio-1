import React from 'react'
// Import component from Bootstrap
import {Nav, Navbar} from 'react-bootstrap';
// Import external JavaScript file
import AccordionOutput from './Bootstrap-Accordion.js'
import OutputProfile from './Profile.js';
import LearningPath from './LearningPath.js';
import HomeDisplay from './Home.js'
// Import font-awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// Import react-router-dom component
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//Routing must have div inside router element
class NavBar extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <>
                        <Navbar variant="dark" class=''>
                            <Nav className="mr-auto" style={{'margin':'2px auto'}}>
                                <Nav.Link href="#" eventKey="link-1"><Link to='/' className='navlink'><b>Home</b></Link></Nav.Link>
                                <Nav.Link href="#"><Link to='/path' className='navlink'><b>Path</b></Link></Nav.Link>
                                <Nav.Link href="#"><Link to='/aboutme' className='navlink'><b>Repo</b></Link></Nav.Link>
                            </Nav>
                        </Navbar>
                    </>
                    <SwitchChild/>
                </div>
            </Router>
        )
    }
}

class SwitchChild extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/path"><Card/></Route>
                    <Route path="/aboutme"><About/></Route>
                </Switch>
            </div>
        )
    }
}
//Function to call Home Bar, Cardcontainer and OutputProfile
function Home(){
    return(
        <div>
            <HomeDisplay/>
        </div>
    )
}
function Card(){
    return(
        <div>
            <LearningPath/>
        </div>
    )
}
function About(){
    return(
        <div>
            <AccordionOutput/>
        </div>
    )
}
export default NavBar

