import React from 'react'

function DailyForecast({ title, weatherData }) {
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
                        {weatherData ? weatherData.forecast.forecastday[0].date : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[0].day.condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[0].day.avgtemp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? weatherData.forecast.forecastday[1].date : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[1].day.condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[1].day.avgtemp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? weatherData.forecast.forecastday[2].date : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[2].day.condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[2].day.avgtemp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? weatherData.forecast.forecastday[3].date : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[3].day.condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[3].day.avgtemp_c + '°C' : ''}</p>

                </div><div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? weatherData.forecast.forecastday[4].date : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[4].day.condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[4].day.avgtemp_c + '°C' : ''}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        {weatherData ? weatherData.forecast.forecastday[5].date : ''}
                    </p>
                    <img src={weatherData ? weatherData.forecast.forecastday[5].day.condition.icon : ''} className="w-12 my-1" alt="" />
                    <p className="font-medium">{weatherData ? weatherData.forecast.forecastday[5].day.avgtemp_c + '°C' : ''}</p>

                </div>
            </div>
        </div>
    )
}

export default DailyForecast