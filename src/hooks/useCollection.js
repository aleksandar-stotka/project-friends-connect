import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current; ///use ref to prevent infinite lopp in useEffect

  useEffect(() => {
    let ref = projectFirestore.collection(collection);
    //let because maybe in the future we want to change something

    //
    /////gotovo
    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsubscribe = ref.onSnapshot(
      //realtime listener
      ///snapshot is the method , is gona fire function,
      // every time snaphot back from firestore collection
      (snapshot) => {
        //we want to cycle through the documents inside that snipeshot and update documents (setDocuments)
        let results = []; ///there we want to update documents
        snapshot.docs.forEach((doc) => {
          //docs is array of documents on snapShot
          results.push({ ...doc.data(), id: doc.id });

          //push new object and that object represent new documents
          ///data is function to get date from documents
          // include properties: name ,created, uid  and so on
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
    //fire what ever function is return in this hook,
    // invoke unsubscribe method
  }, [collection, query, orderBy]); //whenever collection is change ,
  // now we need real time listener, page-14

  return { documents, error };
};
