import "./Sidebar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CgAdd } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePersonalInjury } from "react-icons/md";





function Sidebar() {
 
  return (
  
      <div >
        
        <nav className="" > 
          <ul className="  flex-col justify-end gap-5 " >
            <li>
              <NavLink to="/">
              <MdDashboard />

                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
            
            </li>
            <li>
              <NavLink to="/create">
              <CgAdd />

                <span className="new-project">New Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/personal">
              <MdOutlinePersonalInjury />

                <span className="new-project">personal projects</span>
              </NavLink>
              
            </li>
          </ul>
        </nav>
      </div>
   
  );
}

export default Sidebar;
