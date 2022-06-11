import React, { useEffect, useState, useRef } from 'react';
import Messages from './Messages';
// Main context
import {useMainContext} from '../../Context/Context';

function MessageScroll(){

  // When bool from Main Context changes. Re-render message list.
  const {messageReset, commentIncrement, setCommentIncrement} = useMainContext();

  //Make sure increment value in callback function for intersection Observer is up to date
  const commentIncrementRef = useRef(commentIncrement);

  const [messages, setMessages] = useState([]);
  const [showBottomBar, setShowBottomBar] = useState(true);

  // load up the first 10 comments. Do this either on application start or when a new comment is posted
  useEffect(() => {
    setShowBottomBar(true);
    fetch("/get-data", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({limitNum:10})
    }).then(res => res.json()).then(comments => {
      console.log("This is the comments " + comments)
      setMessages(comments);
    })
  }, [messageReset])

  //Intersection observer
  const observer = React.useRef(new IntersectionObserver(entries => {
    const first = entries[0];
    if(first.isIntersecting){
      fetch("/get-more-data", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({commentIncrement: commentIncrementRef.current})
      }).then(res => res.json()).then(comments => {
        if(comments.length > 0){
          setTimeout(() => {
            setMessages(prevState => [...prevState, ...comments])
          }, 3000)
        } else {
          setTimeout(() => {
            setShowBottomBar(false);
          }, 3000)
        }
        // We use comments.length just in case there are not 10 comments left
        setCommentIncrement(prevState => prevState += comments.length);
      })
    }
  }), {threshold: 1})


  //ensure comment increment is up to date
  useEffect(() => {
    commentIncrementRef.current = commentIncrement;
  }, [commentIncrement])

  //bottomBar will contain the bottomBar JSX Element
  const [bottomBar, setBottomBar] = useState(null);

  useEffect(() => {
    const currentBottomBar = bottomBar;
    const currentObserver = observer.current;
    if(currentBottomBar){
      currentObserver.observe(currentBottomBar);
    }

    return () => {
      if(currentBottomBar){
        currentObserver.unobserve(currentBottomBar);
      }
    }
  }, [bottomBar])

  return(
    <>
      {
        messages.map(message => (
          <Messages key={message._id} useKey={message._id}
          user={message.user} editable={message.editable}
          message={message.message} likes={message.likes}
          replies={message.replies} />
        ))
      }
      {
        messages.length > 9 && showBottomBar ? <div className="bottomBar" ref={setBottomBar}><div className="loader"></div></div> : null
      }
    </>
  )
}

export  default MessageScroll;
