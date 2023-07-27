import firebase from 'firebase';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useEffect } from 'react';
 
const UserProjects = () => {
  const {documents} = useCollection("projects")
  const {user} = useAuthContext()
  
  console.log(user.uid,"user")

  const project = documents && documents.map(doc => doc.createdBy.id)
  
console.log(project)
  
 return (
  <div>
    {documents && documents.map((doc) => {
      return (
        <p>{doc.createdBy.displayName}</p>
      )

    })}

  </div>
 )

}




export default UserProjects