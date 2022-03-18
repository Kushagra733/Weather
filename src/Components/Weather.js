import React, { useState } from 'react'
import './Weather.css'
export default function Weather(props) {

  
  return (
    <div className='body'>
        <div className="val"><span className='bold'>About: </span>{props.About} </div>
        <div className="val"><span className='bold'>Temperature: </span> {props.temp } </div>
        <div className="val"><span className='bold'>Pressure: </span> {props.press  } </div>
        <div className="val"><span className='bold'>Humidity: </span> {props.humidity } </div>
        <div className="val"><span className='bold'>WindSpeed: </span> {props.wind } </div>
        
    </div>
  )
}
