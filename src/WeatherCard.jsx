import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import getWeatherImg from './weatherImg.js'; 
import WeatherIcon from './WeatherIcon.jsx';

function WeatherCard({ data }) {

    return (
        <div style={{ display: "flex", justifyContent: "center" }} >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={getWeatherImg(data.weather)}
                    title="weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.location} <WeatherIcon data={data} />
                    </Typography>
                    <Typography variant="body2" color="text.secondary" commponent={"span"}>
                        <div>Temperature: {data.temp} &deg;C </div>
                        <div>Weather is {data.weather} & Feels Like {data.feelsLike} &deg;C </div>
                        <div>Min Temperature: {data.tempMin} &deg;C </div>
                        <div>Max Temperature: {data.tempMax} &deg;C </div>
                        <div>Humidity: {data.humidity}% </div>
                        <div>Pressure: {data.pressure}hpa </div>

                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default WeatherCard;