import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { projectFirestore } from '../../firebase/config';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Retrieve the currently logged-in user's ID
    const userId = firebase.auth().currentUser.uid;

    // Access the Firestore collection and query for the user's projects
    const projectsRef = projectFirestore.collection('projects');
    const query = projectsRef.where('userId', '==', userId);

    // Subscribe to the query snapshot
    const unsubscribe = query.onSnapshot((snapshot) => {
      const projectsData = [];
      snapshot.forEach((doc) => {
        projectsData.push({ id: doc.id, ...doc.data() });
      });
      setProjects(projectsData);
    });

    // Unsubscribe from the query when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          {project.details}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
