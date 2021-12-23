import Nav from "../navigation/Nav";
import style from "./Header.module.css";

const Header = () => {
  return (
      <div className={style.header}>
        <Nav />
      </div>
  );
};

export default Header;
