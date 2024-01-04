import React, { useState, useContext, useEffect} from "react";
import { useCollection } from "../hooks/useCollection";

const AppContext = React.createContext();




export const AppProvider = ({ children }) => {
  const { documents } = useCollection("projects");
  const [paragraph,setPara] = useState(false)
 
 

    
  
      

 
 ////////////////////////////////////////////////
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBack] = useState(true);
  
    ///show more
 
  ///////////////// collection    ///////////
  console.log(documents,"context, pro")
  const newBackground = () => {
    setTimeout(() => {
      setPara(true);
    }, 6000)
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
     
       paragraph
       
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
