import React, { useState } from 'react';
import {FaCommentAlt,FaLaptopCode}from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate  = useNavigate();
    return (
        <header class="header">
 		    <h1> <a href="#">Brand<span>Radiator</span><span><FaLaptopCode/></span></a></h1>
             <div style={{marginLeft:"90%"}}>
              <button onClick={()=>{ navigate("/login")}}  style={{padding:"10px",fontSize:"14px",borderRadius:"50%"}}> SignIn</button>
              <button onClick={()=>{ navigate("/signup")}}  style={{padding:"10px",fontSize:"14px",borderRadius:"50%"}}>SignUp</button>
             </div>
        </header>
  
    );
};

export default Header;