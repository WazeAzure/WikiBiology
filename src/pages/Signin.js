import React, { Component, useEffect, useRef, useState } from 'react';
import { Redirect, Navigate } from 'react-router-dom';

function Signin(props) {

    const [warning, setWarning] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState();

    const email = useRef(null);
    const password = useRef(null);

    useEffect(() => {
      if(localStorage.getItem('isLoggedIn') == "1"){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    })

    const handleSubmit = (event) => {
      event.preventDefault();

      // login method;
      fetch('https://wiki-biology-backend.herokuapp.com/post-login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: email.current.value, password: password.current.value})
      }).then(res => res.json()).then((res) => {
        console.log(res);
        if(res.status == 0){
          setWarning(true);
          setRedirect(false);
        } else if(res.status == 1) {
          setWarning(false);
          setRedirect(true);

          // set local Storage
          localStorage.setItem("isLoggedIn", "1");
          localStorage.setItem("user", res.user);
        }
      })
    }

    return(
      <div className="signin">
      <div className="signin-container" style={{margin: "auto", width: "80%"}}>
        <div className="signin-left">
          <h1>Login</h1>
          <h3>Good to see you again!</h3>
          <p>By logging in to WikiBiology you agree to our <a href="https://www.termsfeed.com/live/a8cace90-f88e-41c2-a215-8f15deb19150">Terms of Use</a> and <a href="https://www.privacypolicies.com/live/e90b383c-6e6c-4f42-95fa-571b46b1f2e4">Privacy Policies</a></p>
        </div>
        <div className="signin-right">
        { warning && (<section style={{border: "1px solid red", backgroundColor: "rgba(255,192,199,0.7)"}}><p>Please input the correct email or password</p></section>)}
        { redirect && <Navigate replace to="/" />}
          <p><span style={{color:"red"}}>*</span> indicates a required field</p>
          <form style={{overflow: "visible"}} onSubmit={handleSubmit}>
            <label for="user-email">Email <span style={{color:"red"}}>*</span></label>
            <input name="user-email" type="text" placeholder="youremail@mail.com" ref={email}/>
            <label for="user-pw">Password <span style={{color:"red"}}>*</span></label>
            <input type="password" name="user-pw" placeholer="........" ref={password} />
            <span style={{fontWeight: "bold", paddingBottom: "1.5rem"}}><a href="/signup">Forgot Password?</a></span>
            <br />
            <button type="submit" value="Submit" onClick={handleSubmit}>Log in</button>
          </form>
          <hr />
          <p>Don't have account? <a href="#/signup">Sign Up</a></p>
        </div>
      </div>
      </div>
    )
}

export default Signin;
