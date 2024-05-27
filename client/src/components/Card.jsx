import axios from 'axios';
import styled from "styled-components";
import vid from "../assets/video.mp4";

import React, { useState } from 'react';

import { PiDotOutlineLight } from "react-icons/pi";

import { FaPlayCircle } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '../utils/firebase-config';

export default function Card({movieData , isLiked=false}){
    // console.log(movieData);
    const [email, setEmail ] = useState(undefined);
    const [ isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(currentUser) setEmail(currentUser.email);
        else navigate ("/login");
    })

    const addToList = async () =>{
        console.log("Hello......");
        try {
            await axios.post("http://localhost:5000/api/user/add",{email, data:movieData })
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <Container onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} >
        
        { isHovered?  
        <div className="movie">
            <div className="vid-div">
                <video src={vid} alt="trailer" autoPlay loop controls muted />
            </div>
            <div className="details">
                <div className="title">{movieData.name}</div>
                <div className="actions">
                    <div className='left'>
                        <FaPlayCircle />
                        <BiSolidLike />
                        <BiSolidDislike />
                        <GoPlus title="Add to my list" onClick={addToList} />
                    </div>
                    <div>
                        <FaAngleDown />
                    </div>
                </div>
                <div className="genre">
                    {
                    movieData?.genres.map((genre,index) => (
                        <span key={index}>{genre} {movieData.genres.length -1 !== index && <PiDotOutlineLight /> }  </span>
                    ))
                    }   
                </div>
            </div>
        </div>
        : 
        <div className="banner-img-div">
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movieData" />
        </div>
        }

    </Container>
  )
}
const Container = styled.div`
    
    cursor: pointer; 
    
    /* overflow-clip-margin: 10vh; */
    overflow: visible;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    width: 17vw;
    height: 45vh;
    /* background-color: #9e9898; */
    
    /* padding: 1vh 1vw; */
    .banner-img-div{
        width: 100%;
        height: 100%;
        img{
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }
    .movie{
        color: white;

        /* background-color: #9e9898; */
        /* display: none; */
        /* gap:0px; */

        display: flex;
        flex-direction: column;
        align-items:flex-start;

        height: 100%;
        width: 100%;
        .vid-div{
            width: 100%;
            height: fit-content;
            video{
         
                /* outline: 2px solid red; */
                /* z-index: 99; */
                /* object-fit: cover; */
    
                width: 100%;
                height: 100%;
    
            }
        }
        .details{
            background-color: #1d1919;
            /* background-color: rgba(0,0,0,0.7); */
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between ;
            align-items: flex-start;
            gap:1vh;

            padding: 1vh 1vw;

            .title{
                font-size: 1rem;
                font-weight: 500;
            }
            .actions{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                svg{
                    color: white;
                    font-size: 1.7rem;
                }
                .left{
                    /* background-color: orange; */
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap:1vw;
                    
                }
            }
        }
    }

    /* &:hover{
        .banner-img-div{
            display: none;
        }
        .movie{
        }
    } */

`;
