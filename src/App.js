//import external CSS
import './App.css';

//import React and ReactDOM from JSON package
import React from 'react';

//import Ant Desain UI
//import { Form, Input, Button, Checkbox } from 'antd';
//import { Row, Col } from 'antd';
//import 'antd/dist/antd.css';
//import Layout from 'antd/lib/layout/layout';

//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//import Bootstrap Java Script
import Cardcontainer from './Bootstrap-Card.js';
import Cardcontainer2 from './Bootstrap-Card-2'
import NavBar from './Bootstrap-Navbar.js';
import AccordionBootstrap from './Bootstrap-Accordion.js';

//App will be exported to index.js
function App() {
  return (
    <div class='quicksand background-color'>
      <NavBar/>
      <div class='text-center' style={{'margin':'100px auto'}}>
        <h1 class='font-weight-bold text-shadow' style={{'font-size':'30px'}}>Website Learning Course untuk Level Intermediate</h1>
        <p class='text-shadow' style={{'font-size':'25px'}}>Never Give Up to Be a Professional Developer</p>
      </div>
      <Cardcontainer/>
      <h1 class='text-center' style={{'margin-top':'20px'}}>Popular</h1>
      <p class='text-center'>Choose the popular one</p>
      <Cardcontainer2/>
      <h1 class='text-center' style={{'margin-top':'20px'}}>Overview</h1>
      <AccordionBootstrap/>
    </div>
  );
}

export default App;
