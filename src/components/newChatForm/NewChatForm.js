import React from "react";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { timestamp } from "../../firebase/config";
import { useFirestore } from "../../hooks/useFirestore";
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
    };
    await addDocument(chat);
    setMessage("");
    console.log(chat, "chat");
  };
  return (
    <div>
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