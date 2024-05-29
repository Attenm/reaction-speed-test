import {useEffect, useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';

function App() {

  const [isReady, setIsReady] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [result, setResult] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const toggleReady = () => {
    setIsReady(isReady => !isReady);
  }
  const makeActive = () => {
    setIsActive(true);
  }
  const makeInactive = () => {
    setIsActive(false);
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
      setStartDate(new Date());
  }, [isActive])

  return (
      <div className='App'>
        {result ? <div className='result'>{result + 'ms'}</div> : null}
        <Button 
          toggleReady={toggleReady}
          isReady={isReady}
          isActive={isActive}
          makeInactive={makeInactive}
          setResult={setResult}
          startDate={startDate}
        />
      </div>
  )
}

export default App
