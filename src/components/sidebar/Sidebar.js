import "./Sidebar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePersonalInjury } from "react-icons/md";

function Sidebar() {
  return (
    <div className="flex flex justify-center z-0">
      <aside className="text-black lg:w-[40rem] fixed bottom-0 w-full lg:w-[50rem] text-white py-4 transition-all duration-300 z-30">
        <div className="p-4">
          <ul className="flex flex-col lg:flex-row justify-between">
            <NavLink to="/dashboard" className="flex items-center">
              <MdDashboard className="w-10 h-6" />
              <span className="lg:ml-2">Dashboard</span>
            </NavLink>
            <NavLink to="/create" className="flex items-center mt-4 lg:mt-0">
              <CgAdd className="w-10 h-6" />
              <span className="lg:ml-2 new-project">New Project</span>
            </NavLink>
            <NavLink to="/personal" className="flex items-center mt-4 lg:mt-0">
              <MdOutlinePersonalInjury className="w-10 h-6" />
              <span className="lg:ml-2 new-project">Personal projects</span>
            </NavLink>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
