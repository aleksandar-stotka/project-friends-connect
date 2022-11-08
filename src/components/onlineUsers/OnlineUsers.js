import "./OnlineUsers.css";
import { useCollection } from "../../hooks/useCollection";
import { Link } from "react-router-dom";
import React from "react";
import Avatar from "../avatar/Avatar";
import { useState } from "react";
import { projectFirestore } from "../../firebase/config";
import { AuthContext } from "../../context/AuthContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import NewChatForm from "../newChatForm/NewChatForm";
import ChatWindow from "../chatWindow/ChatWindow";

function OnlineUsers() {
  const { documents, error } = useCollection("users");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  ///////////////////////
  const { currentUser } = useAuthContext();

  const hadndleSearch = async () => {
    projectFirestore
      .collection("users")
      .where("displayName", "==", username)
      .get(projectFirestore)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const handleKey = (e) => {
    e.code === "Enter" && hadndleSearch();
  };
  /*const handleSelect = async () => {
    const combainID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await projectFirestore.collection(
        projectFirestore,
        "chats",
        combainID
      );
      if (!res.exists()) {
        await addDocument(res, "chats", { messages: [] });

        await updateDocument(useCollection("projects", currentUser.uid), {
          [combainID + "userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combainID + ".date"]: serverTimestap(),
        });
        await updateDocument(useCollection("projects", currentUser.uid), {
          [combainID + "userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combainID + ".date"]: formatDistanceToNow(),
        });
      }
    } catch (err) {
      console.log(err);
    }
  };*/
  return (
    <>
      {err && <span>User Not found</span>}
      {user && (
        <div>
          <img src={user.photoURL} alt="" />
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
              {user.online && <span className="online-user"></span>}
              <span>{user.displayName}</span>
              <Avatar src={user.photoURL} />
              <p>{user.message}</p>
            </div>
          ))}
        <NewChatForm />
        <ChatWindow />
      </div>
    </>
  );
}

export default OnlineUsers;
