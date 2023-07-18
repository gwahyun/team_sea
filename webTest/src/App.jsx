import { useState } from 'react'
import GameMain from './GameMain'
import GameMain2 from './GameMain2';
import GameMain3 from './GameMain3';
import GameMain4 from './GameMain4';
import Sine1 from './Sine1';
import Sine2 from './Sine2';
import Sine3 from './Sine3';
import Move1 from './Move1';
import Move2 from './Move2';
import Move3 from './Move3';
import Move4 from './Move4';
import Move5 from './Move5';
import Move6 from './Move6';
import 'galmuri/dist/galmuri.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Sound from './Sound';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Result from './Result';
function App() {

  return (
    <>
  <Sound/>
    <Routes>
      <Route path="/" element={<GameMain/>} />
      <Route path="/main" element={<GameMain2 />}/>
      <Route path='/start' element={<GameMain3/>}/>
      <Route path='/start1' element={<GameMain4/>}/>
      <Route path='/1' element={<Sine1/>}/>
      <Route path='/2' element={<Sine2/>}/>
      <Route path='/3' element={<Sine3/>}/>
      <Route path='/4' element={<Move1/>}/>
      <Route path='/5' element={<Question1/>}/>
      <Route path='/6' element={<Move2/>}/>  
      <Route path='/7' element={<Question2/>}/>
      <Route path='/8' element={<Move3/>}/>
      <Route path='/9' element={<Question3/>}/>
      <Route path='/10' element={<Move4/>}/> 
      <Route path='/11' element={<Question4/>}/> 
      <Route path='/12' element={<Move5/>}/> 
      <Route path='/13' element={<Question5/>}/> 
      <Route path='/14' element={<Move6/>}/> 
      <Route path='/15' element={<Question6/>}/> 
    <Route path='/result' element={<Result/>} />
    </Routes>
    </>
  )
}

export default App
