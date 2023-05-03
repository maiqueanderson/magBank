import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero'
import './components/Hero.scss'
import CenteredButton from './components/centeredButton';
import './components/centeredButton.scss'
import Credit from './components/credit';
import Cards from './components/cards';
import AccountModal from './components/AccountModal';
import posts from './data/posts';
import Institutional from './components/Institutional';
import Footer from './components/Footer';
import Faq from './components/Faq';


function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navigation handleCreateAccount={() => setShowModal(true)} />
      <Hero handleCreateAccount={() => setShowModal(true)} />
      <Credit />
      <Cards posts={posts}/>
      <CenteredButton>
        Acesse a conta
      </CenteredButton>
      <Institutional/>
      <Faq/>
      <Footer/>
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
     
      
      
    </div>
  );
}

export default App;