import React, { useState, useContext, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
 
  const { deleteDocument, updateDocument } = useFirestore("projects");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBack, setNewBack] = useState(true);
  const [edit, setEdit] = useState(null);
  const [visible, setVisible] = useState(12);
  
    ///show more
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const showLess = () => {
    setVisible((prevValue) => prevValue - 3);
    if (visible < 12) {
      setVisible(3);
    }
  };
  ///////////////// collection    ///////////
  
const { documents } = useCollection("projects");
  console.log(documents,"context")
  const newBackground = () => {
    setTimeout(() => {
      setNewBack(false);
    }, 5000);
  };
  /////////// Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  ///////////////////////////
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
        showMoreItems,
        showLess,
        visible
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
