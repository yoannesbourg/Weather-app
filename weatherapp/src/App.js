import React, { useState } from 'react'
import './App.css';
import Api from './components/api/api'
import Input from './components/input/input'


function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="background"></div>
        <main>
          <Input />
          <div>
            <div className="location-box">
              <div className="location">New York, US</div>
              <div className="date">15/02/2021</div>
            </div>

            <div className="weather-box">
              <div className="temp">
                15 ºC
              </div>

              <div className="weather">
                Cloud
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
