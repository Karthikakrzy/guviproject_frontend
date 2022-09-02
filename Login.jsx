import "./login.css";
import React, { useContext } from "react";
//import { LoginContext } from "../../components/helper/Context";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [name1,setName1]=useState('');
  const [password1,setPassword1]=useState('');
 // const [loggedin, setLoggedin ] = useContext(LoginContext);
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
    const url='http://localhost:55885/api/login';
  axios.post(url,data).then((result)=>{
    
    alert(result.data);
     if(result.data=="success"){
      navigate('/bmicalculator')
     }
  }).catch((error)=>{
    alert(error);
  })}
  return (
    <>
      
      <div className="login bg">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">GoDiet</h3>
            <span className="loginDesc">
              don't eat LESS;just eat RIGHT
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Username"  className="loginInput" onChange={(e)=>handleName(e.target.value)}/>
              <input placeholder="Password" type="password" className="loginInput" onChange={(e)=>handlePassword(e.target.value)}/>
              
              <button className="loginButton" onClick={()=> handleSave()}>Log In</button>
                
             
              <button className="loginRegisterButton">
              <div onClick={()=> navigate('/register')}>Create a New Account</div> 
              </button>
            </div>
          </div>
        </div>
      </div>
  </>
  );
}
