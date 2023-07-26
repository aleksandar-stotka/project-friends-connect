import firebase from 'firebase';
import { useCollection } from '../../hooks/useCollection';
 
const UserProjects = () => {
  const user = firebase.auth().currentUser;
  console.log(user.uid,"user")
  const createdBy = user ? user.uid : null;

  console.log(createdBy,"created")

  return (
    <div>helo</div>
  )

}




export default UserProjects