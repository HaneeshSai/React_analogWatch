import React, { useEffect, useState } from 'react'
import "./App.css"

export default function () {

  const [hour, setHour] = useState(new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours())
  const [minutes, SetMinutes] = useState(new Date().getMinutes())
  


  useEffect(() => {
    setInterval(() => {
      let hours = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()
      setHour(hours)
      SetMinutes(new Date().getMinutes())
      setSeconds(new Date().getSeconds())
    }, 10000);
  }, [])
  

  return (
    <div className='main'>
      <div className='container'>
      <div className="watch">
      <div className='min' style={{rotate: `${minutes * 6}deg`}}></div>
      <div className="center"></div>
      <div className="hour" style={{rotate: `${(hour * 30) + (minutes/60) * (minutes)}deg`}}></div>
        </div>
        <div className="cover">
          
        </div>
        <div className="timer">
          <p>{hour < 10? `0${hour}` : hour}</p>
          <span>:</span>
          <p>{minutes < 10? `0${minutes}` : minutes}</p>
          <p>{new Date().getHours() < 12 ? "AM" : "PM"}</p>
        </div>
      </div>
    </div>
  )
}
