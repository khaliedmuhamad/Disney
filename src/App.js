import './App.css';
import {BrowserRouter as

Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import React from 'react';



function App() {

  return (
    <div className="App">
      <Router>
        <NavBar /> 
        <Routes>
        <Route  path='/' element={<Login />}/>
        <Route  path='/home' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
