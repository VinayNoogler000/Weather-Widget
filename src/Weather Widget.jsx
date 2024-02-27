import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SearchForm from './SearchForm.jsx';
import WeatherCard from './WeatherCard.jsx';
import { useState } from 'react';

export default function WeatherWidget() {
    let [weatherData, setWeatherData] = useState({ 
        location: "Mumbai", 
        temp: 32.99, 
        feelsLike: 31, 
        humidity: 21, 
        tempMax: 32.99,
        tempMin: 29.94,
        weather: "smoke",
        pressure: 1014,
    });

    return (
        <div>
            <h1>Weather Widget </h1>
            <SearchForm updateWeatherData={setWeatherData} />
            <WeatherCard data={weatherData} />
        </div>
    );
}