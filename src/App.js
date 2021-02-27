//import external CSS
import './App.css';
//import React
import React from 'react';
//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//import Bootstrap Java Script
import NavBar from './Bootstrap-Navbar.js';

//App will be exported to index.js
function App() {
  return (
    <div class='quicksand'>
      <NavBar/>
    </div>
  );
}

export default App;
