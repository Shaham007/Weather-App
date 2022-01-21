import React, {useEffect, useState }from 'react';
import '../components/styles.css';
import WeatherDetails from '../components/weatherDetails';

function SearchMain() {

    const [searchTerm, setSearchTerm] = useState("");
    const [tempInfo , setTempInfo] = useState({});

    const getWeatherInfo = async () =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=f07f8a84207374de36c570fa3957acd9`

            let res = await fetch(url);
            let data = await res.json();
            const {temp, humidity , pressure} = data.main;
            const {main: weatherType} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country , sunset} = data.sys;

            const myNewWeatherInfo = {
                temp , 
                humidity , 
                pressure , 
                weatherType ,
                name , 
                speed ,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo)

        } catch (error){
            console.log(error);
        }
    };





    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <>
        <div className="main">
                <div className="webdesigntuts-workshop">
                    <form action="" method="">

                        <input placeholder="Search City.." 
                        type="search" id="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}/>
                        
                        <button onClick={getWeatherInfo} type="button" className="searchButton">Search </button>
                    </form>
                </div>
        </div>

            <WeatherDetails {...tempInfo} />
            
         </>
    )
}

export default SearchMain;
