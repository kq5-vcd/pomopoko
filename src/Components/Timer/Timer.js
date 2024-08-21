import { useState, useEffect } from 'react';
import './Timer.css';


export const Timer = () => {
    const [defaultTime, setDefaultTime] = useState({
        minutes: 25,
        seconds: 0
    })
    const [time, setTime] = useState(defaultTime);
    const [isActive, setIsActive] = useState(false);
  
    const startTimer = () => {
      setIsActive(true);
    };
  
    const resetTimer = () => {
      setTime(defaultTime);
      setIsActive(false);
    };
  
    useEffect(() => {
      let interval = null;
  
      if (isActive) {
        interval = setInterval(() => {
          setTime((prevTime) => {
            let updatedSeconds = prevTime.seconds - 1;
            let updatedMinutes = prevTime.minutes;
  
            if (updatedSeconds < 0) {
              updatedSeconds = 59;
              updatedMinutes -= 1;

              if (updatedMinutes < 0) {
                updatedSeconds = 0;
                updatedMinutes = 0;
              }
            }
  
            return {
              minutes: updatedMinutes,
              seconds: updatedSeconds
            };
          });
        }, 1000);
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [isActive]);
  
    const formatTime = (time) => {
      const formattedMinutes = String(time.minutes).padStart(2, '0');
      const formattedSeconds = String(time.seconds).padStart(2, '0');
      return `${formattedMinutes}:${formattedSeconds}`;
    };
  
    return (
      <div>
        <h1>{formatTime(time)}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
};
