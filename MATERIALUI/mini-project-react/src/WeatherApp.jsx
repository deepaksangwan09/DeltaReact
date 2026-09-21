import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi", 
        feelsLike: 38.08, 
        temp : 34.96,
        tempMin : 34.05,
        tempMax : 34.96,
        humidity : 47,
        weather : "haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App</h3>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>

        </div>
    )
}