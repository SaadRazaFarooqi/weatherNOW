import axios from "axios";
import { useState } from 'react';
import './App.css';
import DailyForecast from "./components/DailyForcast";
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';

function App() {

  const API_KEY = "9d9e28816be54d2abd9150724243103"
  const [weatherData, setWeatherData] = useState(null);
  const handleSearch = (searchTerm) => {
    fetchData(searchTerm);
  };

  const fetchData = async (data) => {
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${data}&days=7&aqi=no&alert=no`;
    try {
      const response = await axios.get(API_URL);
      if (response.data) {
        setWeatherData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert('No Location Found');
    }
  };

  return (
    <div className="mx-auto max-w-screen-mx mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
      { }
      <Inputs onSearch={handleSearch} />

      <TimeAndLocation weatherData={weatherData} />
      <TemperatureAndDetails weatherData={weatherData} />

      <Forecast title="hourly Forecast" weatherData={weatherData} />
      <DailyForecast title="daily Forecast" weatherData={weatherData} />
    </div>
  );

}

export default App;
