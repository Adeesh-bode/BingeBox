// import React from 'react';
import BackgroundImg from "../components/BackgroundImg";
import styled from "styled-components";
import Img from "../assets/login.jpg";

import { firebaseAuth } from '../utils/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// import { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [ startButton ,setStartButton ] = useState(false);
  const [ credential, setCredential ] =  useState({email:"", password:""});
  
  const handleSignUp = async (e)=>{
    console.log(credential);
    // const Auth = getAuth();
    // console.log(credential);
    // console.log(credential.email);
    // console.log(credential.password);
    // console.log(password);
    // console.log(email);
    
    const { email, password} = credential;
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password).then((userCredential)=>{
        const user = userCredential.user;
        // console.log(user);
        // console.log(userCredential);
      })
    }catch (error) {
      console.log(error);
    }
  }
  
  const handleChange= (e)=>{
    setCredential( { ...credential ,[e.target.name]: e.target.value ,})
    console.log(credential);
  }

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (currentUser)=>{
      try {
        if(currentUser){
          navigate('/');
          // export const signupuid =currentUser.user.uid;
          const uid =currentUser.user.uid;
          console.log(uid);
        }
        else{
          console.log("User is signed out")
        }
      } catch (error) {
        console.log(error);
      }
    })
  },[])
  
  return (
    <Container>
        <BackgroundImg Img={Img} />
          <div className='signup-content'>
            <div className="big-text">Unlimited movies, TV shows <br /> <span>& more</span> </div>
            <div className="small-text">Watch anywhere, Cancel anytime</div>
            <div >Ready to watch? Enter yor email to create or restart membership</div>
            <div className="signup-form">
              <div className="details">
                <input type="text" className="email" placeholder='Email Address' name='email' 
                  onChange={(e)=>handleChange(e)}
                />
                { startButton? 
                <input type="text" className="password" placeholder='Enter Password' name='password'
                  onChange={(e)=>handleChange(e)}
                />:
                <button className="getstarted" onClick={()=>{setStartButton(true)}}>Get Started</button>
              }
              </div>
              <button type="submit" className="submit" onClick={handleSignUp}>Sign Up</button> 
            </div>
          </div>
    </Container>
    )
}

const Container = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    
    .signup-content{
      position: absolute;
      top: 0;
      left: 0;
      background-color :rgba(0,0,0,0.5) ;
      width: 100vw;
      height: 100vh;
  
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:10px;
      color:white;
      
      .big-text{
        font-size :3.1rem ;
        font-weight: 700;
        margin-bottom: 5px;
        text-align: center;
        line-height: 0.7em;
        span{
          font-size :2.1rem ;
        }
      }
      .small-text{
        font-weight: 600;
        font-size: 1.7rem;
        color:rgb(199, 193, 193);
      }

      .signup-form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap:15px;
        .details{
          height: 40px;
          input{
            border: none;
          }
          .email{
              height: 100%;
              width:32vw;  
              padding:0px 20px;
              font-size: 0.9rem ;
          }
          .getstarted {
            height: 100%;
            background-color: red;
            color:white;
            width: 18vw;
            border: none;
            font-weight: 500;
            font-size: 0.9rem;
          }    
          .password{
            padding:0px 20px;
            height: 100%;
            width: 22vw;
            border-left: 2px solid black;
            /* transition: expandRight 600ms ease-in ; */
          }    
          /* @keyframes expandRight {
            0%{ width:0vw }
            100%{ width:22vw } 
          } */
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