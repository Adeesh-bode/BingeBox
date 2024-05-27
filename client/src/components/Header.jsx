import logo from "../assets/logo.png";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";

import React, { useState, useEffect } from 'react';


import { useNavigate } from "react-router-dom";


export default function Header() {

  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ showLogin , setShowLogin] = useState(false); 
  const  navigate = useNavigate();

  useEffect(() => {
    const handleScroll = ()=>{
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    return ()=>{
        window.removeEventListener('scroll', handleScroll);
    }

  }, [isScrolled]);
  

  
  const Container = styled.div` 
    /* position: absolute; */
    /* position: sticky; */
    position:fixed;
    z-index:10;
    top:0;
    left:0;

    width: 100vw;
    height: 60px;
    
    background-color: ${isScrolled ? 'black' : 'transparent'};

    /* margin-top: 2vh; */
    padding: 1vh 5vw;

    
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*  @media screen(max-width: 385) {
        
    } */
    .left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap:2vw;
        
        width:fit-content ;
        height: 100%;
        .img-div{
            cursor: pointer;
            height: 100%;
            img{
                object-fit: contain;
                width: 100%;
                height: 100%;
            }
        }
        .navigations{
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap:2vw;

            color:white;
            font-size: 1.3rem;
            font-weight: 500;
        }
    }    
    .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:2vw;

        width:fit-content;
        height: 100%;

        svg{
            color:red;
            font-size: 1.4rem;
        }
        svg:first-child{
            color:white;

        }
        button{
            padding: 8px 8px;
            background-color: red;
            color:white;
            
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 600;
        }
    }
    /* @media screen and (max-width:400){
        
    }   */
`;
return (
  <Container>
      <div className="left">
          <div className="img-div" onClick={()=>navigate("/")}>
            // here bingebox logo
              <img src={logo} alt="logo" /> 
          </div>
          <div className="navigations">
              <div onClick={()=>navigate("/")} >Home</div>
              <div onClick={()=>navigate("/tvshows")} >Tv Shows</div>
              <div onClick={()=>navigate("/movies")} >Movies</div>
              <div onClick={()=>navigate("/mylist")} >My List</div>
          </div>
      </div>
      <div className="right">
          <FaSearch />
          <FaPowerOff />
          <button className="action" onClick={()=>{

              navigate(`/${showLogin? "signup":"login" }`);
              setShowLogin(!showLogin);
          }}>
              { showLogin? "SignUp": "Login "}
          </button>
      </div>
  </Container>
)
}
