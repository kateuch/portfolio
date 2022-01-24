import './App.module.css';
import Contacts from './contacts/Contacts';
import Demo from './demo/Demo';
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';
import SkillBox from './skills/SkillBox';
import {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
    <Header />
    <Home />
    {/* <About /> */}
    <SkillBox/>
    <Demo />
    <Contacts/>
    <Footer />
    </>
  );
}

export default App;
