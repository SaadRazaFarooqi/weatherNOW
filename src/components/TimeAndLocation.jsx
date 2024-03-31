import React from 'react'


function TimeAndLocation({ weatherData }) {
  console.log(weatherData);
  return <div>
    <div className="flex items-center justify-center my-6">

      <p className="text-white text-xl font-extralight">
      {weatherData ? weatherData.location.localtime : ''}
      </p>

    </div>
    <div className="flex items-center justify-center my-3">
      <p className="text-white text-3xl font-medium"> {weatherData ? weatherData.location.name : ''} {weatherData ? weatherData.location.country : ''}</p>
    </div>

  </div>
}

export default TimeAndLocation