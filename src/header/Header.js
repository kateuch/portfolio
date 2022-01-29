import { useState, useEffect } from "react";
import Nav from "../navigation/Nav";
import style from "./Header.module.scss";

const Header = () => {
  // const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      // setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className={scrollTop > 0 ? style.header : style.header}>
      <Nav />
    </div>
  );
};

export default Header;
