import React from "react";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/avatar/Avatar";

function PersonalProjects() {
  const { documents } = useCollection("projects");
  console.log(documents, "docs");

  const { user } = useAuthContext();

  console.log(user.displayName);

  return <></>;
}

export default PersonalProjects;
