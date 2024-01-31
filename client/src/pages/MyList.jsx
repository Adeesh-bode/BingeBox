import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import Card from "../components/Card";
import styled from "styled-components";
import { getUsersLikedMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";

// import  Slider  from "../components/Slider";

export default function MyList() {
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovies(email));
    }
  }, [email]);

  return (
    <Container>
      <div className="content ">
        <h1>My List</h1>
        <div className="slides">
          {/* {
          movies.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            );
          })} */}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  /* padding-left: 5%; */
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top:0; 
  left:0;
  background-color: black;
  .content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    .slides{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      gap:20px;
    }
  }
`;