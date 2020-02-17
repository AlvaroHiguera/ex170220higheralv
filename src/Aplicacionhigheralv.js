// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Distribucion1higheralv from "./Distribucion1higheralv"
import Distribucion2higheralv from "./Distribucion2higheralv"
import Distribucion3higheralv from "./Distribucion3higheralv"



const Menu = () => {
  return (
    <div>
      <nav className="menu">
        <div className="menu_distibucion"> <Link to="./">Distribucion 1</Link></div>
        <div className="menu_distibucion"> <Link to="Distribucion2higheralv">Distribucion 2</Link></div>
        <div className="menu_distibucion"> <Link to="Distribucion3higheralv">Distribucion 3</Link></div>
        <div className="menu_distibucion"> <Link to="Pruebashigheralv">Pruebas</Link></div>
      </nav>
        <Router>
          <Distribucion1higheralv path="/" />
          <Distribucion2higheralv path="Distribucion2higheralv" />
          <Distribucion3higheralv path="Distribucion3higheralv" />
          {/* <Pruebashigheralv path="Pruebashigheralv" /> */}
        </Router>
    </div>
  )
}

class Aplicacionhigheralv extends Component {
  render() {
    return (
      <div >
        <Menu />
      </div>
    )
  }
}
export default Aplicacionhigheralv