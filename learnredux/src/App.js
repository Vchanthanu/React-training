import React from 'react';
import './App.css';
import FirstName from './container/firstname';
import Lastname from './container/lastname';
import Score from './container/score'
import Display from './container/display';

function App() {
  return (
    <div>
      <FirstName />
      <Lastname />
      <Score/>
      <Display/>
    </div>
  );
}

export default App;
