import "./ProjectList.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ProjectList({ projects = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects
    .sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate())
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
      {/* Pagination Bar */}
      <div className="flex justify-center items-center sticky top-0 z-20 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 py-3 px-2 rounded-b-2xl shadow-lg mb-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 py-2 px-4 rounded-xl text-white font-semibold transition-all duration-200
              ${currentPage === number
                ? 'bg-white text-blue-700 shadow-lg scale-105'
                : 'bg-blue-700 hover:bg-blue-900 hover:scale-105'}
            `}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
        {projects.length === 0 && (
          <p className="text-white font-bold col-span-full text-center py-10 text-xl">
            No projects yet
          </p>
        )}
        {currentProjects.map((project, index) => (
          <Link
            className={`flex flex-col justify-between max-w-sm w-full rounded-2xl overflow-hidden shadow-xl p-6 transition-all duration-300
              hover:scale-105 hover:shadow-2xl
              ${index === 0
                ? 'bg-gradient-to-br from-gray-700 via-gray-500 to-gray-400 text-white'
                : 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400 text-white'}
            `}
            to={`/projects/${project.id}`}
            key={project.id}
          >
            <div>
              <h3 className="font-extrabold text-2xl mb-2">{project.name}</h3>
              <p className="text-blue-200 font-semibold mb-2">
                By: {project.createdBy.displayName}
              </p>
              <h2 className="text-cyan-300 font-bold mb-1">Assigned Users:</h2>
              <p className="mb-2">{project.assingnedUsersList.length} users</p>
              <p className="font-bold mb-2">
                Due by: {project.createdAt.toDate().toDateString()}
              </p>
              <p className="text-xs text-blue-100 italic">
                {project.createdAt &&
                  formatDistanceToNow(project.createdAt.toDate(), {
                    addSuffix: true,
                  })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProjectList;