
 

import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero'
import './components/Hero.scss'
import CenteredButton from './components/centeredButton';
import './components/centeredButton.scss'
import Credit from './components/credit';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Credit />
      <CenteredButton>
        Acesse a conta
      </CenteredButton>
      
      
    </div>
  );
}

export default App;