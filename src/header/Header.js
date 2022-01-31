import { useState, useEffect } from "react";
import { Burger } from "../navigation/BurgerMenu/BurgerMenu";
import { ModalWindow } from "../navigation/BurgerMenu/ModalWindow";
import Nav from "../navigation/Nav";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <ModalWindow />
      <Nav />
    </div>
  );
};

export default Header;
