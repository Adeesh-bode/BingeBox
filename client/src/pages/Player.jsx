import React from 'react';
import styled from "styled-components";

import { BsArrowLeft } from "react-icons/bs";
import vid from "../assets/video.mp4";

import { useNavigate } from "react-router-dom";


export default function Player() {
  const navigate = useNavigate();
  return (
    <Container>
        {/* <div className="player"> */}
            <div className="back" onClick={()=>navigate(-1)}><BsArrowLeft /></div>
            <video src={vid} alt='show-video' autoplay loop controls muted  />
        {/* </div> */}
    </Container>
  )
}
const Container = styled.div`
  background-color: black;
  position: absolute;
  top:0;
  left: 0;
  z-index: 9999;
  height:100vh;
  width: 100vw;
  .back{
      z-index: 99999;
      font-size: 2rem;
      color: white;
      position: absolute;
      top: 4vh;
      left:4vw;
    }
    video{
      height:100%;
      width: 100%;
      object-fit: cover;
  }
`;