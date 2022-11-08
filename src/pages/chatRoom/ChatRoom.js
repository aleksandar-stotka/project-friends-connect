import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import NewChatForm from "../../components/newChatForm/NewChatForm";
import ChatWindow from "../../components/chatWindow/ChatWindow";
import { projectFirestore } from "../../firebase/config";
import { useState } from "react";
import { useRef } from "react";
import "./ChatRoom.css";
function ChatRoom() {
  return (
    <div className="chat-window">
      <ChatWindow />
      <NewChatForm />
    </div>
  );
}

export default ChatRoom;
