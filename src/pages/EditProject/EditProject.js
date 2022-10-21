import { setDate } from 'date-fns';
import React, { useEffect, useState } from 'react'
import Select from "react-select";
import { useCollection } from '../../hooks/useCollection';
import { useParams } from 'react-router-dom';
function EditProject() {


    const { id } = useParams();
    const { documents } = useCollection("projects");
    const projects = documents

     console.log(projects,'projects')
          
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [category, setCategory] = useState("");
    const [assingnedUsers, setAssingnedUsers] = useState([]);
    const [formError, setFormError] = useState(null);
  
     const submitHandler = (e) => {
        e.preventDefault()
        console.log(name,details,dueDate)
        

        

     }
    
     





     

    
  return (
    <div>
         <form onSubmit={submitHandler} >
        <label>
          <span>Project Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          
          
          />
        </label>
        <label>
          <span>details:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>date:</span>
          <input
             required
             type="date"
             onChange={(e) => setDueDate(e.target.value)}
             value={dueDate}
         
          />
          <label>
            <span>Project category:</span>
            <Select
            
            />
          </label>
          <label>
            <span>Assing to:</span>

            <Select
              onChange={(option) => setCategory(option)}
            
            />
          </label>
        </label>
        <button style={{ marginBottom: "1em" }} className="btn">
          Add Event
        </button>
       
      </form>

      
    
    </div>
  )
}

export default EditProject