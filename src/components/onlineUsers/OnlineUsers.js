import "./OnlineUsers.scss";
import { useCollection } from "../../hooks/useCollection";
import React from "react";
import Avatar from "../avatar/Avatar";
import { useState } from "react";
import { projectFirestore } from "../../firebase/config";


function OnlineUsers() {
  const { documents, error } = useCollection("users");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err] = useState(false);
  ///////////////////////
  let userCaseName =  username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  //now make type username with UperrCase and LowerCase
  const hadndleSearch = async () => {
   await projectFirestore
      .collection("users")
      .where("displayName", "==", userCaseName)
      .get(projectFirestore)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
          console.log(doc.id, " => ", doc.data());
        }); 
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })
  };

  const handleKey = (e) => {
    e.code === "Enter" && hadndleSearch();
  };

 
  return (
    <>
      {err && <span>User Not found</span>}
      {user && (
        
        <div>
          <img src={user.photoURL} alt="" />
        <p>{user.displayName}</p>
        
        </div>
      )}
      <div className="user-list">
        <div className="search">
          <input
            type="text"
            placeholder="Find a user"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <h2>All Users</h2>
        {error && <div className="error">{error}</div>}
        {documents &&
          documents.map((user) => (
            // eslint-disable-next-line react/jsx-no-undef 

            <div key={user.id} className="user-list-item">
              {user.online && <span className="bg-on-line rounded-full h-3 w-3 m-1"></span>}
              <span className="text-white">{user.displayName}</span>
              <Avatar src={user.photoURL} />
              <p>{user.message}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default OnlineUsers;
