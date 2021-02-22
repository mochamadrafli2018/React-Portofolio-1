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
import Button from './Button.js'
import Cardcontainer from './Bootstrap-Card.js';
import Cardcontainer2 from './Bootstrap-Card-2'
import Header from './Header.js'
import NavBar from './Bootstrap-Navbar.js';
import AccordionBootstrap from './Bootstrap-Accordion.js';

//App will be exported to index.js
function App() {
  return (
    <div class='quicksand background-color-grey'>
      <NavBar/>
      <Header/>
      <Button/>
      <Cardcontainer/>
      <AccordionBootstrap/>
    </div>
  );
}

export default App;
