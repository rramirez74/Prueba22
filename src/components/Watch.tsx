import React, { useState, useEffect} from 'react';
import './Watch.css';


function Watch() {
  const [secondHand, setSecondHand] = useState({})
  const [minsHand, setMinsHand] = useState({})
  const [hourHand, setHourHand] = useState({})

  useEffect(() => {  
    setInterval(() => {
      const time = new Date();
      const seconds = time.getSeconds();
      const mins = time.getMinutes();
      const hour = time.getHours();

      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
      const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
      
      setSecondHand({transform: `rotate(${secondsDegrees}deg)`});
      setMinsHand({transform: `rotate(${minsDegrees}deg)`});
      setHourHand({transform: `rotate(${hourDegrees}deg)`});
    }, 1000);

  }, [])

  return (
    <div className="clock1">
      <div className="outer-clock-face">
        <div className="marking marking-one"/>
        <div className="marking marking-two"/>
        <div className="marking marking-three"/>
        <div className="marking marking-four"/>
        <div className="inner-clock-face">
          <div style={hourHand} className="hand hour-hand"></div>
          <div style={minsHand} className="hand min-hand"></div>
          <div style={secondHand} className="hand second-hand"></div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
