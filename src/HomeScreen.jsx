import React, { useState } from "react";
import { getWeatherData } from "./api";
import WeatherCard from "./WeatherCard";
import { COLORS } from "./constant";

const HomeScreen = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data.list);
      setError("");
    } catch (error) {
      setError("Error fetching weather data.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Weather in your city</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchWeather} style={styles.searchBtn}>
          Search
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.weatherList}>
        {weatherData.map((item) => (
          <WeatherCard
            key={item.dt}
            date={new Date(item.dt_txt).toLocaleDateString()}
            temp={item.main.temp - 273.15} // Convert from Kelvin to Celsius
            description={item.weather[0].description}
            humidity={item.main.humidity}
            tempMin={item.main.temp_min - 273.15}
            tempMax={item.main.temp_max - 273.15}
            pressure={item.main.pressure}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    color: COLORS.orange,
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px",
  },
  searchBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: COLORS.brown,
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  weatherList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "18px",
  },
};

export default HomeScreen;
