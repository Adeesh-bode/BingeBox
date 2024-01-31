// import React from 'react'

// import fetchDataFromUrl  from '../utils/api';
import styled from 'styled-components';

import React, { useEffect } from 'react';
import CardSlider from './CardSlider';


export default function Slider( { movies }) {

  // console.log(movies);

  const getMoviesFromRange =( from , to ) =>{
    return movies.slice(from,to);
  } 

  return (
    <Container>
      <CardSlider title='Trending' data= {getMoviesFromRange(0,10)}/>
      <CardSlider title='New Releases' data= {getMoviesFromRange(10,20)}/>
      <CardSlider title='Blockbuster movies' data= {getMoviesFromRange(20,30)}/>
      <CardSlider title='Popular on Netflix' data= {getMoviesFromRange(30,40)}/>
      <CardSlider title='Action Movies' data= {getMoviesFromRange(40,50)}/>
      <CardSlider title='Epics' data= {getMoviesFromRange(50,60)}/>
      {/* <CardSlider title='Trending' data= {getMoviesFromRange(70,10)}/> */}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 5vh 3vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;