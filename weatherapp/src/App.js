import React, { useState } from 'react'
import './App.css';
import Api from './components/api/api'
import Input from './components/input/input'
import Location from './components/location/Location'
import Weather from './components/weather/Weather'
import Hero from './components/hero/Hero'


function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = text => {
      fetch(`${Api.base}weather?q=${text}&units=metric&APPID=${Api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('')
        setWeather(result)
        console.log(result)
      })

  }

  return (
    <div className="app">
      <div className="container">
        <div className="background"></div>
        <main>
          <Input onSearch={search}/>

          {(typeof weather.main != "undefined") ? (
            <div>
              <Location 
                city={weather.name} 
                country={weather.sys.country}
              />
              <Weather 
                temperature={Math.round(weather.main.temp)}
                weather={weather.weather[0].main}
              />
            </div>
          ) : <Hero />}
        </main>
      </div>
    </div>
  );
}

export default App;
