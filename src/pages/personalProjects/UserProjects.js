import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';// Custom Auth Context
import { firestore } from 'firebase/firebase'; // Firebase Firestore Config
import { useCollection } from '../../hooks/useCollection';
function UserProjects() {
  const { currentUser } = useAuthContext();
  const {documents} = useCollection("projects") // Custom Auth Hook to get current user
  const [projects, setProjects] = useState([]);
  console.log(projects,"userProjects")

  useEffect(() => {
    if (currentUser) {
      const userProjectsRef = firestore.useCollection('projects').where('userId', '==', currentUser.uid);
      const unsubscribe = userProjectsRef.onSnapshot((snapshot) => {
        const userProjects = snapshot.docs.map((doc) => doc.data());

        setProjects(userProjects);
      });

      return () => unsubscribe(); // Clean up the listener when the component unmounts
    }
  }, [currentUser]);


  return (
    <div>
      <h1>Your Projects</h1>
      <ul>
        {projects && projects.map((project) => (
          <li key={project.id}>{project.details }</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProjects;
