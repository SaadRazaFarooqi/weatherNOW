import React from 'react'
import { UilTemperature } from '@iconscout/react-unicons'
import { UilTear } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { UilSunset } from '@iconscout/react-unicons'
function TemperatureAndDetails({weatherData}) {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{weatherData ? weatherData.forecast.forecastday[0].day.condition.text: ''}</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src={weatherData ? weatherData.current.condition.icon : ""}  alt="" />
                <p className="text-5xl"> {weatherData ? weatherData.current.temp_c + ' °C' : ''}</p>

                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />
                        Real feel:
                        <span className="font-medium ml-1">{weatherData ? weatherData.current.feelslike_c + '°' : ''}</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1" />
                        Humidity
                        <span className="font-medium ml-1">{weatherData ? weatherData.current.humidity + '%' : ''}</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1" />
                        Wind Speed:
                        <span className="font-medium ml-1">{weatherData ? weatherData.current.wind_mph + 'mph' : ''}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">

                <UilSun />
                <p className="font-light">
                    Rise: <span className="font-medium ml-1">{weatherData ? weatherData.forecast.forecastday[0].astro.sunrise: ''}</span></p>
                <p className="font-light">|</p>

                <UilSunset />
                <p className="font-light">
                    Set: <span className="font-medium ml-1">{weatherData ? weatherData.forecast.forecastday[0].astro.sunset: ''}</span></p>
                <p className="font-light">|</p>

                <UilSun />
                <p className="font-light">
                    High: <span className="font-medium ml-1">{weatherData ? weatherData.forecast.forecastday[0].day.maxtemp_c + '°' : ''}</span></p>
                <p className="font-light">|</p>

                <UilSun />
                <p className="font-light">
                    Low: <span className="font-medium ml-1">{weatherData ? weatherData.forecast.forecastday[0].day.mintemp_c + '°' : ''}</span></p>
                <p className="font-light">|</p>

            </div>
        </div>
    )
}

export default TemperatureAndDetails;