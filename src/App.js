import './App.module.css';
import Contacts from './contacts/Contacts';
import Demo from './demo/Demo';
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';
import SkillBox from './skills/SkillBox';

function App() {
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
