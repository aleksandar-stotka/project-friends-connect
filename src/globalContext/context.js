import React, { useState, useContext, useEffect, useReducer } from "react";
import { useCollection } from "../hooks/useCollection";
import { HANDLE_PAGE,SET_DOCUMENTS } from "../actions/actions";
import reducer from "../reducer/reducer";
const AppContext = React.createContext();




export const AppProvider = ({ children }) => {
  const { documents } = useCollection("projects");
 
 
  
    
  
      

 
 ////////////////////////////////////////////////
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
  console.log(documents,"context, pro")
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
  useEffect(() => {
    newBackground();
  });
/////////////////////////////

//////////////////////////////////////

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
        visible,
       
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
