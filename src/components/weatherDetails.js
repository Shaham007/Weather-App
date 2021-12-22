import React , {useEffect, useState} from 'react';
import '../components/styles.css';

function WeatherDetails(
    {temp,
    humidity,
    pressure,
    weatherType,
    name,
    speed,
    country,
    sunset,}) {
    
    const currentDate = new Date().toLocaleString();

    const [weatherState, setWeatherState] = useState('')

    useEffect(() => {

     if (weatherType){
          switch (weatherType){
              case 'Clouds': setWeatherState('wi-night-cloudy');
              break;
              case 'Haze': setWeatherState('wi-fog');
              break;
              case 'Clear': setWeatherState('wi-day-sunny');
              break;
              case 'Mist': setWeatherState('wi-dust');
              break;
              case 'Rain': setWeatherState('wi-day-rain');
              break;
              case 'Snow': setWeatherState('wi-snow-wind');
              break;
              case 'Smoke': setWeatherState('wi-smog');
              break;
          }
     }   

    },[weatherType])


    // converting seconds in time

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
   
    return (
        <div>
            <div className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span> {temp} &deg; </span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weatherType}</div>
                        <div className='place'>{name} , {country}</div>
                    </div>
                    <div className='date'>
                     {currentDate} 
                    </div>
                </div>



                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p className='extre-info-leftside'>
                                <i className="wi wi-snow"></i>
                            </p>
                            <p>
                                {timeStr} pm <br/> Sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p className='extre-info-leftside'>
                                <i className="wi wi-humidity"></i>
                            </p>
                            <p>
                                {humidity} % <br /> Humindity
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p className='extre-info-leftside'>
                                <i className="wi wi-thunderstorm"></i>
                            </p>
                            <p>
                                {pressure} <br /> Pressure
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p className='extre-info-leftside'>
                                <i className="wi wi-strong-wind"></i>
                            </p>
                            <p>
                                {speed} <br /> Speed
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default WeatherDetails;
