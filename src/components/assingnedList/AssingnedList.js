import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";




export default function AssingnedList({displayName,photoURL,id}) {


  
   const [assigned,setAsigned] = useState(false)


  
      

  return <div>

    
   {assigned && <ul>
    <h2>{displayName}</h2>
    <img className="rounded-full h-10 w-11" src={photoURL} />

  </ul>}

   
     <button onMouseOver={() => setAsigned(!assigned)}>
      {assigned  ? (
        <FaArrowUp/>

      ) : (
        <FaArrowDown/>
 
      )}

     </button>
     
    
      
   
    
    

 

    
  </div>;
}
