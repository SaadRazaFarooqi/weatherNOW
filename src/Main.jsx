import axios from "axios";
import { useState } from "react";

function Main() {
    const API_KEY = "e8c9f766856a7516da50b90ccad24c9b"
    const [weatherLocationData, setweatherLocationData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [WeeklyWeatherData, setWeeklyWeatherData] = useState([]);
    const [HourlyData, setHourlyData] = useState(null);

    const fetchData = async (city) => {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        try {
            const response = await axios.get(API_URL);
            if (response.data) {
                setWeatherData(response.data.current);
                setweatherLocationData(response.data.location);
                setWeeklyWeatherData(response.data.forecast);
                setHourlyData(response.data.forecast.forecastday[0]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error, such as showing an error message to the user
        }
    };

    const onSearchedCity = (city) => {
        fetchData(city);
    };

    return (
        <div>
            {/* Your main component JSX */}
        </div>
    );
}

export default Main;
