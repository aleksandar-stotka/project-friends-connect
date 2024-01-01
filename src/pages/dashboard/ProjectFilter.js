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
        <div className='flex flex-col sm:flex-row gap-x-4 gap-y-2 items-center py-4 px-5  shadow-lg rounded-lg max-w-6xl mx-auto my-4'>
          <h1 className="text-blue-200 font-bold">Filter by:</h1>
          {filterList.map((f) => (
            <button
              key={f}
              onClick={() => handleClick(f)}
              className={`text-white font-medium py-1 px-3 rounded-lg transition-colors ${
                currentFilter === f ? 'bg-blue-400 hover:bg-blue-200' : 'bg-blue-500 hover:bg-blue-500'
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
