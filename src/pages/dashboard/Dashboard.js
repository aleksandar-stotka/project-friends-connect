import { useState } from "react";
import {useCollection} from "../../hooks/useCollection";
import React from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import ProjectFilter from "./ProjectFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

function Dashboard() {
  const { documents, error } = useCollection("projects");

  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();
   
 
  /*if (user.uid === u.id) {
    assignedToMe = true;
  }*/
  ////if we have document

  const projects = documents
    ? // eslint-disable-next-line array-callback-return
      documents.filter((document) => {
        // eslint-disable-next-line default-case
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            document.assingnedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "development":
          case "design":
          case "sales":
            case 'mine' :
          case "marketing":
            console.log(document.category, currentFilter);
            return document.category === currentFilter;
        }
      })
    : null;

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  return (
    <div >
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          className="filters"
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
     <div className="">
      {projects && <ProjectList projects={projects} />}
     </div>
      
    </div>
  );
}

export default Dashboard;
