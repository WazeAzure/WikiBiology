import React, { Component, useEffect, useRef, useState } from 'react';
import { Redirect, Navigate } from 'react-router-dom';

function Signup(props) {
    const [warningEmail, setWarningEmail] = useState(false);
    const [warningUsername, setWarningUsername] = useState(false);
    const [warningSucceed, setWarningSucceed] = useState(false);
    const [message, setMessage] = useState();

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();

      fetch("https://wiki-biology-backend.herokuapp.com/signup", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({username: username.current.value, email: email.current.value, password: password.current.value})
      }).then(res => res.json()).then((res) => {
        console.log(res);
        if(res.status == 3){
          setWarningUsername(true);
          setWarningEmail(false);
          setWarningSucceed(false);
          setMessage(res.message);
        } else if(res.status == 4){
          setWarningUsername(false);
          setWarningEmail(true);
          setWarningSucceed(false);
          setMessage(res.message);
        } else if(res.status == 1){
          setWarningEmail(false);
          setWarningUsername(false);
          setWarningSucceed(true);
          setMessage(res.message);
        }
      })
    }

    return(
      <div className="signin">
      <div className="signin-container" style={{margin: "auto", width: "80%"}}>
        <div className="signin-left">
          <h1>Sign Up</h1>
          <h3>Nice to meet you!</h3>
          <p>By signing up to WikiBiology you agree to our <a href="https://www.termsfeed.com/live/a8cace90-f88e-41c2-a215-8f15deb19150">Terms of Use</a> and <a href="https://www.privacypolicies.com/live/e90b383c-6e6c-4f42-95fa-571b46b1f2e4">Privacy Policies</a></p>
        </div>
        <div className="signin-right">
        {
          warningUsername && (<section style={{border: "1px solid red", backgroundColor: "rgba(255,192,199,0.7)"}}><p>{message}</p></section>)
        }
        {
          warningEmail && (<section style={{border: "1px solid red", backgroundColor: "rgba(255,192,199,0.7)"}}><p>{message}</p></section>)
        }
        { warningSucceed && (<><p>{message}</p><Navigate replace to="/" /></>)}
          <p><span style={{color:"red"}}>*</span> indicates a required field</p>
          <form style={{overflow: "visible"}}>
            <label for="user-name">Username <span style={{color:"red"}}>*</span></label>
            <input name="user-name" type="text" placeholder="username" ref={username} />
            <label for="user-email">Email <span style={{color:"red"}}>*</span></label>
            <input name="user-email" type="text" placeholder="youremail@mail.com" ref={email} />
            <label for="user-pw">Password <span style={{color:"red"}}>*</span></label>
            <input type="password" name="user-pw" placeholer="........"  ref={password} />
            <button type="submit" value="Submit" onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
      </div>
    )
}

export default Signup;
