import React from 'react';
import "./Login.css";
import {loginUrl} from "./spotify"
function Login() {
  return (
    <div className="login">
     <img className="login_logo"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUeqU1nuU3Bpz469k4hUm291dAQGZdsisctfpzHrQ&s"

     />
     <a href={loginUrl}>Login with spotify</a>
    </div>
  )
}

export default Login
