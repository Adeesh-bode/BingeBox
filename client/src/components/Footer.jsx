import React from 'react';
import img from "../assets/tmdblogo.svg";
import  styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
        <img src={img} alt='copyright-logo' />
    </Container>
  )
};

const Container = styled.div`
    width: 100%;
    padding: 1vh 1vw;
    position: fixed;
    bottom:0;
    z-index: 9;
    /* position: static;
    bottom: 100%; */
    /* margin-top:90% ; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    img{
        width: 15vw;
        /* height: fit-content; */
    }
`;



