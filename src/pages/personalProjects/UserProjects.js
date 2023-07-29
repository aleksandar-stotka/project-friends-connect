import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import Avatar from '../../components/avatar/Avatar';
 
const UserProjects = () => {
  const {documents} = useCollection("projects")
  const {user} = useAuthContext()
  

  const mapCreatedById = documents && documents.map(doc => doc.createdBy.id)
  console.log(mapCreatedById,"map")
  const findUserId = user.uid

     
  
  const objectId = {
    createId: mapCreatedById,
    userUid:findUserId
  }
 
 
  const userMapDocuments = documents && documents.filter((doc) => doc.createdBy.id === user.uid);
  console.log(userMapDocuments,"usermap")

  


  console.log(objectId,"object")

  
 return (
  <div>
     
   {documents &&  userMapDocuments.map(doc => {
        return (
          
         <div key={doc.id}>
          <p key={doc.id}>{doc.details}</p>
          <h1>{doc.name}</h1>
          <h4>{doc.displayName}</h4>
            <p>Due by {doc.dueDate.toDate().toDateString()}</p>
            {doc.assingnedUsersList.map((user) => (
                  <li key={user.photoURL}>
                  
                    <p>By {doc.createdBy.displayName}</p>
                  
                    <h4>assingnedUsersList: <br></br> {user.displayName}</h4>  <Avatar src={user.photoURL} />
                
                  </li>
                ))}
         </div> 
          

          
         
          
          
         
         
          
        )
   
   })}
   

  </div>
 )

}




export default UserProjects