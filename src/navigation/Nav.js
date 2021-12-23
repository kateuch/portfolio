import style from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <div className={style.nav}>
        <ul className={style.list}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
