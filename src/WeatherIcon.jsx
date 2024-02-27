import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';

export default function WeatherIcon({ data }) {
    return (
        <>
            {data.temp < 10 || data.weather == "snow" ?
                <AcUnitIcon /> : data.weather == "rain" || data.weather == "thunderstorm" || data.weather == "shower rain" ?
                    <WaterDropIcon /> : data.weather == "few clouds" || data.weather == "scattered clouds" || data.weather == "broken clouds" ?
                        <CloudIcon /> : <WbSunnyIcon />}
        </>
    );
}