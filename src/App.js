import "./App.css";
import About from "./components/About";
import AccordianSection from "./components/AccordianSection";
import Address from "./components/Address";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Secure from "./components/Secure";
import Socials from "./components/Socials";
import TimerBox from "./components/TimerBox";
import Token from "./components/Token";
import Roadmap from "./components/Roadmap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="max_w_1920 mx-auto overflow-x-hidden position-relative z-0">
      <HeroSection />
      <TimerBox />
      <About />
      <Address />
      <Token />
      <Secure />
      <Roadmap />
      <AccordianSection />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
