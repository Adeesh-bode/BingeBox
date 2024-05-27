// import React from 'react'
import titleImg from "../assets/homeTitle.webp";
// import TitleImg from "../assets/homeTitle.webp";
import styled from "styled-components";
import img from "../assets/home.jpg"; 
import BackgroundImg from '../components/BackgroundImg';

import { FaPlay } from "react-icons/fa";
// import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState , useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

// import { useLocation } from "react"
import { getGenres } from  "../store/index";

import { fetchMovies } from "../store/index";

import  Slider  from "../components/Slider";

export default function Netflix() {
  // const [ isScrolled , setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const location = useLocation();
  
  const genresLoaded = useSelector((state) =>state.netflix.genresLoaded);
  const movies = useSelector(( state )=> state.netflix.movies)

  useEffect(()=>{
    window.scroll(0,0)
  //     setIsScrolled(true);
    }
  , [location])

  useEffect(()=>{
    dispatch(getGenres());
  },[])

  useEffect(()=>{
    // console.log("ok-start");
    // dispatch(fetchMovies({type:"all"}));
    console.log(genresLoaded);
    if(genresLoaded){
      // console.log("ok-start");
      dispatch(fetchMovies({type:"all"}));
    }
  },[genresLoaded])

  return (
    <Content>
       
    <Container>
      <BackgroundImg Img={img} />
      <div className="opac-layer">
        <div className="img-div">
          <img src={titleImg} alt="BingeBox Title" />
        </div>
        <div className="btns">
          <button className='play' onClick={()=>navigate('/player')}><FaPlay  size={24}/>{" "}Play</button>
          <button className="info"><CiCircleInfo size={24} />{" "}More Info</button>
        </div>
      </div>
    </Container>
    <Featured>
        <Slider movies={movies} /> 
    </Featured>
    </Content>
  )
}

const Content = styled.div`
  position: absolute;
  z-index:9;
  top:0;
  left:0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  outline: 2px solid yellow;
`;

const Container = styled.div`
  height: 100vh;
  .opac-layer{
    position: absolute;
    top:0;
    left:0;
    z-index: 9;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap:60px;

    background-color: rgba(0,0,0,0.3);

    padding: 22vh 5vw;
    /* margin-bottom: 100px; */
    .img-div{
      width :50vw ;
      height: auto;
      img{
        width: 100%;
        object-fit: contain;
      }
    }
    .btns{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap:25px;

      button{
        font-size: 1.2rem;
        border: none;
        border-radius: 2px;

        padding: 0.5rem 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:7px;
      }
      .play{
        background-color: white;
      }
      .info{
        color: white;
        background-color: rgba(128,128,128,0.9);
      }
    }
  @media screen and (max-width:400px) {
    .img-div{
      width: 70vw;
      height: auto;
      img{
        /* width: ; */ 
        object-fit: contain;
      }
    }
  }
}
/* outline: 2px solid red; */
`;

const Featured = styled.div`
  width: 100%;
  /* outline: 2px solid red; */
    color:white;
    min-height: 100vh;
    background-color: black;
`;
