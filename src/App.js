import React , {useState} from 'react';
import './App.css';
import TimeCountDown from "./Timecountdown"

function App() {

  const [breakl, setBreak] =  useState(5);
  const [sessionl, setSession] = useState(25);
  const [isPlay, setIsPlay] = useState(false);
  
  const reset = (event) => {
    console.log(event.target);
    setBreak(5);
    setSession(25);
    setIsPlay(false);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }

  const increBreak = () => {
    console.log(breakl);
    setBreak((breakl) => breakl >= 60 ? breakl : breakl + 1);
  }

  const decreBreak = () => {
    setBreak((breakl) => breakl <= 1 ? breakl : breakl - 1);
  }

  const increSession = () => {
    setSession(sessionl => sessionl >= 60 ? sessionl : sessionl + 1);
  }
  
  const decreSession = () => {
    setSession(sessionl => sessionl <= 1 ? sessionl : sessionl - 1);
  }

  return (
    <div className="App">
      <div className='inner-container'>
        <h1>25 + 5 Clock</h1>
        <div className='control-bar'>
          <div id='break-control'>
            <label id="break-label"><h2>Break Length</h2></label>
            <div id='break-container'>
              <i onClick={increBreak} id='break-increment' className="fa-solid fa-arrow-up"></i>
              <span id='break-length'>{breakl}</span>
              <i onClick={decreBreak} id="break-decrement" className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
          <div id='session-control'>
            <label id="session-label"><h2>Session Length</h2></label>
            <div id='session-container'>
                <i onClick={increSession} id="session-increment" className="fa-solid fa-arrow-up"></i>
                <span id='session-length'>{sessionl}</span>
                <i onClick={decreSession} id='session-decrement' className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </div>
        <TimeCountDown initialBreakMinutes={breakl} initialSessionMinutes={sessionl} initialSeconds={0} isPlay={isPlay} />
        <div id='buttons'>
        <i onClick={() => setIsPlay(!isPlay)} id="start_stop" className={`fa-solid ${isPlay ? 'fa-pause' : 'fa-play'}`}></i>
          <i onClick={reset} id="reset" className="fa-solid fa-repeat"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
