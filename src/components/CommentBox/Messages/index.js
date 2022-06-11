import React, { useRef, useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import './Messages.css';
import CommentBox from '../CommentsBox.js';
import SubMessages from './SubMessages';

const showReply = React.createContext();

export function useOpenReply(){
  return useContext(showReply);
}


function Messages(props){

  const likeIcon = React.createRef();
  const numLikes = React.createRef();

  const [arrowUp, setArrowUp] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  // Toggled when CANCEL button and REPLY button are pressed
  const changeOpenReply = () => {
    setOpenReply(prevState => prevState = !prevState);
  }

  // Toggle arrow up and down
  let arrow = <FaIcons.FaCaretDown />;

  const changeArrow = () => {
    setArrowUp(prevState => prevState = !prevState);
  }

  if(arrowUp){
    arrow = <i className="fas fa-caret-up" />;
  } else {
    arrow = <i className="fas fa-caret-down" />;
  }

  // Like Message
  let toggleLike = false;
  let likes = props.likes;
  const likeComment = () => {
    toggleLike = !toggleLike;
    if(toggleLike){
      likes++;
      likeIcon.current.style.color = "#4688de";
    } else {
      likes--;
      likeIcon.current.style.color = "gray";
    }
    numLikes.current.innerHTML = likes;
  }

  const deleteMessage = () => {

  }

  return (
    <>
    <section className="message-container">
      <div className="message-user">{props.user}</div>
      <FaIcons.FaUserCircle className="fas fa-user-circle" />
      <div className="message-text">{props.message}</div>
      <section className="message-icons-container">
        <i ref={likeIcon} class="fas fa-thumbs-up"  onClick={likeComment}></i>
        <div ref={numLikes} onClick={likeComment}>{props.likes}</div>
        <FaIcons.FaThumbsDown className="fas fa-thumbs-down" />
        {
          !props.editable ? (
            <div onClick={changeOpenReply} style={{cursor: "pointer"}}>REPLY</div>
          ) : (
            <div onClick={deleteMessage} style={{cursor: "pointer"}}> DELETE</div>
          )
        }
      </section>
      <showReply.Provider value={changeOpenReply}>
        {openReply && <CommentBox autoFocus={true} />}
      </showReply.Provider>
      { props.replies.length > 0 && (
      <section className="arrow-replies" onClick={changeArrow}>
        {arrow}
        <div>View {props.replies.length} replies</div>
      </section>
      )
      }
      { arrowUp && (
        <section className="sub-messages">
          {
            props.replies.map(reply => (
              <SubMessages key={Math.random()} parentKey={props.useKey} subId={reply._id}
              user={reply.user} message={reply.message} likes={reply.likes} />
            ))
          }
        </section>
      )
      }
    </section>
    </>
  );
}

export default Messages;
