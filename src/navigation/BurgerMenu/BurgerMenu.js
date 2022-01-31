import { useContext } from "react";
import { ModalMenuContext } from "../../common/components/context/modalMenu-context";
import style from "./BurgerMenu.module.scss";

export const Burger = () => {
  const modalCtx = useContext(ModalMenuContext);

  const active = modalCtx.isActive;

  const activeHandler = () => {
    modalCtx.getActive();
  };

  return (
    <>
      <div
        className={`${style.burger} ${active ? style.burgerActive : ""}`}
        onClick={activeHandler}
      >
        <div className={`${style.line} ${style.line1}`}></div>
        <div className={`${style.line} ${style.line2}`}></div>
        <div className={`${style.line} ${style.line3}`}></div>
      </div>
    </>
  );
};
