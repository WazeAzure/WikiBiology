import { React, useEffect, useState, useRef } from 'react';
import './CommentBox.css';

import { useOpenReply } from './Messages/index.js';

function CommentBox(props){

  const changeOpenReply = useOpenReply();

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
            changeOpenReply();
          }}>CANCEL</button>
          </>
        )}
      </form>
    </div>
  )
}

export default CommentBox ;
