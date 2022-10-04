import { useEffect, useRef, useState } from "react";
import "./App.css";
import Today from "./components/Today";
import Watch from "./components/Watch";

function App() {
  const isPause = useRef(false);
  const [image, setImage] = useState("");
  const url = "https://picsum.photos/200";

  const handleClick = () => {
    isPause.current = !isPause.current;
  };

  const fetchImage = async () => {
    const fetchImage = await fetch(url);
    const newImage = await fetchImage.url;
    return newImage;
  };

  const newImage = () => {
    if (!isPause.current) {
      fetchImage().then((tmpImage) => {
        //console.log(tmpImage);
        setImage(tmpImage);
      });
    }
  };

  useEffect(() => {
    setInterval(() => {
      newImage();
    }, 4000);
  }, []);

  return (
    <div className="app">
      <div className="neo">
        <div className="frameContainer">
          <h1 className="title">IMAGES</h1>
          <div className="containerToday">
            <div className="containerWatch">
              <Watch />
            </div>
            <div className="containerData" onClick={handleClick}>
              <Today img={image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
