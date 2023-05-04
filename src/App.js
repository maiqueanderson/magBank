import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';

import './components/Hero.scss'
import './components/centeredButton.scss'

import AccountModal from './components/AccountModal';
import Footer from './components/Footer';
import Home from './views/Home';
import Login from './views/Login';



function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navigation handleCreateAccount={() => setShowModal(true)} />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

      <Footer/>
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
     
      
      
    </div>
  );
}

export default App;