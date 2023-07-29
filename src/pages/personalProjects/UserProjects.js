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
 
 

  


  console.log(objectId,"object")

  
 return (
  <div>
     
   {documents &&  mapCreatedById.map(doc => {
    if(doc === findUserId) {
      return (
        <p>{doc.name}</p>
      )

    }
   
   })}

  </div>
 )

}




export default UserProjects