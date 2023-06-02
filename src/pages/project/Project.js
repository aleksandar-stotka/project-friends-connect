import "./Project.scss";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import React from "react";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";
import { useFirestore } from "../../hooks/useFirestore";
import PersonalProjects from "../personalProjects/UserProjects";

function Project() {
  const { id } = useParams(); //find

  const { error, document } = useDocument("projects", id);
  
  
  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">loading.z..</div>;
  }
  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    
    </div>
  );
}

export default Project;
