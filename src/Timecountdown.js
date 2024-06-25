import React, { useState, useEffect } from 'react';
import "./App.css"

const TimeCountDown = ({ initialBreakMinutes, initialSessionMinutes, initialSeconds, isPlay }) => {
  const [minutes, setMinutes] = useState(initialSessionMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isSession, setIsSession] = useState(true);
  
  useEffect(() => {
    let countdown;
    if (isPlay) {
      countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          const audio = document.getElementById("beep");
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (isSession) {
              setMinutes(initialBreakMinutes);
              setSeconds(0);
              audio.play();
            } else {
              setMinutes(initialSessionMinutes);
              setSeconds(0);
              audio.play();
            }
            setIsSession(!isSession);
          }
        }
      }, 1000);
    } else {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [isPlay, seconds, minutes, isSession, initialBreakMinutes, initialSessionMinutes]);

  useEffect(() => {
    setMinutes(initialSessionMinutes);
    setSeconds(initialSeconds);
    setIsSession(true);
  }, [initialSessionMinutes, initialSeconds, initialBreakMinutes]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div id='display'>
      <label id='timer-label'><h2>{isSession ? "Session" : "Break"}</h2></label>
      <div id='time-left'>
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <audio id='beep'src='censor-beep-1sec-8112 (1).mp3'></audio>
    </div>
  );
};

export default TimeCountDown;
