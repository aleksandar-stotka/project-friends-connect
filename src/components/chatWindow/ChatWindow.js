import React from "react";
import PropTypes from "prop-types";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./ChatWindow.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ChatWindow() {
  const { documents } = useCollection("messages");
  const { user } = useAuthContext();

  return (
    <>
      <div className="chat-window">
        <div className="messages">
          {documents &&
            documents.map((doc) => {
              return (
                <div className="single" key={doc.id}>
                  <span className="name">{doc.name}</span>
                  <span className="message">{doc.message}</span>
                  {doc.createdAt &&
                    formatDistanceToNow(doc.createdAt.toDate(), {
                      addSuffix: true,
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

ChatWindow.propTypes = {};

export default ChatWindow;
