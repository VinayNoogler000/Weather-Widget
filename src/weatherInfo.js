import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "c13d4ae5b5ee077d7e93db5c8858f727";
let unit = "metric"; //stores the measurement unit of the weather data, sent by the API as a response.
let langCode = "en"; //stores the code of the language of the weather data, sent by the API as a response.

async function getWeatherInfo(location) {
    // let geoCodUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${API_KEY}`;
    //Above☝️ variable stores 'GeoCoding API' url, which takes location name as request and send their co-ordinates 
    //as response. We should use the above 'GeoCoding API' to get co-ordinates of location names, instead of using in-built geocoding
    //in 'OpenWeather API', as the in-built geocoding is deprecated.

    try {
        // let resp = await axios.get(geoCodUrl);    //sends the request to 'geoCodeUrl' and gets the response
        // let latitude = resp.data[0].lat;     //stores the location's latitude, sent by 'geoCodeUrl'
        // let longitude = resp.data[0].lon;    //stores the location's longitude, sent by 'geoCodeUrl'

        let resp = await axios.get(API_URL + `q=${location}&units=${unit}&lang=${langCode}&appid=${API_KEY}` )
        //☝️Above variable stores the main response of the 'API_URL' or 'OpenWeatherAPI'.

        let weatherInfo = { //stores the weather info of the 'location', like temp, humidity, etc, in the form of an object.
            location: resp.data.name, 
            temp: resp.data.main.temp,
            feelsLike: resp.data.main.feels_like,
            tempMin: resp.data.main.temp_min,
            tempMax: resp.data.main.temp_max,
            pressure: resp.data.main.pressure,
            humidity: resp.data.main.humidity,
            weather: resp.data.weather[0].description,
        };
        console.log(weatherInfo);
        return weatherInfo; 
    }
    catch (err) {
        alert("Location Not Found!\nPlease enter correct location. ");
        return "Error: " + err;
    }
}

export default getWeatherInfo;