import { configureStore, createSlice } from "@reduxjs/toolkit";

let dark = createSlice({
    name : "dark",
    initialState : "light",
    reducers :{
        ToggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

const Stars = 2000;
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(800);
  const [rewidth, setReWidth] = useState(1920);
  const [reheight, setReHeight] = useState(-800);
  
  const [stars, setStars] = useState([]);
  const [restars, setRestars] = useState([]);

  useEffect(() => {

    const createRandomStar = () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 2;
      const animationDelay = Math.random() * 5;
      return { x, y, size, animationDelay };
    };

    const starsArray = Array.from({ length: Stars }, createRandomStar);
    setStars(starsArray);

    const reverseStar = () => {
      const x = Math.random() * rewidth;
      const y = Math.random() * reheight;
      const size = Math.random() * 2;
      const animationDelay = Math.random() * 5;
      return { x, y, size, animationDelay };
    };

    const restarsArray = Array.from({ length: Stars }, reverseStar);
    setRestars(restarsArray);
  }, []);