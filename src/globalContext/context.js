import React, { useState, useContext, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";
import { AuthContext } from "../context/AuthContext";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBack, setNewBack] = useState(true);
  const [edit, setEdit] = useState(null);
 
  ///////////////// collection    ///////////
const { documents } = useCollection("projects");
  console.log(documents,"context")
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
