import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";

export default React.memo(function CardSlider({ data, title }) {

  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
       // the main movement is by list ref tranform translate X...state change nominal to re render the component
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <Container
      className=""
      // showControls={showControls}
      onMouseEnter={() => setShowControls(true)} /// jb pure slider pe hover ho raha hai tbhi ontrols dikh rahe hai..........
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } `}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider flex" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } `}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
});
const Container = styled.div`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /* color: white; */
  }
  overflow:hidden;
  width: 100%;
  /* gap: 1rem; */
  position: relative;
  /* padding: 2rem 0; */

  display:flex;
  flex-direction:column;
  justify-content:space-between;
  /* gap:3vh; */
  align-items:flex-start;
  
  h1 {
    color:white;
    /* margin-left: 50px; */
    }
    .wrapper {
        display:flex;
        justify-content:space-between;
        align-items:center;
        
        .slider {
            display:flex;
            justify-content:space-between;
            align-items:center;
            
        width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      /* margin-left: 50px; */
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: fit-content;
      top:50%;
      bottom: 0;
      /* width: 50px; */
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2.5rem;
        color:white;
        font-weight: 600;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;