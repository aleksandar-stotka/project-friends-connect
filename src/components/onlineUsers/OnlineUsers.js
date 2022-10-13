import "./OnlineUsers.css";
import { useCollection } from "../../hooks/useCollection";
import { Link } from "react-router-dom";
import React from "react";
import Avatar from "../avatar/Avatar";

function OnlineUsers() {
  const { documents, error } = useCollection("users");
 
 console.log(documents,'online users')
///////////////////////
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
         // eslint-disable-next-line react/jsx-no-undef
       
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        
        ))}
    </div>
  );
}

export default OnlineUsers;
