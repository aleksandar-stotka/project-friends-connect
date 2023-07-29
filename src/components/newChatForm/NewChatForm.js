import React, { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import "./newChatForm.scss";

function NewChatForm() {
  const { user } = useAuthContext();
  const { addDocument } = useFirestore("messages");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chat = {
      name: user.displayName,
      message: message,
      createdAt: timestamp.fromDate(new Date()),
      id: user.uid,
      photo: user.photoURL,
    };

    try {
      await addDocument(chat);
      console.log("Chat message added successfully:", chat);
      setMessage("");
    } catch (error) {
      console.error("Error adding chat message:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="btn" type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}

export default NewChatForm;
