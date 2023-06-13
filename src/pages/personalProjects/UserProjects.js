import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { useCollection } from '../../hooks/useCollection';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects,'pro')

  //////////////  find collection --

 const {documents} = useCollection("projects")
 console.log(documents)
  /////

  useEffect(() => {
    const fetchProjects = async () => {
      const user = firebase.auth().currentUser;
      console.log(user.uid,"user")
      const createdBy = user ? user.uid : null;
      console.log(createdBy,"created")
      if (createdBy) {
        try {
          const projectsRef = firebase.firestore().collection('projects');
          const snapshot = await projectsRef.where('user', '==', createdBy).get();
          
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
      {documents && documents.map((project) => (
        <div key={project.id}>
          <p>Created by: {project.createdBy.displayName}</p>
          <h1>{project.details}</h1>
        </div>
      ))}
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
};

export default ProjectList;
