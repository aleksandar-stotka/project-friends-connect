import "./Sidebar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CgAdd } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePersonalInjury } from "react-icons/md";





function Sidebar() {
 
  return (
    <div class="flex min-h-screen">
  
  <aside className="text-black w-96   md:w-20 lg:w-64 fixed top-0 left-0 h-full  transition-all duration-300 z-30">
    <div className="p-4">
      <h2 className="text-xl text-center font-semibold mb-4">Sidebar</h2>
      <ul>
      <NavLink to="/">
              <MdDashboard className="w-10 h-6" />

                <span>Dashboard</span>
              </NavLink>
      <NavLink to="/create">
              <CgAdd className="w-10 h-6"  />

                <span className="new-project">New Project</span>
              </NavLink>
              <NavLink to="/personal">
              <MdOutlinePersonalInjury className="w-10 h-6"  />

                <span className="new-project">Personal projects</span>
              </NavLink>
      </ul>
    </div>
  </aside>


  
</div>

  
      /*<div >
        
        <nav > 
          <ul className="  flex justify-end gap-5 " >
            <li>
              <NavLink to="/">
              <MdDashboard className="w-10 h-6" />

                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
            
            </li>
            <li>
              <NavLink to="/create">
              <CgAdd className="w-10 h-6"  />

                <span className="new-project">New Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/personal">
              <MdOutlinePersonalInjury className="w-10 h-6"  />

                <span className="new-project">Personal projects</span>
              </NavLink>
              
            </li>
          </ul>
        </nav>
      </div>*/
   
  );
}

export default Sidebar;
