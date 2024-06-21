import './App.css';
import About from './components/About';
import AccordianSection from './components/AccordianSection';
import Address from './components/Address';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Secure from './components/Secure';
import Socials from './components/Socials';
import TimerBox from './components/TimerBox';
import Token from './components/Token';
import Roadmap from './components/Roadmap'

function App() {
  return (
    <div>
      <HeroSection />
      <TimerBox />
      <About />
      <Address />
      <Token />
      <Secure />
      <Roadmap/>
      <AccordianSection />
      <Socials />
     <Footer/>
    </div>
  );
}

export default App;
