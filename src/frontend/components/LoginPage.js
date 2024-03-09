import React from 'react'
import '../styles/LoginPage.css';

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export const LoginPage = () => {
  return (
    <div className="login-page">
        <h1>Login</h1>
        <form action="">
            <div className="input-box">
                <input type="email" placeholder="Email" name="email" id="email" required/>
                <MdEmail className="icon"/>
            </div>

            <div className="input-box">
                <input type="password" placeholder="Password" name="password" id="password" required/>
                <RiLockPasswordFill className="icon" />
            </div>

            <div className="remember-me">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <div className="login-button">
                <button type="submit">Login</button>
            </div>
            <div className="register-button">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
  )
}
