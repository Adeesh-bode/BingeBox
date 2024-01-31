// import React from 'react';
import BackgroundImg from '../components/BackgroundImg';
import styled from "styled-components";
import Img from "../assets/login.jpg";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { firebaseAuth } from "../utils/firebase-config";
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login() {
  const navigate = useNavigate();
  const [ credential , setCredential] = useState({email:"", password:""});
  
  const handleChange = (e)=>{
    setCredential({...credential, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) =>{
    try {
      await signInWithEmailAndPassword(firebaseAuth, credential.email, credential.password).then((currentUser)=>{
        if(currentUser) {
          navigate('/');
          console.log(currentUser);
          const uid = currentUser.user.uid;
          console.log(uid);
        }
        else console.log("Incorrect Credetial");

      })
    } catch (error) {
     console.log(error); 
    }

  }


  return (
    <Container>
        <BackgroundImg Img={Img}/>
          <div className='opac-layer'>
            <div className="login-form">
              <h1>Login</h1>
              <div className="details">
                <input type="text" className="email" placeholder='Email Address' name="email"  
                  onChange={(e)=>handleChange(e)}
                />
                <input type="text" className="password" placeholder='Enter Password' name="password"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <button type="submit" className="submit" onClick={handleLogin}>Login</button> 
            </div>
          </div>
    </Container>
  )
}

const Container = styled.div`
  /* *{
    outline:2px solid red;
  } */
  position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

  display  :flex ;
  justify-content: center;
  align-items: center;
  .opac-layer{
    z-index:1;
    position: absolute;
    top:0;
    left:0;
    
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);

    display: flex;
    align-items: center;
    justify-content: center;
    .login-form{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap:10px;

      
      height: 43vh;
      width: 25vw;
      z-index:99;
      // centering a element 3rd method( flex , grid)
      /* position: absolute;
      top:500%;
      left:50%;
      transform: translate(-50%,-50%); */
      background-color: rgba(0,0,0,0.8);
      
      padding: 20px 25px;
      padding-top: 5px;
      h1{
        /* width: 100%; */
        /* text-align: center; */
        color:white;
        font-weight: 600;
      }
      .details{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap:20px;

        margin-bottom: 15px;

        input{
          height: 30px;
          padding: 0px 15px;
        }
      }
      .submit{
        padding:8px 10px;
          background-color : red;
          color:white;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          border-radius: 4px;
      }
    }
  }

`;