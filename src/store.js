//import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

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
