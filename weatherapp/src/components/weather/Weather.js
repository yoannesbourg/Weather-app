import React from 'react'

const Weather = ({temperature, weather}) => {
    return (
        <div className="weather-box">
            <div className="temp">
                {temperature} ºC
            </div>

            <div className="weather">
                {weather}
            </div>
      </div>
    )
}

export default Weather