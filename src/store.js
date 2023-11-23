// 별 배경
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