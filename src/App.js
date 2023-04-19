
 

import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero'
import './components/Hero.scss'
import CenteredButton from './components/centeredButton';
import './components/centeredButton.scss'
import Credit from './components/credit';
import Cards from './components/cards';

import posts from './data/posts';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Credit />
      <Cards posts={posts}/>
      <CenteredButton>
        Acesse a conta
      </CenteredButton>
     
      
      
    </div>
  );
}

export default App;