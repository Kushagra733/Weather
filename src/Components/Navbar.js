import React, { useState } from 'react'
import './Navbar.css'
import Weather from  './Weather'
export default function Navbar() {

    let [text,setText] = useState("");
    let [x,setX] = useState([]);
    let [about,setMain] = useState("");
    let [tem,setTemp] = useState("");
    let [press,setPress] = useState("");
    let [humidity,setHumidity] = useState("");
    let [wind,setWind] = useState("");
    let [body,setBody] = useState(

        <Weather About="" temp="" press="" humidity="" wind="" />
    );

    let changeHandle = (event)=>{
        setText(event.target.value);
    }

    let clicked = () =>{
        
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+text+"&appid=0ea0d27e551fec6341d062e13dd91ba0")
        .then((response) => response.json())
        .then((data) =>setX(data));
        
        if(x.length!==0)
        {
            console.log(x.weather[0].description);

        setMain(x.weather[0].description);
        setTemp(x.main.temp);
        setPress(x.main.pressure);
        setHumidity(x.main.humidity);
        setWind(x.wind.speed);
        setBody(
            <Weather About={about } temp={(tem-271) + ' Celsius'} press={press + " pa"} humidity={humidity + " Units"} wind={wind + " m/s"} />
        );

        }

        


        
    }

    


  return (
      <>
          <div className='bottom'> 
      
      

        <div className="head">
            
            
            <div className='x'>
                <a href=''>
                <img className='y' src={require('./sun.png')} alt="sun" />
                <span>Weather App</span>
                </a>
            </div>

        </div>
        <div className="input">
            <textarea name="text" id="city" cols="50" rows="1" value={text} onChange={changeHandle}></textarea>
            <button className='button' onClick={clicked}>Search</button>
        </div>

      

    </div>
    <div>
        {body}
    </div>
    </>
  )
}
