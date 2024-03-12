import { useState } from "react"
import React from 'react'

import './App.css'
import { useEffect } from "react";

function App() {
  const [time,setTime] = useState(new Date());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setTime(new Date());
    },1000);
    return ()=> clearInterval(timer);
  })
  const zero = (num)=>{
    return num<10 ? `0${num}` : num;
  }
  const formatHour = (hour)=>
  {
    return hour === 0 ? 12 : hour > 12  ? hour - 12: hour;
  }
  return (
    <>
    <div className="container">
    <h1>Digital clock</h1>
    <div className="time">{zero(formatHour(time.getHours()))}:{zero(time.getMinutes())}:{zero(time.getSeconds())} </div>
    <div className="date">
      {zero(time.getDate())}/{zero(time.getMonth()+1)}/{zero(time.getFullYear())}
    </ div>

    </div>
    </>
  )
}

export default App