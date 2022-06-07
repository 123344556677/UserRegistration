import React from 'react'
import './Navbar.css'
import  { useState,useEffect } from 'react';

const Navbar = (props) => {
    const [user,setuser]=useState(JSON.parse(localStorage.getItem('profile')));
    const logout=()=>{
        window.localStorage.setItem("loggedin",false);
        localStorage.clear();
        props.navvalues();
    }
  return (
    <>
    <div className="container">
    
    <nav className="navbar navbar-expand-lg mt-3  navbar-dark shadow-5-strong">
        { 
        user?
          <h3 className="title">{user.profile.firstname}</h3> 
          :
          <h3 className="title">Username</h3>
        }
      <button className="navbar-toggler mt-3" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
   <span className="navbar-toggler-icon"></span>
  </button>

 
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mx-auto  ">
             <a href="" className="nav-link links  ml-3"> <li className="nav-item">
                  Home
              </li></a>
              <a href="" className="nav-link links ml-3"> <li className="nav-item">
                  About
              </li></a>
              <a href="" className="nav-link links ml-3"> <li className="nav-item">
                  Portfolio
              </li></a>
              <a href="" className="nav-link links ml-3"> <li className="nav-item">
                  Testimonial
              </li></a>
              <a href="" className="nav-link links ml-3"> <li className="nav-item">
                  Pricing
              </li></a>
              <a href="" className="nav-link links ml-3"> <li className="nav-item">
                  Blog
              </li></a>
               <a href="" className="nav-link links ml-3"> <li className="nav-item">
                Contact
              </li></a>
          </ul>
          <button className="btn btn-primary" onClick={logout}>Log Out</button>
          </div>

    </nav>
    </div>
    
    </>
  )
}

export default Navbar