import { useEffect, useState, useRef } from "react";
import { useCollection } from "../../hooks/useCollection";
import React from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import ProjectFilter from "./ProjectFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

import OnlineUsers from "../../components/onlineUsers/OnlineUsers";
function Dashboard() {
  const { documents, error } = useCollection("projects");
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

            // eslint-disable-next-line no-unreachable
            let assignedToMe = false;
            document.assingnedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            // eslint-disable-next-line no-unreachable
            return assignedToMe;
          case "development":
          case "design":
          case "sales":
          case "mine":
          case "marketing":
            return document.category === currentFilter;
        }
      })
    : null;

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <main>
 <div className=" min-h-screen">
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          className="filters"
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}

        <div className="col-span-2 container ">
          {projects && <ProjectList projects={projects} />}
        </div>
    </div>
    </main>
   
  );
}

export default Dashboard;
