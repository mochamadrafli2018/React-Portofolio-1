// Import external CSS
import './App.css';
// Import React
import React from 'react';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import External File
import Navbar from './Bootstrap-Navbar.js'

//App will be exported to index.js
function App() {
  return (
    <div class='quicksand'>
      <Navbar/>
    </div>
  );
}
export default App;
