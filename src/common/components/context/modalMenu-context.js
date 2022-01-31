import React, { useState } from "react";

export const ModalMenuContext = React.createContext({
  isActive: false,
  getActive: () => {},
});

const ModalMenuContextProvider = (props) => {
  const [isActive, setIsActive] = useState();

  const getActiveHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <ModalMenuContext.Provider
      value={{ isActive: isActive, getActive: getActiveHandler }}
    >
      {props.children}
    </ModalMenuContext.Provider>
  );
};

export default ModalMenuContextProvider;
