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
  const userProject = objectId.filter(item => item.createdBy.uid === user.uid)
  console.log(userProject)
 

  


  console.log(objectId,"object")

  
 return (
  <div>
     
   

  </div>
 )

}




export default UserProjects