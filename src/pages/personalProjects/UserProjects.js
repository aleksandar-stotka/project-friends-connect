import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
 
const UserProjects = () => {
  const {documents} = useCollection("projects")
  const {user} = useAuthContext()
  

  const mapCreatedById = documents && documents.map(doc => doc.createdBy.id)
  const findUserId = user.uid
    
     mapCreatedById.map(i => i)
     console.log(mapCreatedById,"map")
  
  const objectId = {
    createId: mapCreatedById,
    userUid:findUserId
  }
 

  


  console.log(objectId,"object")

  
 return (
  <div>
     
    he;oo

  </div>
 )

}




export default UserProjects