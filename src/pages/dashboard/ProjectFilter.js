// ProjectFilter.js
import { Link } from "react-router-dom/cjs/react-router-dom";

const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="w-full">
      <nav>
        <div className="flex flex-wrap gap-2 sm:gap-x-4 items-center justify-center py-6 px-4 sm:px-8 shadow-xl rounded-2xl max-w-4xl mx-auto my-6 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400">
          <h1 className="text-white font-extrabold text-lg mr-4 mb-2 sm:mb-0">Filter by:</h1>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {filterList.map((f) => (
              <button
                key={f}
                onClick={() => handleClick(f)}
                className={`capitalize font-semibold py-2 px-4 rounded-xl transition-all duration-200 shadow-sm
                  ${currentFilter === f
                    ? 'bg-white text-blue-600 border-2 border-blue-600 scale-105'
                    : 'bg-blue-600 text-white hover:bg-blue-500 hover:scale-105'}
                `}
              >
                {f}
              </button>
            ))}
          </div>
          <Link
            className="ml-auto bg-white text-blue-700 font-bold py-2 px-5 rounded-xl shadow-md border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-200"
            to="/"
          >
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default ProjectFilter;