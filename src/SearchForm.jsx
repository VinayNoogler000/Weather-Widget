import SearchBox from './SearchBox.jsx';
import SearchButton from './SearchButton.jsx';
import { useState } from 'react';
import getWeatherInfo from './weatherInfo.js';

export default function SearchForm({ updateWeatherData }) {
    let [location, setLocation] = useState("Mumbai");

    async function handleSubmit(event) { //handler for 'submit' event on <form> element
        event.preventDefault();
        console.log(location);
        updateWeatherData(await getWeatherInfo(location));
        setLocation("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <SearchBox location={location} updateLocation={setLocation}/>
            <SearchButton />
        </form>

    );
}