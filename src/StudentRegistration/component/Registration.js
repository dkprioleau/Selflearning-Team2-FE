import React from "react";
import "./Nav.js";
import lethelp from"./images/lethelp.png";
import M from "./images/M.png";
import "./Registration.css";

export default function Registration() {
  return (
    <>
    <nav>
    <ul>
      <li className='desktop-logo'>
        <img src={lethelp} alt="lethelp" />
      </li>
      <li className="mobile-logo">
      <img src={M} alt='M' />
      </li>
      <li>
      <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Sign In</a>
      </li>
    </ul>
  </nav>
      <body>
        <div className="registration">
          <img src={M} alt="M" />
          <span>Student Registration</span>
        </div>

        <secton>
          {" "}
          <div className="stdnt-info">
            <p>Please, provide the information below</p>
          </div>
        </secton>

        <main>
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <div>
                  <label className="fname">First Name* </label>
                  <input type="text" />
                </div>
                <div>
                  <span className="email">E-mail*</span>
                  <input type="text" />
                </div>
              </div>

              <div className="input-box">
                <div>
                  <span className="phnumber">Phone Number</span>
                  <input type="text" />
                </div>
                <div>
                  <span className="psword">Password*</span>
                  <input type="text" />
                </div>
              </div>
            </div>
            <button className="btn">Register</button>
          </form>
          <br></br>
          <footer>
            <a href="#">Already Registered? Sign In</a>
          </footer>
        </main>
      </body>
    </>
  );
}
