import "./register.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();

  const [name1,setName1]=useState('');
  const [password1,setPassword1]=useState('');

  const handleName=(value)=>{
    setName1(value);
  }
  
  const handlePassword=(value)=>{
    setPassword1(value);
  }
  
  const handleSave=()=>{
    const data = {
        USERNAME : name1,
      PASSWORD: password1,
      
    };
   // alert(data.name);
    const url='http://localhost:55885/api/User/AddUser';
    axios.post(url,data).then((result)=>{
      alert(result.data);
    }).catch((error)=>{
      alert(error);
    })
  }
  return (
    <div className="register">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GoDiet</h3>
          <span className="loginDesc">
          don't eat LESS;just eat RIGHT
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" id="name" className="loginInput" onChange={(e)=>handleName(e.target.value)}/>
            <input type="password" placeholder="Password" id="password" className="loginInput" onChange={(e)=>handlePassword(e.target.value)}/>
            <button className="loginButton" onClick={()=> handleSave()}>Sign Up</button>
            <button className="loginRegisterButton">
             <div onClick={()=> navigate('/login')}>Log into Account</div> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}