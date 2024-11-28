import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherCard.css';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d53376793d46d0e7c604382f1115639&units=metric`
        );
        setWeatherData(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data. Please try another city.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', display: 'inline-block' }}>
      <h2>{weatherData.name}</h2>
      <p>{currentDate}</p> 
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
      />
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
