import { Link } from "react-scroll";
import style from "./Nav.module.scss";
import { Burger } from "./BurgerMenu/BurgerMenu";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>
          <Link
            activeClass={style.active}
            to={"home"}
            spy={true}
            smooth={true}
            offset={-99}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass={style.active}
            to={"skills"}
            spy={true}
            smooth={true}
            offset={-98}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass={style.active}
            to={"portfolio"}
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass={style.active}
            to={"contacts"}
            spy={true}
            smooth={true}
            offset={-99}
            duration={500}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <Burger />
    </nav>
  );
};

export default Nav;
