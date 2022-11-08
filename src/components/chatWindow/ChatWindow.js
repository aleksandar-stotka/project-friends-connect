import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./ChatWindow.css";
import { useRef } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useState } from "react";

function ChatWindow() {
  const { documents } = useCollection("messages");
  const { user } = useAuthContext();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [documents]);
  return (
    <>
      <div className="conatiner">
        <div className="messages">
          {documents &&
            documents.map((doc) => {
              return (
                <div className="single" key={doc.id} ref={messagesEndRef}>
                  <p className="created-at">
                    {" "}
                    {doc.createdAt &&
                      formatDistanceToNow(doc.createdAt.toDate(), {
                        addSuffix: true,
                      })}
                  </p>
                  <span className="name">{doc.name}:</span>
                  <span className="message">{doc.message}</span>
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
