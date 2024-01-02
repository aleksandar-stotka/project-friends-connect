import "./ProjectList.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ProjectList({ projects = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects
    .sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate()) // Sort by date
    .slice(indexOfFirstProject, indexOfLastProject);
    
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex justify-center mt-4 p-5  overflow-hidden">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 py-1 px-3 rounded text-white ${
              currentPage === number ? 'bg-blue-700' : 'bg-blue-500 font-bold hover:bg-blue-700'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  p-2">
        {projects.length === 0 && <p className="text-white font-bold">No projects yet</p>}
        {/* Display projects based on pagination */}
        {currentProjects.map((project, index) => (
          <Link
          className={`max-w-sm rounded overflow-hidden shadow-lg p-5 shadow-md hover:shadow-xl duration-400 ${
            index === 0 ? 'bg-gray-500 text-white' : 'bg-blue-600 text-gray-300'
          }`}
            to={`/projects/${project.id}`}
            key={project.id}
          >
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-2">
                <span>Project Name:</span>
                <h3>{project.name}</h3>
              </h3>
              <p className="text-blue-200 font-semibold">
                By: {project.createdBy.displayName}
              </p>
              
              <p>{project.details}</p>
              <h2 className="text-cyan-500 font-bold">Assigned Users List:</h2>
              <p>{project.assingnedUsersList.length} users</p>

              <p className="font-bold">Due by: {project.createdAt.toDate().toDateString()}</p>
              {project.createdAt &&
                formatDistanceToNow(project.createdAt.toDate(), {
                  addSuffix: true,
                })}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProjectList;
