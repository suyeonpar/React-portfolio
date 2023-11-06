//import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

// let dark = createSlice({
//     name : "dark",
//     initialState : "light",
//     reducers :{
//         ToggleTheme : (state) => state === "light" ? "dark" : "light"
//     }
// })

// const Stars = 2000;
//   const [width, setWidth] = useState(1920);
//   const [height, setHeight] = useState(800);
//   const [rewidth, setReWidth] = useState(1920);
//   const [reheight, setReHeight] = useState(-800);
  
//   const [stars, setStars] = useState([]);
//   const [restars, setRestars] = useState([]);

//   useEffect(() => {

//     const createRandomStar = () => {
//       const x = Math.random() * width;
//       const y = Math.random() * height;
//       const size = Math.random() * 2;
//       const animationDelay = Math.random() * 5;
//       return { x, y, size, animationDelay };
//     };

//     const starsArray = Array.from({ length: Stars }, createRandomStar);
//     setStars(starsArray);

//     const reverseStar = () => {
//       const x = Math.random() * rewidth;
//       const y = Math.random() * reheight;
//       const size = Math.random() * 2;
//       const animationDelay = Math.random() * 5;
//       return { x, y, size, animationDelay };
//     };

//     const restarsArray = Array.from({ length: Stars }, reverseStar);
//     setRestars(restarsArray);
//   }, []);

export const createStars = (Stars, width, height, rewidth, reheight) => {
  const stars = [];
  const restars = [];

  const createRandomStar = (w, h) => {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const size = Math.random() * 2;
    const animationDelay = Math.random() * 5;
    return { x, y, size, animationDelay };
  };

  for (let i = 0; i < Stars; i++) {
    const star = createRandomStar(width, height);
    stars.push(star);

    const restar = createRandomStar(rewidth, reheight);
    restars.push(restar);
  }

  return { stars, restars };
};
