import {Link}  from "react-scroll";
import style from "./Nav.module.scss";

const Nav = () => {
  return (    <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <Link activeClass="active"
              to={"home"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link activeClass="active"
              to={"About"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>About</Link>
          </li> */}
          <li>
            <Link activeClass="active"
              to={"skills"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Skills</Link>
          </li>
          <li>
            <Link activeClass="active"
              to={"portfolio"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Portfolio</Link>
          </li>
          <li>
            <Link activeClass="active"
              to={"contacts"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Contacts</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;
