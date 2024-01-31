import React from 'react'; // rfc
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import styled from "styled-components";

// import Login from "./pages/Login";      //  PATA LAGANA Ye kaise kya already imported dikha rahe hai...
import Signup from "./pages/Signup.jsx";
import Netflix from "./pages/Netflix.jsx";
import Login from './pages/Login.jsx';
import MyList from './pages/MyList.jsx';
import Movies from './pages/Movies.jsx';
import TvShows from './pages/TvShows.jsx';
import Player from './pages/Player.jsx';

import Footer from './components/Footer.jsx';
import Header from "./components/Header.jsx";

import styled from "styled-components";

export default function App() {
  return (
    <Container>
    <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/' element={<Netflix />}  exact/>
          <Route path='/movies' element={<Movies />} exact />
          <Route path='/tvshows' element={<TvShows />} exact />
          <Route path='/mylist' element={<MyList /> } exact />
          <Route path='/player' element={<Player /> } exact />
        </Routes>
        <Footer />
    </BrowserRouter>
    </Container>
  )
}


const Container = styled.div`
  max-width: 100vw;
  background-color: black;
  /* *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /* color: white; */
  */
  ::-webkit-scrollbar{
    display: none;
    
  }
`;