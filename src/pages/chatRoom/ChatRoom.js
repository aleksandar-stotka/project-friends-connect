import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import NewChatForm from "../../components/newChatForm/NewChatForm";
import ChatWindow from "../../components/chatWindow/ChatWindow";
import { projectFirestore } from "../../firebase/config";
import { useState } from "react";
function ChatRoom() {
  return (
    <div>
      <NewChatForm />
      <ChatWindow />
    </div>
  );
}

export default ChatRoom;
