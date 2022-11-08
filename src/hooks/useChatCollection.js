import React from "react";
import { projectFirestore } from "../firebase/config";
import { useState } from "react";

const useChatCollection = (collection) => {
  const [error, setError] = useState(null);
  const [documents, seDocuments] = useState(null);

  const addDoc = async (doc) => {
    setError(null);
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err);
    }
  };

  return { error, addDoc };
};

export default useChatCollection;
