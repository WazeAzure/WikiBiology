import { React, useEffect, useState } from 'react';
import { onSnapshot, collection } from "firebase/firestore";
import db from '../../firebase.js';



function Comment(){
  const [comments, setComments] = useState([]);

  console.log(comments);
  useEffect(
    () =>
      onSnapshot(collection(db, "comments"), (snapshot ) =>
      setComments(snapshot.docs.map(doc => doc.data()))
    ),
    []
  );

  return(
    <div className="comment-section">
    </div>
  )
}

export default Comment;
