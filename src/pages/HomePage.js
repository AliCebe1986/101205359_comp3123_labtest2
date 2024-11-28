import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import './HomePage.css';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

const HomePage = () => {
  const [city, setCity] = useState('Toronto');

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
        />
      </div>
      <WeatherCard city={city} />
    </div>
  );
};

export default HomePage;
