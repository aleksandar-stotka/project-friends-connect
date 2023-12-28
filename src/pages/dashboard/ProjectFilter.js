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
    <div>
      <nav>
        <div className='flex flex-col sm:flex-row gap-x-4 gap-y-2 items-center py-4 px-5 bg-blue-100 shadow-lg rounded-lg max-w-6xl mx-auto my-4'>
          <p className="text-gray-700 font-bold">Filter by:</p>
          {filterList.map((f) => (
            <button
              key={f}
              onClick={() => handleClick(f)}
              className={`text-white font-medium py-1 px-3 rounded-lg transition-colors ${
                currentFilter === f ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-400 hover:bg-blue-500'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default ProjectFilter;
