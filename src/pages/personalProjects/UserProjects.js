import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
 
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
          <>
           <p>{doc.details}</p>
          <h1>{doc.name}</h1>
          </>
         
          
        )
   
   })}

  </div>
 )

}




export default UserProjects