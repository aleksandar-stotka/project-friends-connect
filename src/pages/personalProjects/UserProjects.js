import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { useCollection } from '../../hooks/useCollection';


const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects,'pro')

  useEffect(() => {
    const fetchProjects = async () => {
      const user = firebase.auth().currentUser;
      const createdBy = user ? user.uid : null;

      if (createdBy) {
        try {
          const projectsRef = firebase.firestore().collection('projects');
          const snapshot = await projectsRef.where('createdBy', '==', createdBy).get();
          
          const projectsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          
          setProjects(projectsData);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>Created by: {project.createdBy}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
