import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import CardSlider from "../components/CardSlider";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";

function Movies() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded); // isko  toh bina  useEffect k la liya..

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "movie" }));
    }
  }, [genresLoaded]);

  const [user, setUser] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser.uid);
    else navigate("/login");
  });

  return (
    <Container>
      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}  
        {/* observe homepage k movies and yaha jo movies by genre hai vo ek he  statee pe ho raha hai... */}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    padding-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default Movies;

























// import styled from "styled-components";
// // import Slider from "../components/Slider";
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";

// import { fetchDataByGenre, getGenres} from "../store/index";
// // import {  fetchMovies } from "../store/index";
// import  Slider from "../components/Slider"; 

// import Genre from "../components/Genre";

// export default function Movies() {

//   // so get genres you have to add a dispatch in useEffect(i.e for  llel loading ) and to subscribe to that useSelector ..
//   const dispatch = useDispatch();
//   // const genres = useSelector((state)=>state.netflix.genres);
//   const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
//   // const [ genre , setGenre ] = useState("Action");
  
//   const movies = useSelector((state)=>state.netflix.movies);
//   // console.log("Movies By genre");
//   console.log("Movies By genre");
//   console.log(movies);
//   // const moviesGenre = useSelector((state)=> state.netflix.moviesByGenre);

//   // console.log("Below are movies By genre")
//   // console.log(moviesGenre);
// // 
//   // console.log(movies);
//   // console.log(genres);

//   // console.log(genre);

//   // useEffect(()=>{
//   //   // const movieByGenre = getMovieByGenre(movies,genre);
//   // },[genre])

//   // const getMovieByGenre = (movies, genre)=>{
//   //   movieslist=[];
//   //   movies.filter((movie)=>{
      
//   //   })
//   // // }

//   // useEffect(()=>{
//   //   dispatch(getGenres())
//   // },[]) 

//   // useEffect(()=>{
//   //   if(genresLoaded){
//   //     dispatch(fetchMovies({type:"movie"}))
//   //   }
//   // },[genresLoaded]) // ye ab direct movie fetch by genre laega

//   useEffect(()=>{
//     // console.log(genre);
//     // console.log(genresLoaded);
//     if(genresLoaded){
//       // console.log(genre);
//       dispatch(fetchDataByGenre({type:"movie",genre}))
//     }
//   },[genresLoaded]) 

//   return (
//     <Container>
//     <Genre />    
//     <div className="movie-by-genre">
//           <Slider movies={movies}  />
//     </div>
//     </Container>
//   )
// }
// const Container = styled.div`
//   padding: 15vh 5vw;
//   width: 100%;
//   min-height: 100vh;

//   .input{
    
//   }
// `;