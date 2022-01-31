import style from "./ModalWindow.module.scss";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ModalMenuContext } from "../../common/components/context/modalMenu-context";

export const ModalWindow = () => {
  const links = ["home", "skills", "portfolio", "contacts"];

  const modalCtx = useContext(ModalMenuContext);

  const active = modalCtx.isActive;

  return (
    <>
      <div className={`${style.window} ${active ? "" : style.notActive}`}>
        <h3 className={style.title}>menu</h3>
        <ul className={style.links}>
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
      </div>
    </>
  );
};
