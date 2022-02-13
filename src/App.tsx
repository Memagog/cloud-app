import React, { useEffect } from 'react';
import './App.css';
import { Main } from './components/Main';

function App() {
  // useEffect(() => {
  //   fetch("https://word.alexi.workers.dev", {
  //     "mode": "no-cors"
  //   })
  //   .then(res => console.log(res))
  // }, []);

  return (
   <Main />
  );
}

export default App;
