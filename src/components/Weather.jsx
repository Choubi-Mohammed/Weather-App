import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

export default function Weather() {
    const [weatherdata,setweatherdata]=useState(false)
    const inputref=useRef()
    const allicon={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,
        "03n":cloud_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "010d":rain_icon,
        "010n":rain_icon,
        "013d":snow_icon,
        "013n":snow_icon,
    }
    const search= async(city)=>{
        try {
            if (!city || city.trim() === "") {
                alert("Please enter a valid city name."),
                console.log("Please enter a valid city name.");
                return;
            }
            const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city},ma&appid=${import.meta.env.VITE_APP_ID}`
            const res=await fetch(URL)
            const data=await res.json()
            if (data.cod === "404") {
                alert('City not found. Please try again.')
                console.log("City not found. Please try again.");
                return;
            }
            console.log(data)
            const icon =allicon[data.weather[0].icon] || clear_icon
            setweatherdata({
                humidity:data.main.humidity,
                windspeed:data.wind.speed,
                temerateur: Math.floor(data.main.temp - 273.15),
                location:data.name,
                icon:icon
            })
        } catch (error) {
            console.log("Error fetching data:",error)
        } 
    }
    useEffect(()=>{
        search("El kelaa des sraghna")
    },[])
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" ref={inputref} placeholder='Search'/>
            <img src={search_icon} onClick={()=>search(inputref.current.value)}/>
        </div>
        <img src={weatherdata.icon} alt=""  className='weather-icon'/>
        <p className='temperateur'>{weatherdata.temerateur} C</p>
        <p className='location'>{weatherdata.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                    <p>{weatherdata.humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                    <p>{weatherdata.windspeed}Km/h</p>
                    <span>Wind speed </span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
