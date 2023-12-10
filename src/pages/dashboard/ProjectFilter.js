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
      <nav className="bg-emerald-100 ">
        <div  className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
 
             <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
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
