import react, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import backgroundImg from "./assets/Background.png"
import BattleMemes from './pages/battlememes';

function App() {
  let body = document.querySelector("body")
  console.log(body)
  body.style.backgroundImage = `URL(${backgroundImg})`
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
