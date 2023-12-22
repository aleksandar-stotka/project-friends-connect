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
      <nav >
        <div  className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 z-40'>
 
             <p className="text-custom-deepBlue font-bold">Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className="text-white  p-3"
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
