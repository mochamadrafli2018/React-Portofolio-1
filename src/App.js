//import external CSS
import './App.css';
//import React
import React from 'react';
//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//import Bootstrap Java Script
import Button from './Button.js'
import NavBar from './Bootstrap-Navbar.js';

//App will be exported to index.js
function App() {
  return (
    <div class='quicksand background-color-grey'>
      <NavBar/>
    </div>
  );
}

export default App;
