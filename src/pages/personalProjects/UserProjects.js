import firebase from 'firebase';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useEffect } from 'react';
 
const UserProjects = () => {
  const {documents} = useCollection("projects")
  const {user} = useAuthContext()
  

  const mapCreatedById = documents && documents.map(doc => doc.createdBy.id)
  const findUserId = user.uid
  
  const objectId = {
    createId: mapCreatedById,
    userUid:findUserId
  }
  console.log(objectId,"object")
console.log(mapCreatedById,"createdById")
console.log(findUserId,"find user id")
  
 return (
  <div>
   
    <p>{user.displayName}</p>

  </div>
 )

}




export default UserProjects