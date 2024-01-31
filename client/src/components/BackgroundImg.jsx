import React from 'react'
// import Img from "../assets/login.jpg"
import styled from 'styled-components';

export default function BackgroundImg({Img}) {
  return (
    <Container>
        <img src={Img} alt='-'/>
    </Container>
  )
}

const Container = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img{
        width: 100vw;
        height: 100vh;
        object-fit: fill;
    }
    @media screen and (max-width:400){
      /* img{
        object-fit: cover;  
      }     */
    }  
`; 
