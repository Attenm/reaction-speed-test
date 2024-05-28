import {useEffect, useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';

function App() {

  const [isReady, setIsReady] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [timeSinceActive, setTimeSinceActive] = useState(0);
  const [result, setResult] = useState(null);

  const toggleReady = () => {
    setIsReady(isReady => !isReady);
  }
  const makeActive = () => {
    setIsActive(true);
  }
  const makeInactive = () => {
    setIsActive(false);
  }
  const updateTime = () => {
    setTimeSinceActive(timeSinceActive => timeSinceActive + 1);
  }
  const resetTime = () => {
    setTimeSinceActive(0);
  }

  useEffect(()=>{
    if(isReady){
      const timeLeftSec = Math.floor(Math.random() * 5 + 1);
      const timeLeftMSec = timeLeftSec * 1000;
      const timer = setTimeout(()=>{
        makeActive();
      }, timeLeftMSec);
      return () => clearTimeout(timer);
    }
  }, [isReady])

  useEffect(()=>{
    let timer;
    if(isActive){
      timer = setInterval(()=>{
        updateTime();
      }, 1);
    }
    return () => {
        clearInterval(timer);
        resetTime();
    }
  }, [isActive])

  return (
      <div className='App'>
        {result ? <div className='result'>{result + ms}</div> : null}
        <Button 
          toggleReady={toggleReady}
          isReady={isReady}
          isActive={isActive}
          timeSinceActive={timeSinceActive}
          makeInactive={makeInactive}
          resetTime={resetTime}
          setResult={setResult}
        />
      </div>
  )
}

export default App
