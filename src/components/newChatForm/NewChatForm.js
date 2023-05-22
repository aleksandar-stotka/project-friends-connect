import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { timestamp } from "../../firebase/config";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import { useRef } from "react";
import './newChatForm.scss'
function NewChatForm() {
  const { user } = useAuthContext();

  const { addDocument } = useFirestore("messages");

  const [message, setMessage] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const chat = {
      name: user.displayName,
      message: message,
      createdAt: timestamp.fromDate(new Date()),
      id:user.uid,
      photo:user.photoURL

    };
    await addDocument(chat);
    setMessage("");
    console.log(chat, "chat");



  };

  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder="Type a message "
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="btn" type="submit">
          enter
        </button>
      </form>
    </div>
  );
}

export default NewChatForm;
