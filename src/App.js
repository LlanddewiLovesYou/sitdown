import React from 'react';
import './App.css';

import { fetchSitDown } from './util/roll.js'
import { Header } from './components/header.jsx'
import { Dice } from './components/dice.jsx'
import { Display } from './components/display.jsx'


function App() {
  const sitDown = fetchSitDown()
  // const sitDown = {id: 3, title: "HeadButt the Screen", summary: "do the thing"}
  const diceRoll = sitDown.id

  return (
    <div className="App">
      <Header></Header>
      <Dice diceRoll={diceRoll}></Dice>
      <Display sitDown={sitDown}></Display>
    </div>
  );
}

export default App;
