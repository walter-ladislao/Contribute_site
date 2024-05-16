import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Donation from "./pages/Donation";
import DarkMode from "./components/DarkMode/DarkMode";
import './App.css';

function App() {

  const [nascosto, setNascosto] = useState(false);

  const toggleVisibilita = () => {
    setNascosto(!nascosto); // Inverti lo stato attuale
  };

  let classeElemento = nascosto ? 'elemento-da-modificare' : 'elemento-da-modificare d-none';

  return(
    <>
    <div className="App">
      
      <header className="App-header">       
        <BrowserRouter>
        <div className='container-fluid '>
          <div className='row myNav'>
            <div className='col-2 '></div>
            <div className='col-8 d-flex justify-content-evenly align-items-center'>
              <Link to="/" className='myLinks unbounded-text text-light text-shadowing'>Home</Link>
              <Link to="/about" className='myLinks unbounded-text text-light text-shadowing'>Blog</Link>
              <Link to="/contact" className='myLinks unbounded-text text-light text-shadowing'>Promoters</Link>
              <Link to="/donation" className='myLinks unbounded-text text-light text-shadowing'>Donate</Link>              
            </div>
            <div className='col-2 d-flex justify-content-end align-items-center unbounded-text text-shadowing'>
              <div>
                <button className='menuBtn text-shadowing' onClick={toggleVisibilita}>
                  Menù
                </button>
                
              </div>
              <div className={`d-flex flex-column myDropDown  b-rounded p-3 ${classeElemento}`}>
              <div className='d-flex justify-content-end divDarkMode'><DarkMode/></div>
              <Link to="/" className='myLinks text-start unbounded-text text-light text-shadowing'>Home</Link>
              <Link to="/about" className='myLinks text-start unbounded-text text-light text-shadowing'>Blog</Link>
              <Link to="/contact" className='myLinks text-start unbounded-text text-light text-shadowing'>Promoters</Link>
              <Link to="/donation" className='myLinks text-start unbounded-text text-light text-shadowing'>Donate</Link>
              
              
              
              </div>
            </div>
          </div>
        </div>
        
        
        
        
        <div className='w-100 h-100 p-lg-0 p-2'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route path="/donation" element={<Donation/>}/>
        </Routes>
        </div>         
      </BrowserRouter>
      </header>
    </div>    
    </>
  );
}

export default App;