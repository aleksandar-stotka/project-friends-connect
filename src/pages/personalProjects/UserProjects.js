import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import Avatar from '../../components/avatar/Avatar';
import "./UserProjects.scss"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
 
const UserProjects = () => {
  const {documents} = useCollection("projects")
  const {user} = useAuthContext()
  

  

  

     
  
 
 
  const userMapDocuments = documents && documents.filter((doc) => doc.createdBy.id === user.uid);
  console.log(userMapDocuments,"usermap")

    if(userMapDocuments <= 0) {
      return (
        <p>no project</p>
      )
    }  



  
 return (
  <div className='grid lg:grid-cols-2  md:grid-cols-3 sm:grid-cols-2 '>
     
   {documents &&  userMapDocuments.map(project => {
        return (
            
          <Link className="max-w-sm rounded  overflow-hidden shadow-lg p-5 " to={`/projects/${project.id}`} key={project.id}>
          <h2>{project.name}</h2>
          <p>By {project.createdBy.displayName}</p>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div>
         

            <ul>
              <h2>assingnedUsersList:</h2>
              {project.assingnedUsersList.map((user) => (
                <li key={user.photoURL}>
                
                
                  <h4> <br></br> {user.displayName}</h4>  <Avatar src={user.photoURL} />
              
                </li>
              ))}
            </ul>
          </div>  
        </Link>
          

          
         
          
          
         
         
          
        )
   
   })}
   

  </div>
 )

}




export default UserProjects