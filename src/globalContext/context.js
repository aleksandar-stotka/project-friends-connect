import React, { useState, useContext, useEffect, useReducer } from "react";
import { useCollection } from "../hooks/useCollection";
import { HANDLE_PAGE } from "../actions/actions";
import reducer from "../reducer/reducer";
const AppContext = React.createContext();


const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

 
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
  useEffect(() => {
    newBackground();
  });
/////////////////////////////
const handlePage = (value) => {
  dispatch({ type: HANDLE_PAGE, payload: value });
};
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
