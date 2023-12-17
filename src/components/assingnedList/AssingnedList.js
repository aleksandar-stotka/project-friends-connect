import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
export default function AssingnedList({ projects }) {
  console.log(projects, "Assingned"); //show object --- done,//if i have jsx didn't show object

  


  

     
  

  return <div>
    
   <ul>
   
    
      
   
    <div>
    { projects.assignedUsersList && projects.assignedUsersList.length > 0 && projects.assignedUsersList.map((user) => (
      <li className=" transition-all duration-500 ease-in-out" key={user}>
        <h4>
          <br></br> {user.displayName}
        </h4>{" "}
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={user.photoURL}
        />
        <button>set</button>
      </li>
    ))}

    </div>
 
  </ul>

    
  </div>;
}
