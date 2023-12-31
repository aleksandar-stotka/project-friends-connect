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
  // Additional code ...

  return (
    <>
      {err && <span className="text-red-600">User Not found</span>}
      {user && (
        <div className="flex flex-col items-center justify-center shadow-lg rounded-lg p-4 my-4 bg-[rgba(255,255,255,0.7)]">
          <Avatar src={user.photoURL} className="w-16 h-16" />
          <p className="text-gray-700">{user.displayName}</p>
        </div>
      )}
      <div className="max-w-5xl mx-auto p-5 shadow-lg rounded-lg bg-[#F5F7F8]">
        {error && <div className="text-red-600">{error}</div>}
        {documents && documents.map((user) => (
          <div key={user.id} className="flex items-center space-x-3 p-2 bg-blue-100 rounded-lg my-2">
            {user.online && <span className="bg-green-500 rounded-full h-3 w-3 m-1"></span>}
            <span className="text-gray-700">{user.displayName}</span>
            <Avatar src={user.photoURL} className="w-10 h-10" />
            <p className="text-gray-600">{user.message}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default OnlineUsers;
