import {useState} from 'react';
import Nav from "../navigation/Nav";
import style from "./Header.module.scss";




const Header = () => {

  const [scrollClass, setScrollClass] = useState(false);

const  handleScroll = () => {
    console.log('scrolled')
    // setScrollClass(true);

    // setTimeout(() => {setScrollClass(false) }, 1000)
  }

  return (
      <div className={`${scrollClass.length} ? ${style.header_fixed} : ${style.header}`} onScroll={ handleScroll}>
        <Nav />
      </div>
  );
};

export default Header;
