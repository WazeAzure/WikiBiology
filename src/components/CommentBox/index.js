import { React, useEffect, useState, useRef } from 'react';
import { onSnapshot, collection } from "firebase/firestore";
import db from '../../firebase.js';
import './CommentBox.css';
import {useMainContext} from '../../Context/Context';

function TopCommentBox(props){

  const {setMessageReset, setCommentIncrement} = useMainContext();

  const message = useRef(null);
  const [showCommentLine, setCommentLine] = useState(false);

  const [showButtons, setShowButtons] = useState(false);

  const [enableBtn, setEnableBtn] = useState(true);

  const commentFocus = () => {
    setCommentLine(true);
    setShowButtons(true);
  }

  const commentFocusOut = () => {
    setCommentLine(false);
  }

  const commentStroke = (event) => {
    let currMessage = event.target.value;
    if(currMessage){
      setEnableBtn(false);
    } else {
      setEnableBtn(true);
    }
  }

  const sendComment = (event) => {
    event.preventDefault();
    const username = localStorage.getItem('user');
    fetch("https://wiki-biology-backend.herokuapp.com/new-comment", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user: username, messageData: message.current.value})
    }).then(() => {
      // reset entire comments and matching increment counter
      setMessageReset(prevState => !prevState);
      setCommentIncrement(10);
      //Delete text input, update comments, and disable COMMENT enableBtn
      message.current.value = "";
      setEnableBtn(true);
    })
  }

  return(
    <div className="comment-section">
      <form>
        <div style={{width: "100%"}}>
          <input autoFocus = {props.autoFocus} type="text" placeholder="Add a public comment..." ref={message} onFocus={commentFocus} onBlur={commentFocusOut} onKeyUp={commentStroke}/>
          {showCommentLine && <div className="comment-line"> </div>}
        </div>
        { showButtons && (
          <>
          <button className = "commentButton sendButton" disabled={enableBtn} onClick={sendComment}>COMMENT</button>
          <button className = "commentButton" style={{color: "gray", backgroundColor: "transparent"}} onClick={() => {
            setShowButtons(false);
            message.current.value = "";
          }}>CANCEL</button>
          </>
        )}
      </form>
    </div>
  )
}

export default TopCommentBox ;
