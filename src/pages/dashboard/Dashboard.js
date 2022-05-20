import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";

import React from "react";
import ProjectList from "../../components/ProjectList";
import ProjectFilter from "./ProjectFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

function Dashboard() {
  const { user } = useAuthContext();
  const [currentFilter, setCurrentFilter] = useState("all");
  const { documents, error } = useCollection("projects");
  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}

export default Dashboard;
