import { useState } from 'react';
import Hero from '../components/Hero'
import '../components/Hero.scss'
import CenteredButton from '../components/centeredButton';
import '../components/centeredButton.scss'
import Credit from '../components/credit';
import Cards from '../components/cards';
import posts from '../data/posts';
import Institutional from '../components/Institutional';
import Faq from '../components/Faq';
import AccountModal from '../components/AccountModal';



const Home = () => {
    const [showModal, setShowModal] = useState(false);
  return (
   <>
     
      <Hero handleCreateAccount={() => setShowModal(true)} />
      <Credit />
      <Cards posts={posts} />
      <CenteredButton>Acesse a conta</CenteredButton>
      <Institutional />
      <Faq />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Home;
