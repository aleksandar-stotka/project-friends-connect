import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useAuthContext } from "../../hooks/useAuthContext";





export default function AssingnedList({displayName,photoURL,id,index}) {


  
   
     
    
      
   
    
    

 

    
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded && (
        <ul>
          <h2>{displayName}</h2>
          <img className="rounded-full h-10 w-10" src={photoURL} alt={displayName} />
        </ul>
      )}
      <button onMouseOver={toggleExpand}>
        {isExpanded ? <FaArrowUp /> : <FaArrowDown />}
      </button>
    </div>
  );
}
