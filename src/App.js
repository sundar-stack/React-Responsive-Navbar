import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/body/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Navbar/>
      <Home/>
    </BrowserRouter>
    </div> 
  );
}

export default App;
