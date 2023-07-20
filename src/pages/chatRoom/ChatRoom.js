import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import NewChatForm from "../../components/newChatForm/NewChatForm";
import ChatWindow from "../../components/chatWindow/ChatWindow";

import "./ChatRoom.scss";
function ChatRoom() {
  return (
    <div className="chat-window">
      <ChatWindow />
      <NewChatForm />
    </div>
  );
}

export default ChatRoom;
