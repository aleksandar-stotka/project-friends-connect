import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import Avatar from '../../components/avatar/Avatar';
import "./UserProjects.scss";
import { Link } from 'react-router-dom';

const UserProjects = () => {
  const { documents } = useCollection("projects");
  const { user } = useAuthContext();

  // Ensuring userMapDocuments is always an array
  const userMapDocuments = documents ? documents.filter((doc) => doc.createdBy.id === user.uid) : [];

  if (userMapDocuments.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No projects</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-5">
        {userMapDocuments.map(project => (  // Safely mapping with an initialized array
          <Link className="max-w-sm rounded overflow-hidden shadow-lg p-5" to={`/projects/${project.id}`} key={project.id}>
            <h2>{project.name}</h2>
            <p>By {project.createdBy.displayName}</p>
            <p>Due by {project.dueDate.toDate().toDateString()}</p>
            <div>
              <ul>
                <h2>Assigned Users List:</h2>
                {project.assignedUsersList?.map((user) => (  // Optional chaining for safe access
                  <li key={user.photoURL}>
                    <h4><br></br> {user.displayName}</h4>  
                    <Avatar src={user.photoURL} />
                  </li>
                ))}
              </ul>
            </div>  
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserProjects;
