import React, { useState, useContext, useEffect } from "react";
import { useLogout } from "../hooks/useLogout";
import { useCollection } from "../hooks/useCollection";
import { useHistory } from "react-router-dom";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBack, setNewBack] = useState(true);
  const [edit, setEdit] = useState(null);

  ///////////////// collection    ///////////
  const { documents } = useCollection("projects");
  const newBackground = () => {
    setTimeout(() => {
      setNewBack(false);
      console.log("set");
    }, 4000);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    newBackground();
  });
 //only use documents for important 
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        newBack,
        newBackground,
        documents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
