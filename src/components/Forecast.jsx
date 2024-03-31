import React from 'react'

function Forecast({ title, weatherData }) {
    function formatTimeToAMPM(dateTimeString) {
        const date = new Date(dateTimeString);
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        return formattedTime;
    }

    return (
        <div>

            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />

            <div className="flex flex-row items-center justify-between text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? formatTimeToAMPM(weatherData.forecast.forecastday[0].hour[0].time) : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[0].hour[0].condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[0].hour[0].temp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? formatTimeToAMPM(weatherData.forecast.forecastday[0].hour[4].time) : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[0].hour[4].condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[0].hour[4].temp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? formatTimeToAMPM(weatherData.forecast.forecastday[0].hour[8].time) : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[0].hour[8].condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[0].hour[8].temp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? formatTimeToAMPM(weatherData.forecast.forecastday[0].hour[12].time) : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[0].hour[12].condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[0].hour[12].temp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? formatTimeToAMPM(weatherData.forecast.forecastday[0].hour[16].time) : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[0].hour[16].condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[0].hour[16].temp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? formatTimeToAMPM(weatherData.forecast.forecastday[0].hour[20].time) : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[0].hour[20].condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[0].hour[20].temp_c + '°C' : ''}</p>

                </div>
            </div>
        </div>
    )
}

export default Forecast